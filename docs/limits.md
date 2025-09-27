---
title: Linux limits
date: 2020-11-17
tags:
- linux
- c
- filesystem
---

# Linux limits

See `/usr/include/linux/limits.h`.

```c
/bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note drafts/
#ifndef _LINUX_LIMITS_H
#define _LINUX_LIMITS_H

#define NR_OPEN 1024

#define NGROUPS_MAX 65536 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var supplemental group IDs are available drafts/
#define ARG_MAX 131072 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var # bytes of args + environ for exec() drafts/
#define LINK_MAX 127 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var # links a file may have drafts/
#define MAX_CANON 255 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var size of the canonical input queue drafts/
#define MAX_INPUT 255 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var size of the type-ahead buffer drafts/
#define NAME_MAX 255 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var # chars in a file name drafts/
#define PATH_MAX 4096 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var # chars in a path name including nul drafts/
#define PIPE_BUF 4096 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var # bytes in atomic write to a pipe drafts/
#define XATTR_NAME_MAX 255 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var # chars in an extended attribute name drafts/
#define XATTR_SIZE_MAX 65536 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var size of an extended attribute value (64k) drafts/
#define XATTR_LIST_MAX 65536 /bin /boot /dev /etc /home /lib /lib32 /lib64 /libx32 /lost+found /media /mnt /opt /proc /root /run /sbin /snap /srv /sys /tmp /usr /var size of extended attribute namelist (64k) drafts/

#define RTSIG_MAX 32

#endif
```

