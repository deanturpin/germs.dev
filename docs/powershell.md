---
title: PowerShell
subtitle: Equivalents to common bash commands
date: 2021-07-16
tags:
- bash
- cli
- linux
- powershell
---

# PowerShell

# Get-Content (alias gc)
```bash
cat file.txt
tail file.txt
head file.txt
tail -f file.txt
```

```powershell
gc file.txt
gc -head 50 file.txt
gc -tail 50 file.txt
gc -wait file.txt
```

