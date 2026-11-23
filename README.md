# Portfolio v3

Personal portfolio website for Tolu Olasupo. This is the newer version of the site; the older version lives in a separate repository.

## Pages

- **Home** (`/`): introduction, technical skills, featured projects and contact links
- **Timeline** (`/timeline`): education and career history
- **Projects** (`/projects/*`): detail pages for the 2D platformer, cybersecurity training game, maths revision program and student budgeting app

## Tech stack

Next.js 13 (App Router, static export) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · next-themes (light/dark mode)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site output in /out
```

The site is exported as static HTML (`output: 'export'`), so the `/out` folder can be deployed to any static host.
