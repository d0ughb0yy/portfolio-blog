# Portfolio Blog - Agent Instructions

## Dev Commands
- `npm run dev` - Start dev server (default port 4321)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- No test/lint/typecheck commands configured

## Project Structure
- **Framework**: Astro 5.x + Tailwind CSS 3.x
- **Content**: `src/content/ctf/`, `src/content/bugbounty/`, `src/content/projects/` (`.mdx` files)
- **Images**: `public/images/ctf/{machine-name}/`, reference in MDX as `/images/ctf/{name}/image.png`
- **Layouts**: `src/layouts/BaseLayout.astro` (main layout with nav, footer, image modal)
- **Components**: `src/components/` (ClickableImage, FilterTabs, PostCard, etc.)

## Content Collections Schema
- **CTF**: title, description, pubDate, ctfPlatform (TryHackMe|VulnHub|HackTheBox|...), difficulty (easy|medium|hard), tags, draft
- **Bug Bounty**: title, description, pubDate, tags, draft
- **Projects**: title, description, pubDate, tags, draft

## Image Modal System
- **Component**: `src/components/ClickableImage.astro` - wraps images in clickable buttons
- **Modal**: Defined in `src/layouts/BaseLayout.astro` as `<dialog id="global-image-modal">`
- **Scroll lock**: Uses "fixed position trick" (not `overflow: hidden`) to prevent background scroll
  - Saves `window.scrollY`, sets `document.documentElement.style.position = 'fixed'`
  - Restores with `window.scrollTo({top: scrollPos, behavior: 'instant'})`
- **Close methods**: Click X button, click backdrop, press Escape
- **X button**: Fixed position in viewport top-right corner (`z-[99999]`), blue (`text-primary`)

## Filtering System
- **Component**: `src/components/FilterTabs.astro`
- **CTF page**: Filters by platform (TryHackMe, VulnHub) - platforms passed as `tags` prop
- **Filter logic**: Matches `data-category` and `data-tags` attributes on `.post-card` elements
- **Note**: Platform must be included in `data-tags` for filtering to work (see ctf/index.astro)

## Design System
- Background: `#0f172a`, Surface: `#1e293b`, Border: `#475569`
- Primary: `#38bdf8` (sky blue), Accent: `#f472b6` (pink)
- **Text-muted: `#ebe6e7`** (updated from `#94a3b8` to match portfolio-v2)
- Nav links: `color: #ebe6e7` with `hover:text-primary`
- Fonts: Inter (sans), Share Tech Mono (mono)
- Card style: rounded-2xl with backdrop blur and glow shadow on hover

## Deployment
- Deployed via GitHub to Netlify
- Build runs automatically on push to main
- Build command: `astro build`, publish directory: `dist`

## Common Gotchas
- **TypeScript in `<script>` tags**: Astro processes `.astro` files - use type assertions like `as HTMLDialogElement | null`
- **Modal button positioning**: Must be inside `<dialog>` for top-layer access, use CSS `dialog[open] #button { position: fixed !important; }`
- **No pre-commit hooks or CI configured** - builds are the only verification
- **Content changes**: Run `npm run build` to verify content collections parse correctly

## CTF Post Images
- Place images in `public/images/ctf/{machine-name}/`
- Reference in MDX as `/images/ctf/{name}/image.png`
- Use `<ClickableImage src="/images/ctf/..." alt="..." />` for clickable images
- Port scan results should be in code blocks, images go in relevant sections
