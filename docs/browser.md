---
tags:
  - web-development
  - browsers
  - networking
  - technology
---

# Imagine you're a browser

An example of technologies encountered when a browser requests a page from a server. In this case the browser is running on a laptop connected by Wi-Fi.

## Forming a request

- User types a URL into the browser: github.com
- Host performs DNS resolution to convert the URL into an IP address (the web
server)
- The DNS server (and host IP) could be set manually but it will probably be
part of a DHCP offer
- The application (browser) attempts a TCP connection with the server IP
- If no protocol is specified (http, https, ftp) the browser will default to 80
- The browser must now work out how to reach the server
- The netmask is ANDed with the host IP address, if they're on the same network
then the request can be emitted immediately
- Otherwise, the host must send the packet via the default gateway (also
configured by DHCP)
- The information makes its way down the TCP stack
- Layer two adds the MAC header
- Frame is transmitted between devices
- Frame is encrypted as it is transmitted through the air
- At the gateway the request makes its way back up to the TCP layer where it
can be forwarded to the next gateway
- The browser will probably be running from a private network so the router
must translate the local to the WAN network (NAT)

## Reaching the server

- Upon reaching the destination the server will probably send a redirect to the
HTTPS version of the website (.dev domains are HSTS preload whitelisted)
- This is vulnerable to a man-in-the-middle attack so browser have a whitelist
of domains that internally redirect to the HTTPS site (port 443)
- The browser will attempt to establish a secure connection with the server
- It uses asymmetric encryption to exchange a symmetric key
- The server makes available a public key which is issued by a certificate
authority
- For public websites the browser has a predefined set of authorities

## Reading the page

The browser might receive static HTML but more commonly dynamic code will run
on the host and make further requests in the background: REST, web sockets.

## Back end

- Virtual machines
- AWS, Azure, Google Cloud
- Load balancing

## What's the client running?

- Public Key Infrastructure (PKI)
- Including public/private keys
- Digital certificates
- SSL certificates and certificate authorities (CAs)
- Symmetric and asymmetric cryptography
- SSL/TLS
- Key length

## Browser considerations

- Cross platform
- Static page or dynamic HTML5?
- Rest
- Web sockets
- Encryption: symmetric versus asymmetric
- TOFU
- HPKP
- HSTS preload
- SQL injection
- Insufficient authorisation
- Weak credential storage
- Insufficient transport layer security
- Clickjacking
- SRI - Sub resource Integrity
- CSP - Content Security Policy - declare allowed sources of content, CSS and
whether allowed in a frame
- XSS - cross-site scripting
- CDN - Content delivery network
