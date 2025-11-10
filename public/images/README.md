# Project Images

This directory contains all project images for the architecture portfolio.

## Structure

```
images/
├── harbor/
│   ├── cover-render.jpg
│   ├── cover-reality.jpg
│   ├── 01.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   └── map.jpg
├── seafront/
│   ├── cover-render.jpg
│   ├── cover-reality.jpg
│   ├── 01.jpg
│   ├── 02.jpg
│   └── 03.jpg
├── stone/
│   ├── cover-render.jpg
│   ├── cover-reality.jpg
│   ├── 01.jpg
│   ├── 02.jpg
│   └── 03.jpg
├── vertical/
│   ├── cover-render.jpg
│   ├── cover-reality.jpg
│   ├── 01.jpg
│   ├── 02.jpg
│   └── 03.jpg
├── plaza/
│   ├── cover-render.jpg
│   ├── cover-reality.jpg
│   ├── 01.jpg
│   ├── 02.jpg
│   └── 03.jpg
└── tech/
    ├── cover-render.jpg
    ├── cover-reality.jpg
    ├── 01.jpg
    ├── 02.jpg
    └── 03.jpg
```

## Image Requirements

### Cover Images
- **cover-render.jpg**: Architectural rendering of the project
- **cover-reality.jpg**: Photo of the completed/in-progress project
- Recommended size: 1920×1280px (3:2 ratio)
- Format: JPG or WebP
- Quality: High (80-90% compression)

### Gallery Images
- Format: JPG or WebP
- Minimum width: 1200px
- Descriptive alt text should be included in MDX frontmatter

## Generating Placeholder Images

For development, you can use placeholder services:
- https://placehold.co/1920x1280/efefef/666666?text=Project+Name
- https://via.placeholder.com/1920x1280.jpg

Or create your own using:
```bash
# Using ImageMagick
convert -size 1920x1280 xc:lightgray -pointsize 72 -fill black -gravity center -annotate +0+0 "Placeholder" cover-render.jpg
```

## Optimizing Images

Before deployment, optimize all images:

```bash
# Install sharp-cli
npm install -g sharp-cli

# Optimize images
sharp -i "images/**/*.jpg" -o "images-optimized/" --webp
``` 