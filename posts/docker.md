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
