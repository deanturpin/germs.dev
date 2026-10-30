const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// The logbook is plain markdown in docs/, one entry per file, exactly as it
// was under MkDocs. Everything that dresses it lives in site/.

// Front matter, headings, code, lists, tables and quotes are skipped so the
// summary is the first ordinary paragraph of the entry
function summarise(source) {
  const body = source
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/^```[\s\S]*?^```/gm, "");
  for (const block of body.split(/\n\s*\n/)) {
    const text = block.trim();
    if (!text) continue;
    if (/^(#|[-*+] |\d+\. |\||>|<|!!!|    )/.test(text)) continue;
    const plain = text
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (plain.length < 20 || /^https?:\/\/\S+$/.test(plain)) continue;
    return plain.length > 180 ? plain.slice(0, 177).replace(/\s+\S*$/, "") + "…" : plain;
  }
  return "";
}

function firstHeading(source) {
  const match = source.replace(/^---\n[\s\S]*?\n---\n/, "").match(/^# (.+)$/m);
  return match && match[1].trim();
}

// MkDocs' "!!! tip \"Title\"" admonitions, rewritten as an aside whose
// indented body is still read as markdown
function admonitions(content) {
  return content.replace(
    /^!!! (\w+)(?: "([^"]*)")?\n((?:\n|    .*\n)+)/gm,
    (_, kind, title, body) =>
      `<aside class="admonition ${kind}">\n<p class="admonition-title">${title || kind}</p>\n\n` +
      body.replace(/^    /gm, "") +
      `\n</aside>\n\n`
  );
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, { errorOnInvalidLanguage: false });

  const slugify = eleventyConfig.getFilter("slugify");
  const md = markdownIt({ html: true, linkify: true, typographer: false })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink({ safe: false }),
      level: [2, 3, 4],
      slugify: (heading) => slugify(heading),
    });

  // Links between entries were written as MkDocs reads them, "daw.md" and
  // "tags#cpp", or for an older engine, "/post/size"; point them at the pages
  // 11ty writes
  const linkOpen = md.renderer.rules.link_open ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const href = tokens[idx].attrGet("href") || "";
    const entry = href.match(/^(?:\.\.\/|\.\/)?([\w-]+)\.md(#.*)?$/) || href.match(/^\/post\/([\w-]+)\/?(#.*)?$/);
    const tag = href.match(/^tags#(.+)$/);
    if (entry) tokens[idx].attrSet("href", `/${entry[1] === "index" ? "" : entry[1] + "/"}${entry[2] || ""}`);
    else if (tag) tokens[idx].attrSet("href", `/tags/${tag[1]}/`);
    return linkOpen(tokens, idx, options, env, self);
  };
  eleventyConfig.setLibrary("md", md);

  // Mermaid diagrams are drawn in the browser, so they skip the highlighter
  eleventyConfig.amendLibrary("md", (lib) => {
    const fence = lib.renderer.rules.fence;
    lib.renderer.rules.fence = (tokens, idx, ...rest) =>
      tokens[idx].info.trim() === "mermaid"
        ? `<pre class="mermaid">${lib.utils.escapeHtml(tokens[idx].content)}</pre>\n`
        : fence(tokens, idx, ...rest);
  });

  eleventyConfig.addPreprocessor("admonitions", "md", (data, content) => admonitions(content));

  // Entries are dated by git, so CI must check out the full history
  eleventyConfig.addGlobalData("eleventyComputed", {
    layout: (data) => {
      if (data.layout || !data.page.inputPath.endsWith(".md")) return data.layout;
      return { "/": "home.njk", "/tags/": "tags.njk" }[data.page.url] || "entry.njk";
    },
    title: (data) => {
      if (data.title) return data.title;
      if (!data.page.inputPath.endsWith(".md")) return undefined;
      return firstHeading(fs.readFileSync(data.page.inputPath, "utf8")) || data.page.fileSlug;
    },
    summary: (data) => {
      if (data.description) return data.description;
      if (!data.page.inputPath.endsWith(".md")) return undefined;
      return summarise(fs.readFileSync(data.page.inputPath, "utf8"));
    },
  });

  eleventyConfig.addCollection("entries", (api) =>
    api.getFilteredByGlob("docs/*.md")
      .filter((item) => item.url && item.url !== "/" && !["/tags/"].includes(item.url))
      .sort((a, b) => a.data.title.localeCompare(b.data.title, "en", { sensitivity: "base" }))
  );

  // Tags were written freehand ("c++", "OpenGL", "google cloud"), so each is
  // reduced to a URL-safe slug and spellings that share one share a page
  const tagSlug = (tag) => slugify(String(tag).toLowerCase().replace(/\+\+/g, "pp").replace(/#/g, "sharp"));
  eleventyConfig.addFilter("slug", tagSlug);

  // Every tag in use with its entries, biggest first, then alphabetical
  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Map();
    for (const item of api.getFilteredByGlob("docs/*.md")) {
      if (item.url === "/") continue;
      for (const tag of item.data.tags || []) {
        const slug = tagSlug(tag);
        if (!tags.has(slug)) tags.set(slug, { name: String(tag).toLowerCase(), items: new Set() });
        tags.get(slug).items.add(item);
      }
    }
    return [...tags.values()]
      .map(({ name, items }) => ({
        name,
        items: [...items].sort((a, b) => a.data.title.localeCompare(b.data.title, "en", { sensitivity: "base" })),
      }))
      .sort((a, b) => b.items.length - a.items.length || a.name.localeCompare(b.name));
  });

  eleventyConfig.addFilter("isoDate", (value) => new Date(value || Date.now()).toISOString().slice(0, 10));
  eleventyConfig.addFilter("shortDate", (value) =>
    new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }));
  eleventyConfig.addFilter("year", (value) => new Date(value).getFullYear());
  eleventyConfig.addFilter("byUpdated", (items, dates) =>
    [...items].sort((a, b) => (dates[b.inputPath]?.updated || "").localeCompare(dates[a.inputPath]?.updated || "")));
  eleventyConfig.addFilter("bySlug", (items, slug) => items.find((item) => item.fileSlug === slug));
  eleventyConfig.addFilter("head", (items, n) => items.slice(0, n));
  eleventyConfig.addFilter("initial", (title) => {
    const c = title.trim().charAt(0).toUpperCase();
    return /[A-Z]/.test(c) ? c : "#";
  });

  // Pages that aren't entries: built from site/pages rather than kept in docs/
  for (const file of fs.readdirSync("site/pages")) {
    eleventyConfig.addTemplate(file, fs.readFileSync(path.join("site/pages", file), "utf8"));
  }

  eleventyConfig.addPassthroughCopy({ "site/assets": "assets", "docs/robots.txt": "robots.txt" });
  eleventyConfig.ignores.add("docs/README.md");
  eleventyConfig.addWatchTarget("site/");

  return {
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    dir: {
      input: "docs",
      output: "public",
      includes: "../site/_includes",
      layouts: "../site/_layouts",
      data: "../site/_data",
    },
  };
};
