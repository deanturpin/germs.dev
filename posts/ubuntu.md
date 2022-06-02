---
title: Upgrading Ubuntu
date: 2021-09-23
tags:
- ubuntu
- cli
- linux
---

# Upgrading Ubuntu

# Get your current install up-to-date
```bash
sudo apt update
sudo apt full-upgrade
sudo apt autoremove
```

# Edit upgrade strategy
```bash
sudo vi /etc/update-manager/release-upgrades
```

Change this:
```bash
Prompt=lts
```

To this:
```bash
Prompt=normal
```

# Let's do this!
```bash
sudo apt dist-upgrade
```

## References
- https://linuxconfig.org/how-to-upgrade-ubuntu-to-21-04

