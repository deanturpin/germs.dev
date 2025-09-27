# GDB

Debugger crib sheet

## Adding debug symbols

```bash
gcc -g hello.c
gdb a.out
```

```bash
# Run program
run

# Run and immediately break
start

# View code at current break point
list

# Break main
b main

# Break at line 9
b 9
```

## TUI mode - text user interface
- Type ctrl-X A
- ctrl L - repaint
- ctrl X2 - multiple windows
- ctrl X2 - view registers
- tui reg float - view floating registers
- ctrl x 1 - source code view
- ctrl p/n - command history

## Python interpreter built in (since version 7)

```
import os
print(os.pid())

python print(gdb.breakpoints()[0].location

# Set a breakpoint
python gdb.Breakpoint('7')
```

## References
- https://www.youtube.com/watch?v=PorfLSr3DDI&t=6s
- https://gist.github.com/rkubik/b96c23bd8ed58333de37f2b8cd052c30
