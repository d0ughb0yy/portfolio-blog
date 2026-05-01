# Security Blog

A static blog for CTF writeups and bug bounty findings, built with Astro.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Add Content

- **CTF posts**: `src/content/ctf/` - `.mdx` files with frontmatter
- **Bug Bounty**: `src/content/bugbounty/`
- **Blog**: `src/content/blog/`

### Frontmatter

CTF:
```yaml
---
title: "Title"
description: "Description"
pubDate: 2024-01-01
ctfPlatform: TryHackMe
difficulty: medium
tags: ["tag1", "tag2"]
---
```

Bug Bounty / Blog:
```yaml
---
title: "Title"
description: "Description"
pubDate: 2024-01-01
tags: ["tag1", "tag2"]
---
```