# Ports Blocked Over VPN

Or are they?

A problem that has followed me around for the last two jobs: I can't access the
git server using ssh authentication when I'm tethered. Yet cloning via https is
fine... it kinda feels like ports are being blocked by the VPN.

However, it seems to be my EE phone not working correctly over IPv6, or rather
not switching back to IPv4 correctly. And the fix is to create another APN with
only IPv4 enabled.

You don't need to enter something for every field.

```text
Name ee1
APN everywhere
MCC 234
MNC 30
Authentication type PAP
APN type default,supl
APN protocol IPv4
APN roaming protocol IPv4
Bearer Unspecified
```

## References
- [Huawei P30 APN settings](https://apn-uk.gishan.net/en/apn/ee/huawei-p30-pro)

