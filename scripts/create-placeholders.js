const fs = require('fs');
const path = require('path');

const projects = [
  'harbor',
  'seafront',
  'stone',
  'vertical',
  'plaza',
  'tech',
];

const svgTemplate = (text, subtitle = '') => `<svg width="1920" height="1280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e0e0e0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5f5f5;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1280" fill="url(#grad)"/>
  <text x="50%" y="45%" font-family="Inter, Arial, sans-serif" font-size="64" fill="#666666" text-anchor="middle" dominant-baseline="middle" font-weight="600">
    ${text}
  </text>
  <text x="50%" y="55%" font-family="Inter, Arial, sans-serif" font-size="32" fill="#999999" text-anchor="middle" dominant-baseline="middle">
    ${subtitle}
  </text>
</svg>`;

console.log('Creating placeholder images...\n');

projects.forEach((project) => {
  const projectDir = path.join(__dirname, '..', 'public', 'images', project);
  
  // Ensure directory exists
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  // Create cover images
  const renderSvg = svgTemplate(project.toUpperCase(), 'Render');
  const realitySvg = svgTemplate(project.toUpperCase(), 'Reality');
  
  fs.writeFileSync(path.join(projectDir, 'cover-render.jpg'), renderSvg);
  fs.writeFileSync(path.join(projectDir, 'cover-reality.jpg'), realitySvg);
  
  // Create gallery images
  for (let i = 1; i <= 3; i++) {
    const gallerySvg = svgTemplate(project.toUpperCase(), `Gallery ${i}`);
    fs.writeFileSync(path.join(projectDir, `0${i}.jpg`), gallerySvg);
  }
  
  // Create map image for harbor
  if (project === 'harbor') {
    const mapSvg = svgTemplate('BYBLOS', 'Location Map');
    fs.writeFileSync(path.join(projectDir, 'map.jpg'), mapSvg);
  }

  console.log(`✓ Created placeholders for ${project}`);
});

console.log('\n✨ All placeholder images created!');
console.log('\n📝 Note: Replace these SVG files with actual JPG/WebP images before production.');
console.log('   Recommended size: 1920×1280px for cover images\n'); 