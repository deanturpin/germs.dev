---
title: Ghost blog
subtitle: Install Ghost in a Google Cloud instance
date: 2019-06-12 19:50:05
tags:
- linux
- google cloud
- bash
---

# Ghost blog

> Prerequisites: basic knowledge of the Linux command line, domain names and DNS.
> Time to complete: one hour.

Google Cloud actually offer pre-built Ghost images but unfortunately they deploy a woefully antique revision. So I built my own using [Ghost's GitHub](https://github.com/TryGhost/Ghost/) instructions as a reference.

Before we proceed it must be remembered that if you're hosting it yourself **you** are in control of the backups. You can casually delete entire VMs in as few as three slipshod strikes of the mouse button. [And that's slipshod meaning "careless" rather than "wearing slippers" – although they're not mutually exclusive of course – but we digress...]

Ghost Pro can manage all the difficult stuff for you but let's proceed with setting up our own. Your slick new blog can be up and running without even leaving your web browser – I used Chromium 73.0.3683.75; and the Ghost installer even negotiates the [Let's Encrypt](https://letsencrypt.org/) key exchange with little pause for interaction. If you're new to Google Cloud then the "free tier" starting balance of $300 will be sufficient to keep a simple blog online for a year.

**One more thing**... at the time of writing Ghost officially supports only Ubuntu 16 and 18. If you're installing on Disco you can just ignore the message below: we don't need this kind of negativity.

System checks failed with message: 'Linux version is not Ubuntu 16 or 18'
Some features of Ghost-CLI may not work without additional configuration.
For local installs we recommend using `ghost install local` instead.

## Domains and VM configuration
- Purchase a domain from [Google Domains](http://domains.google).
- Provision a single-core Ubuntu 19.04 instance (not "minimal") with 10 GB RAM in your Google Cloud console.
- Don't call it "ghost" because you'll inevitably want to create another Ghost blog VM.
- Make sure to enable http and https.
- When it's booted note the external IP.
- In Google Domains add your VM IP as an "A record" in the DNS config.

## Install npm, nginx and the Ghost CLI
Connect to your new VM via a web SSH client in the Google Cloud console and install a web server and the Ghost command line tool.

sudo apt update && sudo apt install npm nginx -y && sudo npm install ghost-cli -g

Check the web server is running via the command line.

curl localhost && systemctl status nginx.service

## DNS propagation
Hit your new website via `http://` (not `https://`... not just yet) to test your DNS settings have propagated around the Internet. You may find your browser auto redirects to `https://` – see [HSTS preload](https://hstspreload.org/) – in fact this should be the default for `.dev` domains.

Safari is a little more chill about security. If you don't see the default nginx splash page then quietly meditate for twenty minutes to help your new DNS record propagate.

(`dig` is quite informative if you want to get into the details.)

## Install Ghost and and SQL DB
Create an installation directory and type your domain and email address when prompted. (Type "Y" to accept configuration of nginx/Systemd.)

mkdir ghost && cd ghost && ghost install --db=sqlite3

You can install in ~/ but the installer might vomit a screenful of errors about inaccessible JavaScript files. In that case you'll have to do some kind as directed by the installer and restart Ghost. But it's no biggie.

## Create admin login
Finally hit `https://yourdomain/ghost` in your browser before anybody else does to create the admin login.

And we're open for business.

![Vintage typewriter on wooden desk](https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)
