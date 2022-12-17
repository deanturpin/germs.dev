# TCP/IP

## Please Do Not Take Salami Pizza Away
Comparison of OSI (Open Systems Intercommunication) and TCP/IP models.

| OSI | TCP/IP | Protocol Data Unit | Protocols | Example | Hardware example |
| ------------ | ----------- | ------------------ | ---------------------- | ---------- | --------------------------------------------- |
| Application | Application | Files/data | | Facebook | Application layer gateway (packet inspection) |
| Presentation | | | ssh | Encryption | |
| Session | | | http, telnet | Login | |
| Transport | Transport | Segments/datagrams | TCP, UDP | TCP | Firewall (port number) |
| Network | Internet | Packets | IP, ICMP, ARP | ping | Router, layer 3 switch |
| Datalink | Network | Frames/bits | fibre, Ethernet, Wi-Fi | ARP | Bridge, switch (forward or not forward) |
| Physical | | | | Wi-Fi | Repeater, hub (multiport repeater) |


## Additionally
- ICMP: ping, sends echo request.
- ARP: Maps IP address to physical, "Layer 2.5".
- TCP starvation: UDP can hog the bandwidth on a mixed TCP/UDP system (TCP
backs off out of courtesy but UDP doesn't care).
- Delivery: TCP offers guaranteed delivery, UDP does not.

## Three way handshake
SYN stands for "synchronise". See [three way
handshake](https://en.wikipedia.org/wiki/Handshaking#TCP_three-way_handshake).

```
=> SYN
<= SYN-ACK
=> ACK
=> HTTP (request)
<= ACK
<= HTTP (response)
=> ACK
=> FIN
<= FIN-ACK
=> ACK
```

## IPV4 versus IPV6
IPv6 addresses are 128-bit IP address written in hexadecimal and separated by
colons. It has a larger address space than IPv4.

IPv4: 32 bit - 4 x 8 bits (octets) c0c0c0c0
IPv6: 128 bit - 8 x 16 bits 3ffe:1900:4545:3:200:f8ff:fe21:67cf

> IPv6 was developed by the Internet Engineering Task Force (IETF) to deal with
> the long-anticipated problem of IPv4 address exhaustion. IPv6 is intended to
> replace IPv4.

> Most IPv6 addresses do not occupy all of their possible 128 bits. This
> condition results in fields that are padded with zeros or contain only zeros.

> The IPv6 addressing architecture allows you use the two-colon (::) notation
> to represent contiguous 16-bit fields of zeros. For example, you might
> abbreviate the IPv6 address in Figure 3–2 by replacing the two contiguous
> fields of zeros in the interface ID with two colons. The resulting address is
> 2001:0db8:3c4d:0015::1a2f:1a2b. Other fields of zeros can be represented as a
> single 0. You can also omit any leading zeros in a field, such as changing
> 0db8 to db8.

> So the address 2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b can be abbreviated as
> 2001:db8:3c4d:15::1a2f:1a2b.

> You can use the two colon notation to replace any contiguous fields of all
> zeros in the IPv6 address. For example, the IPv6 address
> 2001:0db8:3c4d:0015:0000:d234::3eee:0000 can be collapsed into
> 2001:db8:3c4d:15:0:d234:3eee::.

See [Oracle
docs](https://docs.oracle.com/cd/E19253-01/816-4554/ipv6-overview-24/index.html)
and [IPv4/v6
differences](https://www.webopedia.com/DidYouKnow/Internet/ipv6_ipv4_difference.html).

## MAC addresses
- 48-bit hexadecimal
- ve-nd-or-xx-xx-xx

## The Benefits of IPv6
While increasing the pool of addresses is one of the most often-talked about
benefit of IPv6, there are other important technological changes in IPv6 that
will improve the IP protocol:

- No more NAT (Network Address Translation)
- Auto-configuration
- No more private address collisions
- Better multicast routing
- Simpler header format
- Simplified, more efficient routing
- True quality of service (QoS), also called "flow labeling"
- Built-in authentication and privacy support
- Flexible options and extensions
- Easier administration (say good-bye to DHCP)

## Classless Inter-Domain Routing (CIDR)
Pronounced "cider".

```
network/mask
192.168.109.0/24
```

## References
- [Forward Error Correction (FEC)](https://en.wikipedia.org/wiki/Error_correction_code)
- [Protocols and Mechanisms to Recover Failed Packets in Wireless Networks:
History and
Evolution](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7517301)
- [Making Better Use of All Those TCP ACK
Packets](http://web.cs.wpi.edu/~cew/papers/isast07.pdf) -- many TCP
applications show an asymmetric traffic pattern
- [TCP half close](https://everything2.com/title/TCP+half-close)

