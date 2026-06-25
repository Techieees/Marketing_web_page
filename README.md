# Techies Studio — Premium Digital Studio Website

A premium, animation-rich React website for a digital studio offering websites, dashboards, automation, API integrations, and Shopify stores.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide React icons
- Lenis (smooth scrolling)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  app/              # App shell, routing, layout
  components/
    layout/         # Navbar, Footer, smooth scroll
    sections/       # Home page sections
    ui/             # Reusable UI components
  data/             # All content (config, pricing, services, work)
  pages/            # Route pages
  styles/           # Global CSS + Tailwind
  utils/            # Helpers (cn, animations)
```

## How to Change the Brand Name

Edit `src/data/siteConfig.ts`:

```ts
brand: {
  name: 'Your Studio Name',
  tagline: '...',
  description: '...',
}
```

Also update `contact.email` and footer copy in the same file. Page titles are generated automatically from the brand name in `AppLayout.tsx`.

## How to Edit Pricing

Edit `src/data/pricing.ts`:

- Modify existing packages in the `pricingPackages` array
- Add a new package object with `id`, `name`, `price`, `timeline`, `bestFor`, `includes`, and optional `highlight` (`'most-popular'` or `'best-value'`)
- Update the custom project card in `customProjectCard`

The home page pricing preview shows a subset of packages — edit the filter in `src/components/sections/PricingPreview.tsx` if needed.

## How to Add a New Service

Edit `src/data/services.ts`:

1. Import a Lucide icon
2. Add a new object to the `services` array with `id`, `title`, `description`, `items`, `icon`, and `gradient`

The Services section on the home page renders automatically from this file.

## How to Add a New Case Study

Edit `src/data/work.ts`:

1. Add a new object to the `caseStudies` array
2. Include `id`, `title`, `category`, `description`, `services`, `outcome`, `gradient`, and `accent`

It will appear on the Work page and in the home page marquee.

## How to Add a New Page

1. Create a page component in `src/pages/`
2. Register the route in `src/app/App.tsx`
3. Add a nav link in `src/data/siteConfig.ts` if needed
4. Add a page title mapping in `src/app/AppLayout.tsx`

## Content Guidelines

- Keep all marketing copy in `src/data/` files
- Do not hardcode pricing or service lists in components
- Use `siteConfig.ts` for brand-level content and section metadata

## Cursor Rules

Project conventions are defined in `.cursor/rules/premium-studio.mdc` for consistent development.
