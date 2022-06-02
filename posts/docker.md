---
title: Docker
subtitle: Crib sheet
date: 2021-05-05
tags:
- docker
- cli
- vm
- linux
---

# Docker

## Play with Docker
https://labs.play-with-docker.com/

## Commands
```
# Run image and jump into it
docker run -it gcc

# Remove all images
docker images -q | xargs docker rmi --force
```

