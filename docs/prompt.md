# Turbo charge your bash prompt

## Bash prompt variables

The escape characters that can appear in the bash prompt are
[well-documented](https://www.gnu.org/software/bash/manual/bash.html#Controlling-the-Prompt)
so let’s not cover that in any detail. But a good starting point is the
“user@host:dir” combo, which conveniently is also the _scp_ syntax.

```bash
PS1="u@h:w $ "
root@kali:/tmp $
```

Variables described in the bash documentation:

> PS1 - The primary prompt string. The default value is ‘s-v$ ’.

> PS0 - The value of this parameter is expanded like _PS1_ and displayed by interactive shells after reading a command and before the command is executed.

> PROMPT_COMMAND - If set, the value is interpreted as a command to execute before the printing of each primary prompt ($PS1).

## Sequence of evaluation

1. Read user command
1. Evaluate `PS0`
1. Execute user command
1. Execute `PROMPT_COMMAND`
1. Evaluate `PS1`

`PROMPT_COMMAND` seems the perfect place to place arbitrary functions but the terminal doesn't count any characters emitted and you end up with ugly alignment side-effects (more on that below). So let's insert commands directly into `PS1`. Notice I’ve used single quotes to ensure the command is run each time, not just when `PS1` is set. And we’re doing all our dev _locally_ in the shell rather than editing bash configuration files, so we can simply run _bash_ again at the prompt if our experiments have gone awry.

Let's ping a host of interest each time we hit return.

```bash
PS1='$(ping -c 1 -w 1 github.com >& /dev/null && echo OK || echo FAIL) u@h:w $ '
```

Great! When it succeeds. But if it fails and takes even a second to return the prompt becomes unusable.

## Using color

You _can_ use the ANSI `e[33m` codes in your bash scripts but I think `tput` is a far friendlier interface. (You'll still need to know the codes for your compiled code.)

Find out how many colours your system supports and print them.

```bash
tput colors
for c in {0..255}; do echo $(tput setab $c) $(tput sgr0)$c; done | column
```

# Ignoring control characters
If you're using non-printable control characters like setting the colour you must tell the shell not to count them lest it misbehaves. Cursoring through history doesn't work in this example:

```bash
PS1="$(tput setaf 44)$(date)$(tput sgr0) $ "
```

But we simply need to tell bash to ignore the control characters by enclosing them in square brackets thus:

```bash
PS1="[$(tput setaf 44)]$(date)[$(tput sgr0)] $ "
```

# What can we do at the prompt?
How about checking your crypto prices?

```bash
PS1='$(
curl --silent "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD" | grep -o [0-9.]*
) u@h:w $ '

9080.52 root@kali:/tmp $
```

Or displaying the location of your public IP?

```bash
PS1='$(
curl --silent ifconfig.co/country
) u@h:w $ '

United Kingdom root@kali:~/cpp $
```

# Further examples

```html
<script src="https://gist.github.com/deanturpin/2fc1bec5dfc7015e2be2b133713a91c0.js"></script>
```
