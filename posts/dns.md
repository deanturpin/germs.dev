# Configuring a custom domain with a GitHub Pages website

With DNS managed by [CloudFlare](cloudflare.com).

- Add the four GitHub IP addresses as A records, ensure proxy is disabled
- Also add a CNAME record for www -> website.com
- In GitHub _Settings > Pages_, add a domain and configure a TXT record using the key/value
- In your GitHub repo, select Pages and add custom domain (this will also create a CNAME file in your repo)
- Finally, tick _Enforce HTTPS_ in your repo settings 
