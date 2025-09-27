# Working in a Google Cloud VM

## Keygen
https://gitlab.com/-/profile/keys

```bash
ssh-keygen
cat ~/.ssh/id_rsa.pub
```

## Testing your ssh connection setup

```bash
$ ssh  git@gitlab.com
PTY allocation request failed on channel 0
Welcome to GitLab, @deanturpin!
Connection to gitlab.com closed.
```

If this hangs, set this:

```bash
export SSH_AUTH_SOCK=
```

## This combo is OK.

```bash
OpenSSH_8.4p1 Debian-5+deb11u1, OpenSSL 1.1.1n  15 Mar 2022
```

On Debian

```
 neofetch
       _,met$$$$$gg.          djturpin@ubuntu-c3-4
    ,g$$$$$$$$$$$$$$$P.       --------------------
  ,g$$P"     """Y$$.".        OS: Debian GNU/Linux 11 (bullseye) x86_64
 ,$$P'              `$$$.     Host: Google Compute Engine
',$$P       ,ggs.     `$$b:   Kernel: 5.10.0-21-cloud-amd64
`d$$'     ,$P"'   .    $$$    Uptime: 8 mins
 $$P      d$'     ,    $$P    Packages: 332 (dpkg)
 $$:      $$.   -    ,d$$'    Shell: bash 5.1.4
 $$;      Y$b._   _,d$P'      Terminal: /dev/pts/0
 Y$$.    `.`"Y$$$$P"'         CPU: Intel Xeon Platinum 8481C (4) @ 2.699GHz
 `$$b      "-.__              Memory: 120MiB / 7956MiB
  `Y$$
   `Y$$.
     `$$b.
       `Y$$b.
          `"Y$b._
              `"""
```

```
echo $SSH_AUTH_SOCK
/tmp/ssh-FY0M4AWdBE/agent.693
```

## This combo is not good
Hang in rekey.

```bash
$ ssh -Tvvv git@gitlab.com |& head
OpenSSH_9.0p1 Ubuntu-1ubuntu7.1, OpenSSL 3.0.5 5 Jul 2022
```

```bash
debug1: Host 'gitlab.com' is known and matches the ED25519 host key.
debug1: Found key in /home/djturpin/.ssh/known_hosts:1
debug3: send packet: type 21
debug2: ssh_set_newkeys: mode 1
debug1: rekey out after 134217728 blocks
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug3: receive packet: type 21
debug1: SSH2_MSG_NEWKEYS received
debug2: ssh_set_newkeys: mode 0
debug1: rekey in after 134217728 blocks
```

## Cloning
Whilst cloning via `https` might just work, for `ssh` you will need to configure the firewall.

```bash
# https
git clone https://gitlab.com/germs-dev/deanturpin.git

# ssh
git clone git@gitlab.com:germs-dev/deanturpin.git
```
