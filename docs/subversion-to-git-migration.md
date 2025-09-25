# Subversion to git migration

# Equivalent commands
## Commit and push to server
```bash
svn commit -m 'blah'
```
```bash
git commit -m 'blah'
git push
```

## Checkout
```bash
svn checkout <repo>
```
```bash
git clone <repo>
```

# Offline working
This doesn't exist in Subversion. Unless you're running your server locally.

git still allows you full config control (bar pushing to GitHub) without a
connection. Which is essential on the train where I do my best work.

I think many colleagues would argue that they always dev at their desk so this
is irrelevant. However, labs are often isolated and builds are carried over the
sneakernet. Changes propagate back the same way but it's a bit haphazard. Also
-- and this sounds odd as I'm writing it [in 2019] -- very few engineers have laptops.
These are mostly the preserve of managers to allow them to login from home.
(There's also a slightly unhelpful rule that you can only have either a desktop
or a laptop.)

# Diff with the server
git doesn't let you do this quite like Subversion, which is its normal MO. How
do you know if the server copy has changed?

Neither ```git diff``` nor ```git status``` will tell you if the server has
changed. However, if you're in the habit of working in a branch you can pull
master and then just diff your branch with it.

```bash
# Update master (assuming you're in a branch)
git pull

# Diff
git diff master

# If you're happy, pull the changes into your branch
git pull origin master
```

It is quite keen to merge, though. Which I'm not used to. But perhaps we should
be trusting the tools more?

And this does raise the question: should the owner of repo be doing the merge
as part of the review process? I quite like this strategy.

# Aliases
I actually use lots of aliases for common git commands which speeds things up even more.

```bash
alias gd='git wdiff'
alias gh='git diff HEAD'
alias gl='git log --graph --oneline --decorate --all'

# Commit all and push - equivalent to a Subversion commit
alias gx='git commit -a && git push'
```

See my [bash aliases](https://github.com/deanturpin/config).

# Large files
You can quite easily end up with a small visible repo and a huge history.
(Particularly if you're in the habit of storing firmware images alongside
code.)

There are various [purge techniques](https://github.com/cmaitchison/git_diet)
but you must be comfortable with these before progressing. Alternativly...
[delete all commit
history](http://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github#26000395).
