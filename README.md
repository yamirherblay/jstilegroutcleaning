# JS Tile & Grout Cleaning Services

![Astro](https://img.shields.io/badge/Astro-5.17-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)

Static marketing website for **JS Tile & Grout Cleaning Services**, a professional tile restoration company serving South Florida. Built with Astro, Tailwind CSS, and TypeScript.

## Tech Stack

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| [Astro](https://astro.build) | 5.17 | Static site generator with file-based routing |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility-first CSS framework |
| TypeScript | Strict | Type safety across components and data |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── pages/
│   ├── index.astro              # Homepage
│   ├── aboutUs.astro            # About the company
│   ├── services.astro           # All services overview
│   ├── gallery.astro            # Before/after gallery with filters
│   ├── contact.astro            # Contact form
│   └── Services/
│       ├── tile-grout-cleaning.astro
│       ├── marble-restoration.astro
│       ├── sealing-stripping.astro
│       └── shower-repairs.astro
├── components/
│   ├── Header.astro             # Fixed nav with mobile drawer
│   ├── Hero.astro               # Homepage hero with CTAs
│   ├── PageHero.astro           # Reusable hero for inner pages
│   ├── Services.astro           # Service card grid
│   ├── Transformations.astro    # Before/after showcase
│   ├── CtaBanner.astro          # Call-to-action banner
│   ├── Footer.astro             # Footer with contact & hours
│   ├── ContactForm.astro        # Form with mailto integration
│   └── Breadcrumb.astro         # Breadcrumb navigation
├── layouts/
│   └── Layout.astro             # Base HTML shell (fonts, meta, WhatsApp button)
├── data/
│   ├── services.ts              # Service definitions & types
│   └── gallery.ts               # Gallery items & categories
public/
└── images/                      # Logos, hero, before/after photos, service images
```

## Pages

| Page | Route | Description |
|:-----|:------|:------------|
| Home | `/` | Landing page assembling Hero, Services, Transformations, and CTA sections |
| About Us | `/aboutUs` | Company story, process, and differentiators |
| Services | `/services` | Detailed overview of all four service categories |
| Gallery | `/gallery` | Interactive before/after gallery with category filters, comparison sliders, and lightbox |
| Contact | `/contact` | Contact form with service selector and business details |
| Tile & Grout Cleaning | `/Services/tile-grout-cleaning` | Individual service detail page |
| Marble Restoration | `/Services/marble-restoration` | Individual service detail page |
| Sealing & Stripping | `/Services/sealing-stripping` | Individual service detail page |
| Shower Repairs | `/Services/shower-repairs` | Individual service detail page |

## Components

| Component | Description |
|:----------|:------------|
| `Header` | Fixed top navigation with desktop menu and mobile hamburger drawer. Only component with client-side JS for the toggle. |
| `Hero` | Full-width hero with background image, animated "Free Estimate" badge, service list, and CTA buttons. |
| `PageHero` | Reusable hero for inner pages. Accepts `badge`, `heading`, `subtitle`, and optional `image` props. |
| `Services` | Data-driven 4-card grid rendered from `src/data/services.ts`. Hover effects with color transitions. |
| `Transformations` | Before/after split-view cards with star ratings. Links to the full gallery. |
| `CtaBanner` | Conversion-focused banner with phone number and quote button. |
| `Footer` | 4-column layout: about + social links, services nav, contact info (phone, email, WhatsApp), business hours. |
| `ContactForm` | Two-panel layout: form fields (name, email, phone, service, message) + contact details sidebar. Submits via mailto. |
| `Breadcrumb` | Accepts an `items` array of `{ label, href? }` for breadcrumb trail rendering. |

## Data Layer

Type-safe data files drive the service and gallery sections:

- **`src/data/services.ts`** — Exports `Service` interface and array of 4 services (Tile & Grout Cleaning, Marble Restoration, Sealing & Stripping, Shower Repairs) with descriptions, features, and icon mappings.
- **`src/data/gallery.ts`** — Exports `GalleryItem` interface and array of gallery entries with before/after image paths and category tags.

## Styling

### Custom Tailwind Tokens (`tailwind.config.mjs`)

**Colors:**
| Token | Hex | Usage |
|:------|:----|:------|
| `orange` | `#C47114` | Primary brand color, CTAs, badges |
| `orange-dark` | `#A65E10` | Hover states |
| `brown` | `#690E11` | Headers, footer background, accents |
| `brown-dark` | `#4F0B0D` | Dark hover states |
| `blue-accent` | `#0D80A1` | Links, interactive elements |
| `blue-light` | `#1A9EC4` | Hover links |
| `blue-bg` | `#E6F5F9` | Page background, light sections |

**Fonts:**
| Token | Font | Usage |
|:------|:-----|:------|
| `font-heading` | Inter Display | Headings, titles |
| `font-body` | Open Sans | Body text, paragraphs |

Both fonts are loaded via Google Fonts in `Layout.astro`.

### Responsive Breakpoints

Mobile-first approach using Tailwind defaults:
- **Base** — Mobile styles (default)
- **`md:`** — 768px+ (tablets)
- **`lg:`** — 1024px+ (desktop)

## Key Features

- **Responsive design** — Mobile-first with hamburger drawer navigation
- **Gallery with comparison sliders** — Interactive before/after range inputs with category filtering and full-screen lightbox (keyboard navigable)
- **Floating WhatsApp button** — Fixed bottom-right link to WhatsApp with pre-filled message
- **Contact form** — Mailto-based submission with service dropdown
- **SEO** — JSON-LD schemas (LocalBusiness, ImageGallery), meta descriptions on all pages
- **Bilingual messaging** — "We speak Spanish" highlighted across the site
- **No runtime JS by default** — Only interactive components (Header drawer, Gallery, ContactForm) include `<script>` tags
- **Inline SVG icons** — No external icon library dependency

## Scripts

| Command | Action |
|:--------|:-------|
| `npm run dev` | Start dev server at `localhost:4321` with hot reload |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Astro CLI help |

## Deployment

The site builds to static HTML in the `dist/` directory. Deploy to any static hosting provider:

```bash
npm run build
# Upload ./dist/ to your hosting provider
```

Compatible with Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static file server.
