---
title: The magnitude of it all
subtitle: The units you should be aware of
date: 2019-09-27
tags:
- revision
- units
- graduate
---

# The magnitude of it all

In 2014 [Randall Munroe](https://www.youtube.com/watch?v=I64CQp6z0Pk) estimated
that Google stores 10 exabytes of data across all of its operations. See [list
of SI
prefixes](https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes). If
CPUs are topping out at gigahertz then single operations aren't going to
subceed the order of nanoseconds.

```
1 000 kilo | milli .001
1 000 000 mega | micro .000 001
1 000 000 000 giga | nano .000 000 001
1 000 000 000 000 tera | pico .000 000 000 001
1 000 000 000 000 000 peta | femto .000 000 000 000 001
1 000 000 000 000 000 000 exa | atto .000 000 000 000 000 001
1 000 000 000 000 000 000 000 zetta | zepto .000 000 000 000 000 000 001
```

You might find it easier to think of them in multiples of 1000. And you may be
tempted to use [binary prefixes](https://en.wikipedia.org/wiki/Binary_prefix)
to be precise (kibi, mebi, gibi) but most people won't know what you're talking
about. Also, everybody uses 1000^<sup>3</sup> rather than 2^<sup>20</sup>
because it makes your performance look better.

| | 1000^ | | 1000^ |
| ----- | ----- | ----- | ----- |
| kilo | 1 | milli | -1 |
| mega | 2 | micro | -2 |
| giga | 3 | nano | -3 |
| tera | 4 | pico | -4 |
| peta | 5 | femto | -5 |
| exa | 6 | atto | -6 |
| zetta | 7 | zepto | -7 |

# Teach Yourself Programming in Ten Years
https://norvig.com/21-days.html

| actions | duration |
| --- | --- |
| execute typical instruction | 1/1,000,000,000 sec = 1 nanosec |
| fetch from L1 cache memory| 0.5 nanosec |
| branch misprediction| 5 nanosec |
| fetch from L2 cache memory| 7 nanosec |
| Mutex lock/unlock| 25 nanosec |
| fetch from main memory| 100 nanosec |
| send 2K bytes over 1Gbps network| 20,000 nanosec |
| read 1MB sequentially from memory| 250,000 nanosec |
| fetch from new disk location (seek)| 8,000,000 nanosec |
| read 1MB sequentially from disk| 20,000,000 nanosec |
| send packet US to Europe and back| 150 milliseconds = 150,000,000 nanosec |

## References
- See [`<ratio>` section](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2008/n2661.htm)

