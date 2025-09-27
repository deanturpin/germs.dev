# Stayin' alive...

## OS config
### Linux proc

```bash
echo 600 > /proc/sys/net/ipv4/tcp_keepalive_time
echo 60 > /proc/sys/net/ipv4/tcp_keepalive_intvl
echo 20 > /proc/sys/net/ipv4/tcp_keepalive_probes
```

### Registry keys
`HKEY_LOCAL_MACHINESYSTEMCurrentControlSetServicesTcpipParameters`

```
TCP_KEEPCNT: overrides tcp_keepalive_probes
TCP_KEEPIDLE: overrides tcp_keepalive_time
TCP_KEEPINTVL: overrides tcp_keepalive_intvl
```

Peek data to check socket is open.

```
recv(sock, &buf, 1, MSG_PEEK | MSG_DONTWAIT);
```

Linux only

```
MSG_DONTWAIT: set blocking per recv call
```

## Windows PowerShell script

```
while (1) {clear; echo hello; netstat -n -a | select-string 2300; sleep 1}
```

## C
Set extra params using `SOL_TCP`.

```c
optval = 1;
optlen = sizeof(optval);
if(setsockopt(s, SOL_SOCKET, SO_KEEPALIVE, &optval, optlen) < 0) {
perror("setsockopt()");
close(s);
exit(EXIT_FAILURE);
}
```

## Nagle's algorithm
> "Congestion Control in IP/TCP Internetworks"

- TCP_NODELAY
- https://en.wikipedia.org/wiki/Nagle%27s_algorithm

## References
- https://holmeshe.me/network-essentials-setsockopt-SO_KEEPALIVE/
- https://docs.microsoft.com/en-us/windows/win32/winsock/so-keepalive
- https://tldp.org/HOWTO/html_single/TCP-Keepalive-HOWTO/

