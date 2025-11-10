# Image Alignment Guide for Render ⇄ Reality Comparison

## 🎯 The Problem

When comparing render and reality images, they need to be **perfectly aligned** for the slider to work effectively. If the images have different:
- Camera angles
- Crop positions
- Aspect ratios
- Focal points

...the comparison will look misaligned and unprofessional.

---

## ✅ What I've Done (Code Fixes)

### 1. Updated `ComparisonSlider.tsx`
Added explicit positioning to both images:
```tsx
<img
  src={realityImage}
  className="w-full h-full object-cover object-center"
  style={{ 
    objectFit: 'cover',
    objectPosition: 'center center'
  }}
/>
```

### 2. Updated `ProjectCardComparison.tsx`
Same alignment fix for the card hover effect.

---

## 🔧 How to Fix Your Images (Recommended Solutions)

### Option 1: Pre-align Images in Photo Editor (BEST)

Use Photoshop, GIMP, or similar tools to align the images before uploading:

1. **Open both images** (render and reality) in Photoshop
2. **Stack them as layers** in the same document
3. **Set top layer to 50% opacity** to see both images
4. **Use Transform tools** (Ctrl/Cmd + T) to:
   - Scale
   - Rotate
   - Position
5. **Align key features** (corners, edges, focal points)
6. **Crop both to same dimensions**
7. **Export at same resolution** (e.g., 1920×1280px)

**Tools:**
- Photoshop: Layer → Auto-Align Layers
- GIMP: Filters → Distorts → Lens Distortion
- Affinity Photo: Similar alignment tools

### Option 2: Use CSS object-position (Quick Fix)

If images are slightly off, adjust the CSS `object-position`:

```tsx
// In ComparisonSlider.tsx or ProjectCardComparison.tsx

// Reality image
<img
  style={{ 
    objectFit: 'cover',
    objectPosition: '50% 45%'  // Adjust these percentages
  }}
/>

// Render image  
<img
  style={{ 
    objectFit: 'cover',
    objectPosition: '50% 55%'  // Adjust these percentages
  }}
/>
```

**Adjustment guide:**
- First value (X-axis): `0%` = left, `50%` = center, `100%` = right
- Second value (Y-axis): `0%` = top, `50%` = center, `100%` = bottom

### Option 3: Use object-fit: contain (Shows Full Image)

If you want to show the entire image without cropping:

```tsx
<img
  style={{ 
    objectFit: 'contain',  // Changed from 'cover'
    objectPosition: 'center center'
  }}
/>
```

**Note:** This may add black bars if aspect ratios don't match.

### Option 4: Create a Custom Alignment Component

For precise control per project:

```tsx
// In projects-data.ts
export const allProjects = [
  {
    title: "Harbor Cultural Center",
    cover: {
      render: "/images/p1_ren.jpeg",
      reality: "/images/p1_real.jpeg",
      alignment: {
        render: { x: '50%', y: '45%' },
        reality: { x: '50%', y: '55%' }
      }
    }
  }
];
```

---

## 📐 Best Practices for Future Images

### 1. **Shoot/Render from Same Position**
- Use exact same camera position
- Same focal length
- Same angle
- Same framing

### 2. **Use Reference Points**
- Mark camera position during photoshoot
- Use building corners as alignment guides
- Match horizon line

### 3. **Standard Dimensions**
- Use consistent aspect ratio (e.g., 16:9 or 3:2)
- Export at same resolution
- Same file format (JPEG or WebP)

### 4. **Naming Convention**
Keep your current naming:
- `p1_ren.jpeg` ← Render
- `p1_real.jpeg` ← Reality (same angle/crop)

---

## 🛠️ Quick Alignment Test

To test if your images are aligned:

1. Open both images in separate browser tabs
2. Quickly switch between tabs
3. If elements "jump" significantly → needs realignment
4. If elements stay mostly in place → good alignment

---

## 💡 Temporary Workaround

If you can't re-align images right now, you can:

1. **Use opacity blend** instead of slider:
```tsx
// Smooth crossfade instead of slider
<img src={render} style={{ opacity: hover ? 0 : 1 }} />
<img src={reality} style={{ opacity: hover ? 1 : 0 }} />
```

2. **Show images side-by-side**:
```tsx
<div className="grid grid-cols-2 gap-4">
  <img src={render} alt="Render" />
  <img src={reality} alt="Reality" />
</div>
```

---

## 🎨 Current Implementation

Your comparison slider now has:
- ✅ Centered object positioning
- ✅ Consistent object-fit: cover
- ✅ Same dimensions for both images
- ✅ Smooth clipping animation

**But** the actual image content still needs to be aligned in the source files for perfect results.

---

## 📝 Recommended Next Steps

1. **Check your current images** - Are p1_ren and p1_real taken from the same angle?
2. **If not aligned** - Use Photoshop/GIMP to align them
3. **If already aligned** - Adjust `object-position` values in the code
4. **Test the slider** - Drag to see if features line up
5. **Repeat for all 3 pairs** - p1, p2, p3

---

## 🔍 Example: Manual Alignment in Code

If you want to adjust alignment per project without editing images:

```tsx
// Create a new file: lib/image-alignment.ts
export const imageAlignment = {
  'p1_ren.jpeg': { x: '50%', y: '48%' },
  'p1_real.jpeg': { x: '50%', y: '52%' },
  'p2_ren.jpeg': { x: '50%', y: '50%' },
  'p2_real.jpeg': { x: '50%', y: '50%' },
  // ... etc
};
```

Then use in ComparisonSlider:
```tsx
const getAlignment = (imagePath: string) => {
  const filename = imagePath.split('/').pop();
  return imageAlignment[filename] || { x: '50%', y: '50%' };
};

const renderAlign = getAlignment(renderImage);
const realityAlign = getAlignment(realityImage);
```

Let me know if you'd like me to implement this custom alignment system! 