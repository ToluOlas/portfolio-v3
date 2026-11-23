# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build (static export to /out)
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 13 App Router** static site (`output: 'export'` in next.config.js — no server-side rendering). All pages compile to static HTML.

**Key directories:**
- `app/` — Pages using the App Router. Each subfolder is a route. `layout.tsx` is the root layout; `globals.css` holds CSS variable definitions for theming.
- `app/projects/[name]/page.tsx` — Individual project detail pages (platformer, cybersecurity, maths, budget). Content is hardcoded in each file.
- `app/timeline/page.tsx` — Career/experience timeline with a local `TimelineItem` TypeScript interface.
- `components/navbar.tsx`, `components/theme-toggle.tsx` — Custom components.
- `components/ui/` — shadcn/ui primitives (do not edit these manually; use the shadcn CLI to add/update).
- `lib/utils.ts` — Exports `cn()` helper (clsx + tailwind-merge).

**Styling:** Tailwind CSS with class-based dark mode. Theme colors are defined as HSL CSS variables in `globals.css` and referenced in `tailwind.config.ts`. Framer Motion (`motion.*` components) is used for animations throughout.

**Images:** Project and profile images are hosted externally on ibb.co; skill logos come from devicon (jsDelivr) and Wikimedia. All are rendered with `next/image` (`<Image>`, often with `fill`), which works with external URLs because optimization is disabled (`images: { unoptimized: true }`). `components/webImages/` holds local copies of the project images but is not currently referenced.

**Adding shadcn/ui components:** `npx shadcn-ui@latest add <component-name>`

## Path Alias

`@/` maps to the repository root (configured in `tsconfig.json`).

## Tech Stack

**Core:**
- Next.js 13 (App Router, static export) · TypeScript 5.2 · React 18

**Styling:**
- Tailwind CSS 3.3 (class-based dark mode, HSL CSS variables) · `tailwindcss-animate` · `tailwind-merge` + `clsx` via `cn()`

**UI:**
- shadcn/ui (Radix UI primitives) · Lucide React (icons) · `class-variance-authority`

**Animation:**
- Framer Motion 11

**Theming:**
- `next-themes`

**Other libraries:**
- `embla-carousel-react` · `recharts` · `react-hook-form` + `zod` · `sonner` · `vaul` · `cmdk` · `react-resizable-panels` · `date-fns` + `react-day-picker`

**Build:**
- SWC · PostCSS · Autoprefixer · ESLint (ignored during builds)

**Images:**
- Hosted externally on ibb.co; rendered via `next/image` with optimization disabled (`images: { unoptimized: true }`)
