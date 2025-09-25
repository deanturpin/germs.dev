# Generate a network topology

`tracehost` is a bash script that parses a standard hosts files and generates
an SVG. The script accepts a standard system hosts file format but actually it
only cares about the first host or IP on a line. In fact any line format may be
used as long as each line begins with something that can be pinged.

```bash
127.0.0.1 localhost # for local people
silobrighton.com # Zero waste
```

The image below is generated as a daily [GitLab cron
job](https://gitlab.com/deanturpin/tracehost). Hosts that don't respond to
pings are coloured red.

![](https://germs.dev/hosts.svg)

