# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitBook-based personal portfolio and technical blog site for Dean Turpin, deployed via GitLab CI. The site is built from markdown posts in the `posts/` directory and automatically generates a README from selected posts.

## Build and Deployment

The project uses GitLab CI with GitBook 3.2.3 to build static pages:

```bash
# Install GitBook locally (Node 10 required)
npm install gitbook-cli -g
gitbook fetch 3.2.3
gitbook install

# Build site locally
gitbook build . public
```

The CI pipeline automatically:
- Concatenates key posts to create README.md
- Generates SUMMARY.md from all posts
- Builds static site with GitBook
- Deploys to GitLab Pages

## Repository Structure

- `posts/` - Contains 250+ markdown articles on technical topics
- `drafts/` - Work-in-progress posts
- `.gitlab-ci.yml` - CI/CD pipeline configuration
- Key posts that form the README:
  - `posts/keywords.md` - Technical skills and tools
  - `posts/projects.md` - C++ experience and side projects
  - `posts/websites.md` - Online presence links
  - `posts/tech_stack.md` - Current technology stack (auto-dated)
  - `posts/skills.md` - Skills timeline visualisation
  - `posts/influential.md` - Influential resources

## Development Notes

- The README.md is auto-generated from posts - do not edit directly
- Tech stack dates are replaced with `{TODAY}` placeholder in CI
- Site footer includes build metadata and quote of the day
- GitBook version is pinned to 3.2.3 for stability
