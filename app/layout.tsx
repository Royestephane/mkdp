import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'MKDP Studio | Architecture & Interior Design',
    template: '%s | MKDP Studio'
  },
  description: 'International architecture and interior design studio operating at the intersection of architecture, urbanism, interior design, and landscape. Founded 1995 in Lebanon, expanded to Dubai 2019.',
  keywords: [
    'architecture',
    'interior design',
    'MKDP Studio',
    'Michel Keyrouz',
    'Dubai architecture',
    'Lebanon architecture',
    'MENA architecture',
    'urban design',
    'landscape design',
    'architectural visualization',
    'render reality comparison',
    'contemporary architecture',
    'luxury design'
  ],
  authors: [{ name: 'MKDP Studio', url: 'https://mkdpstudio.com' }],
  creator: 'MKDP Studio',
  publisher: 'MKDP Studio',
  metadataBase: new URL('https://mkdpstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mkdpstudio.com',
    siteName: 'MKDP Studio',
    title: 'MKDP Studio | Architecture & Interior Design',
    description: 'International architecture and interior design studio. Dubai × Beirut. Est. 1995.',
    images: [
      {
        url: '/images/cover.jpg',
        width: 1920,
        height: 1080,
        alt: 'MKDP Studio Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKDP Studio | Architecture & Interior Design',
    description: 'International architecture and interior design studio. Dubai × Beirut. Est. 1995.',
    images: ['/images/cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
} 