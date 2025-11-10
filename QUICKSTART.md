# 🚀 Quick Start Guide

## Get Running in 3 Steps

### 1️⃣ Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2️⃣ Generate Placeholder Images

```bash
npm run setup
```

This creates SVG placeholder images for all 6 demo projects.

### 3️⃣ Start Development Server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser!

---

## What You'll See

- **Home page** (`/`) - Hero section + 6 featured projects
- **Projects listing** (`/projects`) - Filterable grid with search
- **Project detail** (`/projects/harbor-cultural-center`) - Interactive Render⇄Reality comparison
- **About page** (`/about`) - Studio info, team, awards
- **Contact page** (`/contact`) - Working contact form

---

## Try These Features

### 🖱️ Render ⇄ Reality Slider
1. Go to any project detail page
2. Drag the slider or use keyboard arrows (←/→)
3. Watch the auto-sweep animation on first view

### 🔍 Project Filtering
1. Go to `/projects`
2. Click tags to filter
3. Use the search box
4. Notice URL updates (refresh works!)

### ⌨️ Keyboard Navigation
- Press `Tab` to navigate
- Use arrow keys in the comparison slider
- Press `Esc` to close lightbox

### 🎨 Reduced Motion
1. Enable "Reduce motion" in your OS accessibility settings
2. Reload the page
3. All animations will be disabled automatically

---

## Next Steps

### Replace Placeholder Images

1. Add your project photos to `public/images/[project-name]/`
   - `cover-render.jpg` (1920×1280px)
   - `cover-reality.jpg` (1920×1280px)
   - Gallery images

2. Images are automatically optimized by Next.js!

### Add Your Own Project

Create `content/projects/my-project.mdx`:

```mdx
---
title: "My Amazing Project"
slug: "my-project"
location: "City, Country"
year: 2024
status: "Built"
program: ["Type"]
size: "1,000 m²"
cover:
  render: "/images/my-project/cover-render.jpg"
  reality: "/images/my-project/cover-reality.jpg"
gallery:
  - type: "image"
    src: "/images/my-project/01.jpg"
    alt: "Description"
tags: ["Tag1", "Tag2"]
---

## Introduction

Your content here...
```

Contentlayer will automatically detect and build it!

### Customize Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  accent: '#1E90FF',      // Your brand color
  charcoal: '#2A2A2A',    // Text color
}
```

---

## Build for Production

```bash
npm run build
```

This generates an optimized static site in `.next/`

---

## Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Vercel automatically detects Next.js and deploys.

---

## Need Help?

- **Full documentation**: See `README.md`
- **Project summary**: See `PROJECT_SUMMARY.md`
- **Image guide**: See `public/images/README.md`

---

## Common Issues

### Dependencies won't install
Use `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

### Build fails
Make sure Contentlayer runs first:
```bash
npx contentlayer build
npm run build
```

### Images not loading
Check that image paths start with `/`:
```yaml
cover:
  render: "/images/project/cover.jpg"  # ✅ Correct
```

---

**You're all set! Happy building! 🎉** 