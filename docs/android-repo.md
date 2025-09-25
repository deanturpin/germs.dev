# Android Repo

There are lots of tutorials on how to initialise a repo but then what? The
basics work quite well and use multiple processors to sync dependencies but
I've yet to get to grips with doing a basic commit! It feels like you should be
able to do an atomic commit across multiple repos but the curses interface goes
all weird and I gave up for now.

It's also really annoying searching for information on something called "repo"!

---

# Repo basics

```bash
# Configure from remote URL (note default.xml is at the top level)
repo init -u repoURL

# Update/clone repos
repo sync

# List all repos
repo list

# Check changes
repo status
repo diff

# List all branches
repo branches

# Start a branch
repo start repo-migration --all
```
