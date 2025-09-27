---
title: WSL 2
subtitle: Linux without running a VM
date: 2020-09-04
tags:
- linux
- wsl
---

# WSL 2

See also [Ubuntu](/post/ubuntu).

Work demands that I run a Windows 10 laptop but I no longer need to run a Linux
VM on the side.

- Windows key > "features"
- Enable "Windows Subsystem for Linux"
- Probably restart
- Windows key > store
- Install Ubuntu 20
- And you're away!

# Accessing the WSL filesystem
Access WSL from Windows:

```bash
\wsl$Ubuntu-20.04
```

Access the host from WSL

```bash
/mnt/c/Users
```

# Your argument is invalid
A very strange problem encountered in Kali on WSL: if sleep doesn't work you
might get really bizarre libc6 errors whilst installing packages.

```bash
$ sleep 1
sleep: cannot read realtime clock: Invalid argument
```

Simply remove the sleep from the end of this file: /var/lib/dpkg/info/libc6:amd64.postinst

```bash
if [ "$TELINIT" = "yes" ]; then
telinit u 2>/dev/null || true ; #sleep 1
fi
```

## References
- https://devblogs.microsoft.com/cppblog/c-with-visual-studio-2019-and-windows-subsystem-for-linux-wsl/
- https://docs.microsoft.com/en-us/windows/wsl/install-win10
- https://cmder.net/
