# Fixing a broken Gnome

Rename:

```bash
~/.config
~/.local
```

Try removing X config files:

```bash
% tree /usr/share/X11/xorg.conf.d                   /usr/share/X11/xorg.conf.d
/usr/share/X11/xorg.conf.d
├── 11-nvidia-offload.conf
└── 40-libinput.conf
```

Note removing the input config will stop your keyboard working!

It's much easier to `ssh` into your machine and restart Gnome.

```bash
sudo xstart
```
