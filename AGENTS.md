# Portfolio Blog - Agent Instructions

## Dev Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Project Structure
- Content: `src/content/ctf/`, `src/content/bugbounty/`, `src/content/projects/`
- Images: `public/images/ctf/{machine-name}/`
- CTF posts use `.mdx` files with frontmatter for platform, difficulty, tags
- Projects posts use `.mdx` files with frontmatter for tags

## Content Collections Schema
- **CTF**: title, description, pubDate, ctfPlatform (TryHackMe|VulnHub|HackTheBox|...), difficulty (easy|medium|hard), tags, draft
- **Bug Bounty**: title, description, pubDate, tags, draft
- **Projects**: title, description, pubDate, tags, draft

## Deployment
- Deployed via GitHub to Netlify
- Build runs automatically on push to main

## Notes
- Colors synced with main portfolio (tinl-portfolio.netlify.app): background #0f172a, accent #22d3ee, primary #60a5fa
- Fonts: Poppins (sans), Space Grotesk (mono)
- CTF posts include pictures in `/images/ctf/{name}/` with markdown images pointing to them