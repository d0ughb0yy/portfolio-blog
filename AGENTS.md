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
- **Layouts**: `src/layouts/BaseLayout.astro` (main layout with nav, hero, footer, image modal, matrix canvas, grid bg)
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
- **X button**: Fixed position in viewport top-right corner, green (`text-primary` which is `#22c55e`)

## Filtering System
- **Component**: `src/components/FilterTabs.astro`
- **CTF page**: Filters by platform (TryHackMe, VulnHub) - platforms passed as `tags` prop
- **Filter logic**: Matches `data-category` and `data-tags` attributes on `.post-card` elements
- **Note**: Platform must be included in `data-tags` for filtering to work (see ctf/index.astro)

## Design System
- Background: `#020617`, Surface: `#0f172a`, Surface-elevated: `#1e293b`, Border: `#334155`
- Primary/accent: `#22c55e` (terminal green) — all interactive elements, hover states, active states
- Text: primary `#f8fafc`, secondary `#cbd5e1`, muted `#94a3b8`, dim `#64748b`
- Fonts: Space Grotesk (body), Archivo (headings/h1-h6), Share Tech Mono (code)
- Nav: Transparent initially, glass background + border-bottom on scroll (`.nav.scrolled`)
- Nav links: `color: #94a3b8` with `hover:text-primary` and green underline active indicator
- Card style: `rounded-xl` (`border-radius: 12px`), `border: 1px solid var(--border)`, hover: green border + green glow shadow
- Buttons: Outlined green style (`.btn`), primary variant fills green, ghost variant has green hover
- Hero: Terminal badge with pulsing dot, typewriter name, role rotation, green glow orb, scroll indicator
- Background: Fixed grid pattern + matrix rain canvas (opacity 0.15)
- Selection: Green background (`#22c55e`) on dark text (`#020617`)

## Deployment
- Deployed via GitHub to Netlify
- Build runs automatically on push to main
- Build command: `astro build`, publish directory: `dist`

## Common Gotchas
- **TypeScript in `<script>` tags**: Astro processes `.astro` files - use type assertions like `as HTMLDialogElement | null`
- **Modal button positioning**: Must be inside `<dialog>` for top-layer access, use CSS `dialog[open] #button { position: fixed !important; }`
- **No pre-commit hooks or CI configured** - builds are the only verification
- **Content changes**: Run `npm run build` to verify content collections parse correctly
- **Matrix canvas**: Uses canvas element with `opacity: 0.15`, respects `prefers-reduced-motion`
- **Hero typewriter/role rotation**: Runs only on pages with `showHero={true}`

## CTF Post Images
- Place images in `public/images/ctf/{machine-name}/`
- Reference in MDX as `/images/ctf/{name}/image.png`
- Use `<ClickableImage src="/images/ctf/..." alt="..." />` for clickable images
- Port scan results should be in code blocks, images go in relevant sections