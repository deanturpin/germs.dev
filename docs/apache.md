---
title: Run Apache
subtitle: In Docker
date: 2020-12-04
tags:
- apache
- docker
- linux
---

# Run Apache

```bash
docker run --detach --rm --publish 80:80 deanturpin/aws-apache
```

```docker
FROM ubuntu

# Install dependencies
RUN apt update
RUN apt -y install apache2 vim

# Install apache and write hello world message
RUN echo 'Kem chho!' > /var/www/html/index.html

# Configure apache
RUN echo '. /etc/apache2/envvars' > /root/run_apache.sh
RUN echo 'mkdir -p /var/run/apache2' >> /root/run_apache.sh
RUN echo 'mkdir -p /var/lock/apache2' >> /root/run_apache.sh
RUN echo '/usr/sbin/apache2 -D FOREGROUND' >> /root/run_apache.sh
RUN chmod 755 /root/run_apache.sh

EXPOSE 80

CMD /root/run_apache.sh
```

