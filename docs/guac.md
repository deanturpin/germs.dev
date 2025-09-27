---
title: Apache Guacamole
subtitle: Installation and configuration
date: 2021-07-30
tags:
- apache
- linux
- rdp
- vnc
---

# Apache Guacamole

```bash
sudo apt install --yes software-properties-common
sudo add-apt-repository ppa:guacamole/stable
sudo apt install --yes guacamole-tomcat

sudo systemctl enable guacd
sudo systemctl start guacd

sudo ln -s /var/lib/guacamole/guacamole.war /var/lib/tomcat8/webapps
sudo ln -s /etc/guacamole/guacamole.properties /usr/share/tomcat8/.guacamole

sudo /etc/init.d/tomcat8 restart
sudo /etc/init.d/guacd start
```
