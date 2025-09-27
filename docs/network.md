---
tags:
  - networking
  - tools
  - linux
---

# Network analysis

For the purposes of this exercise we're not employing any [nefarious
means](https://www.techopedia.com/definition/27471/address-resolution-protocol-poisoning-arp-poisoning)
to gain access to packets. Generally Ethernet switches attempt to intelligently
direct packets to only the intended host so an ordinary machine sat on a subnet
will only receive its own packets and broadcasts. But unsolicited broadcasts
will at least show you some other active IPs on the network. You want to get
"in the way" of as much data as possible so if you can run these tests on the
router then even better.

## ip
Find out what your IP is.

```bash
ip a
```

My tethered laptop has been allocated an IP of `172.20.10.3` via DHCP and the
netmask is 28 bits - see the [CIDR
format](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). The
loopback interface is a special IP address used to refer to yourself. It's
synonymous with `localhost` and `0.0.0.0` - try pinging them.

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
inet 127.0.0.1/8 scope host lo
valid_lft forever preferred_lft forever
inet6 ::1/128 scope host
valid_lft forever preferred_lft forever
2: wlp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
link/ether 18:5e:0f:b0:75:98 brd ff:ff:ff:ff:ff:ff
inet 172.20.10.3/28 brd 172.20.10.15 scope global dynamic noprefixroute wlp1s0
valid_lft 85515sec preferred_lft 85515sec
inet6 2a01:4c8:439:abdb:346a:f1f0:1af5:dcef/64 scope global temporary dynamic
valid_lft 604780sec preferred_lft 85855sec
inet6 2a01:4c8:439:abdb:525a:900e:bd85:51d0/64 scope global mngtmpaddr noprefixroute
valid_lft forever preferred_lft forever
inet6 fe80::ffda:eabe:b8f3:59d9/64 scope link noprefixroute
valid_lft forever preferred_lft forever
```

And inspect the routing table.

```bash
ip r
```

The default router is .1 and any messages bound for an IP matching my current subnet -- `172.20.10.0/28` -- are emitted directly without going via the default router.

```bash
default via 172.20.10.1 dev wlp1s0 proto dhcp metric 600
169.254.0.0/16 dev wlp1s0 scope link metric 1000
172.20.10.0/28 dev wlp1s0 proto kernel scope link src 172.20.10.3 metric 600
```

## Subnet masks
The config above is using a 28-bit netmask, therefore there are only 4 bits available for hosts. This allows more subnets but doesn't make for terribly clear decimal IP ranges. However, there are plenty of online and command line subnet calculators around.

ipcalc 172.20.10.3/28

Internal IPs are often carved up into small chunks like this.

Address: 172.20.10.3 10101100.00010100.00001010.0000 0011
Netmask: 255.255.255.240 = 28 11111111.11111111.11111111.1111 0000
Wildcard: 0.0.0.15 00000000.00000000.00000000.0000 1111
=>
Network: 172.20.10.0/28 10101100.00010100.00001010.0000 0000
HostMin: 172.20.10.1 10101100.00010100.00001010.0000 0001
HostMax: 172.20.10.14 10101100.00010100.00001010.0000 1110
Broadcast: 172.20.10.15 10101100.00010100.00001010.0000 1111
Hosts/Net: 14 Class B, Private Internet

## ping

Exploratory ping of hosts on the network. You can ping hosts individually or use a bash script.

for host in 172.20.10.{1..5}; do ping -c 1 $host > /dev/null && echo $host responded; done

Of the five IPs tested only my own IP and the gateway responded.

172.20.10.1 responded
172.20.10.3 responded

## tcpdump

`tcpdump` is a command line equivalent of [Wireshark](https://en.wikipedia.org/wiki/Wireshark). Use it to snoop packets and get a feel for what's on the network. Note I've used the interface listed by `ip` above.

sudo tcpdump -n -i wlp1s0

Here you can see packets from hosts using [IPv6](https://en.wikipedia.org/wiki/IPv6) addresses have been captured (rather than the [IPv4](https://en.wikipedia.org/wiki/IPv4) addresses we've been working with so far.

tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on wlp1s0, link-type EN10MB (Ethernet), capture size 262144 bytes
11:09:30.145621 IP6 2a01:4c8:439:abdb:346a:f1f0:1af5:dcef.41830 > 2600:9000:21b3:6200:16:eede:5e00:93a1.443: Flags [.], ack 4197921388, win 502, options [nop,nop,TS val 2761341749 ecr 1964241191], length 0
11:09:30.186390 IP6 2600:9000:21b3:6200:16:eede:5e00:93a1.443 > 2a01:4c8:439:abdb:346a:f1f0:1af5:dcef.41830: Flags [.], ack 1, win 1919, options [nop,nop,TS val 1964251441 ecr 2761239532], length 0
11:09:30.523066 IP6 fe80::149b:c888:82d2:712 > fe80::ffda:eabe:b8f3:59d9: ICMP6, neighbor solicitation, who has fe80::ffda:eabe:b8f3:59d9, length 32
11:09:30.523151 IP6 fe80::ffda:eabe:b8f3:59d9 > fe80::149b:c888:82d2:712: ICMP6, neighbor advertisement, tgt is fe80::ffda:eabe:b8f3:59d9, length 24

## nmap

> __Disclaimer__: definitely don’t run ```nmap``` on your wider company network. If your IT department has the [means to detect it](https://en.wikipedia.org/wiki/Intrusion_detection_system) they will likely take a dim view of such suspicious behaviour and it may even contravene your terms of employment. That said...

Port scanning attempts to make connections on a list of ports to establish which services are available (and potentially exploitable). You could approximate it with a single `curl` command.

curl 0.0.0.0:131 >& /dev/null && echo port open || echo port closed

But `nmap` does much more. We can scan a single host (quietly).

nmap -T paranoid -A 172.20.10.1

Or scan all hosts on the subnet (less quietly) and dump the results to an XML file.

nmap -vv -A -oX scan.xml 172.20.10.1/28

## tracepath

`tracepath` lists all the intermediate hosts encountered _en route_ to the target. We could check the route to the outside world.

Tracing `localhost` shows it doesn't go anywhere.

tracepath 0.0.0.0

1: localhost 0.048ms reached
Resume: pmtu 65535 hops 1 back 1

Let's try gmail.com's IP address.

tracepath -n 172.217.169.69

We first hit the gateway and then some hosts that aren't responding to pings (possibly as a security measure) before ultimately reaching the destination.

1?: [LOCALHOST] pmtu 1500
1: 172.20.10.1 4.540ms
1: 172.20.10.1 6.574ms
2: no reply
3: no reply
4: no reply
5: no reply
6: 172.217.169.69 48.345ms asymm 7

## Exercises

1. Record all IPs between your desk and a machine in the lab. Also try from another office or floor.
1. Describe the lab subnet using CIDR notation.
1. List all protocols and IPs seen in the lab.
1. Port scan a host in the lab.
1. Draw a network topology of the lab and show how it connects to the main network. Hint: the router will have at least two network interfaces.
1. Log packets with during an `nmap` scan (to see how much conspicuous traffic _you_ are generating). You could use `tcpdump` or Wireshark.
1. What are the availble host IP addresses for subnet `192.168.109.0/27`?
