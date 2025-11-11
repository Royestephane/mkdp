'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % items.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  useState(() => {
    if (lightboxIndex !== null) {
      const listener = (e: Event) => handleKeyDown(e as KeyboardEvent);
      window.addEventListener('keydown', listener);
      return () => window.removeEventListener('keydown', listener);
    }
  });

  if (items.length === 0) {
    return null;
  }

  const hasVideo = items.some((item) => item.type === 'video');

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={
          hasVideo
            ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
            : 'columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'
        }
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={hasVideo ? '' : 'break-inside-avoid'}
            onClick={() => openLightbox(index)}
          >
            {item.type === 'image' ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group">
                <Image
                  src={item.src}
                  alt={item.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ) : (
              <video
                src={item.src}
                controls
                className="w-full rounded-sm"
                aria-label={item.alt || `Gallery video ${index + 1}`}
              >
                <track kind="captions" />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-2"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 text-white hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 text-white hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-2"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {items[lightboxIndex].type === 'image' ? (
                <div className="relative w-full h-full">
                  <Image
                    src={items[lightboxIndex].src}
                    alt={items[lightboxIndex].alt || `Gallery image ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <video
                  src={items[lightboxIndex].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full"
                  aria-label={items[lightboxIndex].alt || `Gallery video ${lightboxIndex + 1}`}
                >
                  <track kind="captions" />
                </video>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 