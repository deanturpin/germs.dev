---
title: Compiler explorer installation
---

# Compiler explorer installation

- Create GCP Linux VM with 8GB RAM
- Install whatever version of compilers you wish to support 

```bash
git clone https://github.com/compiler-explorer/compiler-explorer.git
sudo apt install --yes npm make
  sudo npm cache clean -f


curl -sL https://deb.nodesource.com/setup_14.x  | sudo bash - 
   28  sudo apt update nodejs
   29  sudo apt install nodejs
   30  nodejs --version

cd compiler-explorer

  sudo npm install -g n
  sudo n stable

make dev
```


## References
- https://computingforgeeks.com/install-node-js-14-on-ubuntu-debian-linux/
- https://gist.github.com/jniemann66/e666d0c0a3751f9be0361b860d985dbe

