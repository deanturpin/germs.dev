---
tags:
  - git
  - submodules
  - version-control
  - development
---




Are they really *that* bad? [Spoiler alert: yep, worse than you can imagine.]

## Adding submodules

Clone an [existing repo](https://gitlab.com/deanturpin/deps-submodules/) and update the submodules - note the hashes against folders in the repo.

```bash
git submodule init
git submodule update
```

Add a new submodule by HTTPS.

```bash
$ git submodule add https://github.com/deanturpin/dft.git
Cloning into '/home/deant/deps-submodules/dft'...
remote: Enumerating objects: 1417, done.
remote: Total 1417 (delta 0), reused 0 (delta 0), pack-reused 1417
Receiving objects: 100% (1417/1417), 17.58 MiB | 13.17 MiB/s, done.
Resolving deltas: 100% (832/832), done.
```

Commit the updated module config and the new submodule dir which will be actually be pushed as an empty dir and updated by the `update` command above.

```bash
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
(use "git restore --staged <file>..." to unstage)
modified: .gitmodules
new file: dft
```

## Making changes

You need to remember to tell the top level to push changes in submodules. But
after that it does feel like an atomic push to all servers. But if you forget
you can fix it by running `git push` in each submodule.

```bash
git push --recurse-submodules=on-demand
```

One thing you must be careful of is syncing before you've committed your changes. Because they will be gone.

## Bash config - always list submodule diffs

```bash
git config --global diff.submodule log
```

## Deleting submodules

Well [this](https://gist.github.com/myusuf3/7f645819ded92bda6677) all seems very complicated.

## References

- https://git-scm.com/book/en/v2/Git-Tools-Submodules
- https://devcenter.heroku.com/articles/git-submodules
