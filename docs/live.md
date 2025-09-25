# USB live boot

## Windows host
If you only want to create Windows 10 live USB then you can you use the
[Microsoft tool](https://www.microsoft.com/en-us/software-download/windows10).

Otherwise...

## WSL

```
sudo mkdir /mnt/g
sudo mount -t drvfs g: /mnt/g
```

## References
- [Kali Linux live images](https://www.kali.org/downloads/)
- [Mounting USB and network drives in WSL](https://www.scivision.dev/mount-usb-drives-windows-subsystem-for-linux/)

