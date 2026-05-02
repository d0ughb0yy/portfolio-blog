# Security Blog

A modernized static blog for CTF writeups, bug bounty findings, and security projects, built with Astro.

## Features

- Modern glassmorphism UI with animated gradients and hover effects
- Responsive design with mobile-friendly navigation
- Tag-based filtering for all content types
- Content organized by type: CTF, Bug Bounty, and Projects
- Dark theme with cyan and blue accent colors
- Optimized for performance and accessibility

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Content Structure

- **CTF posts**: `src/content/ctf/` - `.mdx` files with frontmatter
- **Bug Bounty**: `src/content/bugbounty/`
- **Projects**: `src/content/projects/`

### Images
- CTF post images: `public/images/ctf/{machine-name}/`

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

Bug Bounty / Projects:
```yaml
---
title: "Title"
description: "Description"
pubDate: 2024-01-01
tags: ["tag1", "tag2"]
---
```