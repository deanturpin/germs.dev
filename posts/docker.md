# Docker

## Install on Linux

```bash
Docker install
sudo apt update
sudo apt install --yes docker.io
sudo systemctl start docker
sudo usermod -aG docker $USER
su - $USER # it may just be easier to reboot at this point
docker run hello-world
```

## Play with Docker

- https://labs.play-with-docker.com/

## Commands

```
# Run image and jump into it
docker run -it gcc

# Remove all images
docker images -q | xargs docker rmi --force

# Or... much nicer
docker system prune <<< y
```

## Streamlining your images

```bash
apt clean distclean autoclean autoremove
```

## Optimising container sizes

- Use Alpine version of base container
- Stable layers go at the top
- Make use of .dockerignore (check how much is transferred to build context)
- Consolidate series of commands that install and remove artifacts: previous layers are immutable
- Use multi-stage containers to copy only build assets into final container

### Tools

- dive
- slim

See https://www.youtube.com/watch?v=t779DVjCKC

