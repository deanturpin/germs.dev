# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dean Turpin's online logbook, kept since 2009. Every entry is a markdown file
in `docs/`, and those files are the source of truth: the site is generated
from them by 11ty and deployed to GitHub Pages by GitHub Actions. The layout
and type follow turpin.dev (`deanturpin/deanturpin.github.io`), with its own
green palette rather than turpin.dev's orange.

## Build and Deployment

```bash
npm install
npm run build   # 11ty into public/, then the Pagefind search index
npm run dev     # build, then serve on port 5174 with live reload
```

Pushing to `main` deploys: `.github/workflows/deploy.yml` lints the key
pages, builds and publishes `public/`. It checks out the full history
because entries are dated from git.

## Repository Structure

- `docs/` - the entries, one markdown file each, served at `/<file name>/`.
  Front matter is optional: `tags`, `title` (otherwise the first `#` heading)
  and `description` (otherwise the first ordinary paragraph). `docs/index.md`
  is the Topics panel on the home page and `docs/tags.md` the intro to the
  tag cloud. `docs/README.md` is not published
- `site/` - everything that dresses the entries
  - `_layouts/` - `base.njk` (head, menu, footer), `home.njk`, `entry.njk`,
    `tags.njk`
  - `_includes/` - the menu and the entry list shared by listings
  - `pages/` - pages that aren't entries (A to Z, tag pages, search, 404,
    sitemap), added as virtual templates by `eleventy.config.js`
  - `_data/` - `site.json` metadata, `dates.js` (created and updated dates
    per entry from one `git log` pass, following renames and copies),
    `build.js` (asset version)
  - `assets/` - `style.css` (colour tokens at the top), the Oswald face and
    the favicon
- `drafts/` - work-in-progress posts, not published

## Markdown handling

`eleventy.config.js` keeps MkDocs-era markdown working: links written as
`daw.md`, `tags#cpp` or `/post/size` are pointed at the 11ty URLs, `!!! tip`
admonitions become asides, and `mermaid` fences are drawn in the browser.
Markdown is not run through a template engine, so `{{` in code is safe.
Tags are freehand and grouped by slug, so `c++` and `cpp` share a page.

## SEO

- `site/pages/sitemap.njk` builds `/sitemap.xml`, with each entry's
  `lastmod` from git.
- `docs/robots.txt` is copied to the site root and points at the sitemap.
- `site/_layouts/base.njk` renders description, canonical, Open Graph and
  Twitter card metadata, plus Person structured data on the home page.
