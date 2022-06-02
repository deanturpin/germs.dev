---
title: Create a Twitter bot
subtitle: Using twurl and Google Cloud
date: 2019-09-11T10:09:01+01:00
tags:
- linux
- google cloud
- Twitter
- bash
- cli
---

# Create a Twitter bot

> Prerequisites: a Twitter account, moderate command line and Google Cloud experience.
>
> Time to complete: a couple of hours.

Alternatively you might consider [GitLab
hosting](https://gitlab.com/deanturpin/gitlab-hosted-twurl-bot).

# Developer account
Apply for a [Twitter dev
account](https://developer.twitter.com/en/apply-for-access.html), create an app
and make a note of the [two API keys](https://developer.twitter.com/en/apps/).
Keep them to yourself.

# Google Cloud hosting
Create the smallest (and cheapest) Linux instance on [Google
Cloud](https://console.cloud.google.com/compute/instances).

# Installation
Connect to your instance and install the essentials.

sudo apt update && sudo apt install rubygems --yes && sudo gem install twurl

# Authentication
Authenticate your instance with the two keys you saved earlier. There's quite a cool PIN exchange with Twitter too.

twurl authorize --consumer-key xxxxxxxx --consumer-secret xxxxxxxx

This will write your authentication details into ~/.twurl which you can copy to another machine and use without reauthenticating.

# Schedule
Connect to your instance and edit your cron tab to make your job run every minute (note the explicit path to twurl).

```bash
crontab -e
```

See [cron tab guru](https://crontab.guru/every-15-minutes) for the syntax.
See what cron is up to.

```bash
tail -f /var/log/syslog
```

## References
- [Twurl man page](https://github.com/twitter/twurl)
- [Twitter API guide](https://medium.com/@SamSchmir/a-guide-to-the-twitter-api-and-twurl-8711466a0635)
- [Twurl config](https://bftsystems.ca/twitterbot-using-twurl/)
- [A beginner's guide to twurl](https://itnext.io/a-beginners-guide-to-using-the-twitter-api-839c8d611b8c)
