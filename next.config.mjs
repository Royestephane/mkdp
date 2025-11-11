// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 👇 This makes Next output a static site to ./out
  output: 'export',

  // 👇 Required for GitHub Pages project sites
  basePath: isProd ? '/mkdp' : '',
  assetPrefix: isProd ? '/mkdp/' : '',

  // 👇 next/image won't run an image optimization server on GH Pages
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },

  // Optional: nicer URLs for static hosts
  // trailingSlash: true,
}

export default nextConfig