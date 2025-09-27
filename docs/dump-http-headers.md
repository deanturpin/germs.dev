# Simple Python web server

My work Firefox ESR browser seemed to be giving up my username (I.e., half of
my login credentials) in its HTTP headers so I wrote simple Python-based
webserver that mirrors the browser HTTP headers back to the browser. The script
is encapsulated in a Docker image and could be deployed to an AWS instance.
Here the server is started on common HTTP ports.

docker run --rm -d -p 80:8080 deanturpin/http
docker run --rm -d -p 443:8080 deanturpin/http
docker run --rm -d -p 8080:8080 deanturpin/http

## Dockerfile

```docker
FROM ubuntu
RUN apt update --yes
RUN apt install --yes python
COPY . src
WORKDIR src
CMD ./serve.py
```

## Python script

```python
#!/usr/bin/env python

import SimpleHTTPServer
import SocketServer
import datetime

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):

def do_GET(self):

# Set MIME type
self.send_response(200)
self.send_header('Content-Type', 'text/plain')
self.end_headers()

# Banner
self.wfile.write("MIRROR BROWSER HEADERS - ")
d = str(datetime.datetime.now())
self.wfile.write(d)
self.wfile.write("nn")

# Dump HTTP headers supplied by browser
for h in self.headers:
self.wfile.write(h)
self.wfile.write(" ")
self.wfile.write(self.headers[h])
self.wfile.write("n")

httpd = SocketServer.TCPServer(("", 8080), Handler)

httpd.serve_forever()
```
