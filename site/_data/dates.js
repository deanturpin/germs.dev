const { execFileSync } = require("child_process");

// When each entry was first written and last changed, from one pass over the
// git history, newest first. Entries have moved (copied from posts/ into docs/, numbered
// names dropped), so renames are followed back to keep their original dates.
// Keyed by input path ("./docs/bread.md") to match page.inputPath.
module.exports = () => {
  const dates = {};
  let log = "";
  try {
    log = execFileSync("git", ["log", "--format=%x00%aI", "--name-status", "-M", "-C", "--find-copies-harder"], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch {
    return dates;
  }

  // Historical path to the docs/ entry it became
  const current = {};
  for (const commit of log.split("\0").slice(1)) {
    const [date, ...changes] = commit.trim().split("\n");
    for (const change of changes) {
      const [status, from, to] = change.split("\t");
      if (!status) continue;
      const path = /^[RC]/.test(status) ? to : from;
      if (!current[path] && /^docs\/[^/]+\.md$/.test(path) && !status.startsWith("D")) current[path] = path;
      const entry = current[path];
      if (!entry) continue;
      const stamp = (dates["./" + entry] ||= { updated: date, created: date });
      stamp.created = date;
      if (/^[RC]/.test(status)) current[from] = entry;
    }
  }
  return dates;
};
