# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a MkDocs-based personal portfolio and technical blog site for Dean Turpin, deployed via GitHub Actions. The site is built from markdown files in the `docs/` directory.

## Build and Deployment

The project uses GitHub Actions with MkDocs to build static pages:

```bash
# Install MkDocs locally
pip install -r requirements.txt

# Build site locally
mkdocs build

# Serve locally for development
mkdocs serve
```

The CI pipeline automatically:
- Builds static site with MkDocs
- Runs markdown linting
- Deploys to GitHub Pages

## Repository Structure

- `docs/` - Contains 250+ markdown articles and documentation
- `drafts/` - Work-in-progress posts
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD pipeline
- `mkdocs.yml` - MkDocs configuration
- Key pages in navigation:
  - `docs/keywords.md` - Technical skills and tools
  - `docs/projects.md` - C++ experience and side projects
  - `docs/websites.md` - Online presence links
  - `docs/tech_stack.md` - Current technology stack
  - `docs/skills.md` - Skills timeline visualisation
  - `docs/influential.md` - Influential resources

## Development Notes

- All content is in the `docs/` directory for MkDocs
- The README.md is generated during build from key documentation files
- Site is deployed to GitHub Pages automatically on push to main branch

## SEO

- MkDocs generates `sitemap.xml` from `site_url` on every build; no plugin
  needed. Anything added to `docs/` appears in it automatically.
- `docs/robots.txt` is copied verbatim to the site root and points at the
  sitemap.
- `overrides/main.html` (wired up by `theme.custom_dir`) adds the Open Graph
  and Twitter card metadata Material leaves out, plus Person structured data
  on the home page. Material already handles title, description and canonical.
- A page can override the shared description with `description:` in its front
  matter; otherwise `site_description` from `mkdocs.yml` is used.
