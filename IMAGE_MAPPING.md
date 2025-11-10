# Image Mapping - Actual Files Used

## 📸 Images in `/public/images` Directory

### Hero Section
- **`cover.jpg`** → Landing page hero background

### Project Images (Render ⇄ Reality Pairs)

#### Pair 1
- **`p1_ren.jpeg`** → Project 1 Render
- **`p1_real.jpeg`** → Project 1 Reality

#### Pair 2
- **`p2_ren.jpeg`** → Project 2 Render  
- **`p2_real.jpeg`** → Project 2 Reality

#### Pair 3
- **`p3_rem.jpeg`** → Project 3 Render
- **`p3_real.jpeg`** → Project 3 Reality

---

## 🗂️ Project Assignments

| Project Name | Render Image | Reality Image |
|-------------|--------------|---------------|
| Harbor Cultural Center | `/images/p1_ren.jpeg` | `/images/p1_real.jpeg` |
| Seafront Promenade | `/images/p2_ren.jpeg` | `/images/p2_real.jpeg` |
| Stone Gallery | `/images/p3_rem.jpeg` | `/images/p3_real.jpeg` |
| Vertical Gardens | `/images/p1_ren.jpeg` | `/images/p1_real.jpeg` |
| Plaza Marina | `/images/p2_ren.jpeg` | `/images/p2_real.jpeg` |
| Innovation Tech Hub | `/images/p3_rem.jpeg` | `/images/p3_real.jpeg` |

---

## ✅ Verification

All image paths use **ONLY** the actual files that exist in the `/public/images` directory:

- ✅ `cover.jpg` (298KB) - Used in hero section
- ✅ `p1_ren.jpeg` (404KB) - Project 1 render
- ✅ `p1_real.jpeg` (441KB) - Project 1 reality
- ✅ `p2_ren.jpeg` (356KB) - Project 2 render
- ✅ `p2_real.jpeg` (236KB) - Project 2 reality
- ✅ `p3_rem.jpeg` (331KB) - Project 3 render
- ✅ `p3_real.jpeg` (395KB) - Project 3 reality

**No placeholder or non-existent images are referenced.**

---

## 🎯 Usage in Code

### Hero Section (`app/(site)/page.tsx`)
```tsx
<img 
  src="/images/cover.jpg"
  alt="MKDP Studio Architecture"
/>
```

### Projects Data (`lib/projects-data.ts`)
```typescript
cover: {
  render: "/images/p1_ren.jpeg",
  reality: "/images/p1_real.jpeg"
}
```

All paths are relative to the `/public` directory, so `/images/cover.jpg` resolves to `/public/images/cover.jpg`. 