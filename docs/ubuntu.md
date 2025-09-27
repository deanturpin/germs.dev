# Upgrading Ubuntu

## Get your current install up-to-date

```bash
sudo apt update
sudo apt full-upgrade
sudo apt dist-upgrade
sudo apt autoremove
```

## Edit upgrade strategy

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

## Let's do this!

Note the `-d` to [get it done](https://linuxconfig.org/how-to-upgrade-ubuntu-to-21-04).

```bash
sudo do-release-upgrade -d
```
