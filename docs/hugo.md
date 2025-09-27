__NOTE: now using GitBook for this website__

> Time to complete: 1 hour typing, 12 hours waiting.

## Tech stack
- Google Domains
- Hugo: blog engine
- Markdown
- GitLab: CI, hosting, Let's Encrypt

## Configuration
Create a new project in GitLab using the Hugo template and call it
yourusername.gitlab.io. In the CI section on GitLab, trigger a build in
Pipelines to create and deploy your static website to
`https://yourusername.gitlab.io`. The first time will take longer but
subsequent builds will take a small number of minutes.

Buy your domain from Google Domains and create a DNS A record which points to
GitLab's IP address.

```
example.com A 35.185.44.232
```

In the Pages configuration for your GitLab project add a new domain and select
Let's Encrypt. You'll be instructed to add a special TXT DNS record to prove
you own the domain so get back to Google Domains and add that.

The string will be something like:

```
_gitlab-pages-verification-code TXT gitlab-pages-verification-code=ba313925ceeca3fee58a1b5130ea8222
DNS record name ^^^^^^^^^^^^^^^ DNS record text ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

GitLab appends the domain to the record name but ignore that.

And then just keep hitting verify refresh until GitLab has managed to fetch the
new text record from your website. This may take an hour or a few minutes for
the new DNS records to propagate. Note: it will first be listed as an "http"
domain whilst LetsEncrypt is doing its business but it will change to "https"
soon enough.

## Ghost export
I migrated my original Ghost blog by exporting it as a JSON file and then using
`jekyll_ghost_importer` to extract the posts. However, this doesn't export the
images, which wasn't such a big deal for me, but it's worth bearing in mind.
This also creates posts with the Jekyll date prefix but you batch rename those
on the command line.

## Committing to GitLab
As Hugo is a static blog engine you might assume that you need to commit your
generated site. But you're wrong. You simply commit the source (markdown) then
the live site is generated in the "public" directory and published by GitLab.
In fact "/public" is explicitly ignored in `.gitignore`.

## Creating new posts
On Linux you can use the Hugo command line tool to generate a new post.

hugo new post/yeah.md

But once you get used to it you can just create new markdown files in
`content/post`, even using only the GitLab IDE if you like. Just add the
following front matter at the top of the file, you can use a simplified
`YYYY-MM-DD` date format too if you don't care about the precise time.

```
---
title: Hugo Blog
subtitle: Create a blog like this
date: 2019-09-09
draft: false
- tag1
- tag2
---
```
