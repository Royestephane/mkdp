# Architecture Portfolio — Render ⇄ Reality

A minimal, high-performance architecture portfolio built with Next.js 15, showcasing built projects through interactive render-to-reality comparisons. Inspired by MVRDV's simplicity with a focus on accessibility, performance, and elegant transitions.

## ✨ Features

### Core Functionality
- **Render ⇄ Reality Comparison**: Interactive draggable slider with keyboard support and auto-sweep animation
- **Project Filtering**: Real-time search with tag, status, and year filters synced to URL
- **Responsive Image Gallery**: Masonry layout with lightbox for images and videos
- **Smooth Scroll**: Lenis integration with automatic reduced-motion fallback
- **MDX Content**: Type-safe project content with Contentlayer
- **Page Transitions**: Framer Motion animations with shared-element illusions

### Performance & Accessibility
- **WCAG AA Compliance**: Full keyboard navigation, focus indicators, screen reader support
- **Optimized Images**: AVIF/WebP with responsive sizes and blur placeholders
- **Zero CLS**: Transform/opacity-only animations, proper image sizing
- **SEO Ready**: Dynamic metadata, Open Graph images, sitemap generation
- **Reduced Motion**: All animations respect `prefers-reduced-motion`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies (use legacy peer deps for Next.js 15 compatibility)
npm install --legacy-peer-deps

# Create placeholder images
npm run setup

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

**Note**: If you prefer pnpm, install dependencies with:
```bash
pnpm install --legacy-peer-deps
pnpm dev
```

### Build for Production

```bash
# Generate static site
npm run build

# Preview production build
npm run start
```

## 📁 Project Structure

```
arch-portfolio/
├── app/                          # Next.js 15 App Router
│   ├── (site)/                   # Main site group
│   │   ├── layout.tsx            # Site layout with nav/footer
│   │   ├── page.tsx              # Home page
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects listing
│   │   │   └── [slug]/page.tsx   # Project detail
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── api/                      # API routes
│   │   ├── search/route.ts
│   │   ├── contact/route.ts
│   │   └── projects/route.ts
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # Base UI components
│   ├── cards/                    # Project cards
│   ├── compare/                  # Render⇄Reality slider
│   ├── filters/                  # Search & filter components
│   ├── gallery/                  # Image gallery & lightbox
│   ├── motion/                   # Animation wrappers
│   └── progress/                 # Scroll progress bar
├── content/projects/             # MDX project files
├── lib/                          # Utilities & helpers
├── public/images/                # Static assets
└── contentlayer.config.ts        # Contentlayer setup
```

## 📝 Adding a New Project

### 1. Create MDX File

Create `content/projects/your-project-slug.mdx`:

```mdx
---
title: "Your Project Name"
slug: "your-project-slug"
location: "City, Country"
year: 2024
status: "Built"  # Built | Under Construction | Concept
program: ["Cultural", "Public"]
size: "5,000 m²"
cover:
  render: "/images/your-project/cover-render.jpg"
  reality: "/images/your-project/cover-reality.jpg"
gallery:
  - type: "image"
    src: "/images/your-project/01.jpg"
    alt: "Descriptive alt text"
  - type: "video"
    src: "/videos/your-project/walkthrough.webm"
facts:
  client: "Client Name"
  collaborators: ["Partner A", "Partner B"]
  structural_system: "RC frame"
  materials: ["Concrete", "Glass", "Timber"]
  awards: ["Award Name 2024"]
map_image: "/images/your-project/map.jpg"
related: ["other-project-slug"]
tags: ["Cultural", "Public Space"]
---

## Introduction

Your project introduction...

## Concept

Design approach and concept...
```

### 2. Add Images

Place images in `public/images/your-project/`:
- `cover-render.jpg` (1920×1280px recommended)
- `cover-reality.jpg` (1920×1280px recommended)
- Gallery images (`01.jpg`, `02.jpg`, etc.)

### 3. Rebuild Content

Contentlayer automatically watches for changes in dev mode. For production:

```bash
pnpm build
```

## 🎨 Customization

### Color Scheme

Edit `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      accent: '#1E90FF',      // Primary accent color
      charcoal: '#2A2A2A',    // Text color
    },
  },
}
```

### Typography

Font is configured in `app/layout.tsx`:

```ts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

To change fonts, import from `next/font/google` or use custom fonts.

### Animations

All animations respect `prefers-reduced-motion`. To disable specific effects:

Edit `lib/parallax.ts`:

```ts
export function useReducedMotion(): boolean {
  // Always return true to disable all animations
  return true;
}
```

## 🔌 Switching to a Headless CMS

### Option 1: Sanity Studio

1. Install Sanity:
```bash
pnpm add @sanity/client @sanity/image-url
```

2. Create `lib/sanity.ts`:
```ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
```

3. Update `app/(site)/page.tsx`:
```ts
import { client } from '@/lib/sanity';

const projects = await client.fetch(`
  *[_type == "project"] | order(year desc)
`);
```

### Option 2: Keep Contentlayer + JSON Fallback

The project includes a JSON fallback structure in `lib/data/projects.ts`. Populate this file with project data and toggle between MDX and JSON in your pages.

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel dashboard
3. Vercel auto-detects Next.js configuration
4. Deploy!

Environment variables (if needed):
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=hello@yourstudio.com
```

### Other Platforms

**Netlify:**
```bash
pnpm build
# Output: .next/ folder
```

**Docker:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements accessible via Tab
- **Focus Indicators**: Visible focus rings on all focusable elements
- **Screen Reader Support**: Semantic HTML, ARIA labels where needed
- **Reduced Motion**: Animations disabled via `prefers-reduced-motion: reduce`
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Alt Text**: All images include descriptive alt attributes
- **Form Validation**: Clear error messages and validation feedback

### Testing Accessibility

```bash
# Install axe-core
pnpm add -D @axe-core/cli

# Run accessibility audit
npx axe http://localhost:3000
```

## 🐛 Troubleshooting

### Contentlayer Build Errors

**Issue**: `Cannot find module 'contentlayer/generated'`

**Solution**: Run Contentlayer first:
```bash
pnpm contentlayer build
pnpm dev
```

### Image Optimization Errors

**Issue**: `Error: Invalid src prop`

**Solution**: Ensure images exist in `public/` and paths start with `/`:
```mdx
cover:
  render: "/images/project/cover.jpg"  # ✅ Correct
  reality: "images/project/cover.jpg"   # ❌ Missing leading slash
```

### Lenis Not Working

**Issue**: Smooth scroll not working

**Solution**: Check reduced motion preference:
```js
// In browser console
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

If `true`, Lenis is intentionally disabled for accessibility.

### Build Timeouts on Vercel

**Issue**: Build exceeds time limit

**Solution**: Optimize images before committing:
```bash
# Use sharp or imagemagick
sharp -i "public/images/**/*.jpg" -o "optimized/" --webp
```

## 📊 Performance Targets

- **Lighthouse Scores**: ≥90 in all categories
- **LCP**: < 2.0s on Fast 3G
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle Size**: < 200KB gzipped

### Monitoring Performance

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:3000
```

## 🛠️ Development Tools

### Recommended VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- MDX

### Useful Commands

```bash
# Type checking
pnpm tsc --noEmit

# Linting
pnpm lint

# Format code
pnpm prettier --write .

# Analyze bundle
pnpm build
npx @next/bundle-analyzer
```

## 📄 License

MIT License - feel free to use this template for your own projects.

## 🙏 Credits

- **Design Inspiration**: MVRDV, Herzog & de Meuron
- **Stack**: Next.js 15, Tailwind CSS, Framer Motion, Contentlayer, Lenis
- **Fonts**: Inter by Rasmus Andersson

---

**Built with ❤️ for architecture studios worldwide** 