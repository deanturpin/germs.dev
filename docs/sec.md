# Linux Security

One-liners

Creating a Linux password hash like you find in `/etc/shadow`.

```bash
mkpasswd --method=sha-512 --salt=Kf0TqvhN
```

Cracking a KeePass2 master password with John the Ripper.

```bash
john <(keepass2john easy.kdbx)
```
