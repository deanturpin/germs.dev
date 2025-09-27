---
tags:
  - linux
  - kernel
  - ubuntu
  - systems
---

# Install Linux 6 on Ubuntu 2023

> This is unproven! Careful now.

See [kernel.ubuntu.com](https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.2-rc4/).

```bash
mkdir /tmp/kernel
cd /tmp/kernel
curl -LO https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.2-rc4/amd64/linux-headers-6.2.0-060200rc4-generic_6.2.0-060200rc4.202301151633_amd64.deb
curl -LO https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.2-rc4/amd64/linux-headers-6.2.0-060200rc4_6.2.0-060200rc4.202301151633_all.deb
curl -LO https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.2-rc4/amd64/linux-image-unsigned-6.2.0-060200rc4-generic_6.2.0-060200rc4.202301151633_amd64.deb
curl -LO https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.2-rc4/amd64/linux-modules-6.2.0-060200rc4-generic_6.2.0-060200rc4.202301151633_amd64.deb

sudo dpkg -i *.deb
```
