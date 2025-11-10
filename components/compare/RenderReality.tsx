'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/lib/parallax';
import { Button } from '@/components/ui/Button';

interface RenderRealityProps {
  renderImage: string;
  realityImage: string;
  alt: string;
}

export function RenderReality({
  renderImage,
  realityImage,
  alt,
}: RenderRealityProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const prefersReducedMotion = useReducedMotion();

  // Auto-sweep animation on first view
  useEffect(() => {
    if (isInView && !hasInteracted && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setPosition(30);
        setTimeout(() => {
          if (!hasInteracted) {
            setPosition(70);
            setTimeout(() => {
              if (!hasInteracted) {
                setPosition(50);
              }
            }, 800);
          }
        }, 800);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasInteracted, prefersReducedMotion]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setHasInteracted(true);
      setPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setHasInteracted(true);
      setPosition((prev) => Math.min(100, prev + 5));
    }
  };

  const setToRender = () => {
    setHasInteracted(true);
    setPosition(10);
  };

  const setToReality = () => {
    setHasInteracted(true);
    setPosition(90);
  };

  useEffect(() => {
    if (isDragging) {
      const handleGlobalPointerMove = (e: PointerEvent) => {
        handleMove(e.clientX);
      };
      const handleGlobalPointerUp = () => {
        setIsDragging(false);
      };

      document.addEventListener('pointermove', handleGlobalPointerMove);
      document.addEventListener('pointerup', handleGlobalPointerUp);

      return () => {
        document.removeEventListener('pointermove', handleGlobalPointerMove);
        document.removeEventListener('pointerup', handleGlobalPointerUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="space-y-4">
      {/* A/B Toggle Buttons */}
      <div className="flex gap-2 justify-center">
        <Button
          onClick={setToRender}
          variant="secondary"
          size="sm"
          aria-label="Show render"
        >
          Render
        </Button>
        <Button
          onClick={setToReality}
          variant="secondary"
          size="sm"
          aria-label="Show reality"
        >
          Reality
        </Button>
      </div>

      {/* Comparison Container */}
      <div
        ref={containerRef}
        className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 cursor-ew-resize select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Drag to compare render and reality"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
      >
        {/* Reality Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={realityImage}
            alt={`${alt} - Reality`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>

        {/* Render Image (Foreground) */}
        <motion.div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          transition={{ duration: hasInteracted ? 0 : 0.8, ease: 'easeInOut' }}
        >
          <Image
            src={renderImage}
            alt={`${alt} - Render`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${position}%` }}
          transition={{ duration: hasInteracted ? 0 : 0.8, ease: 'easeInOut' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-medium text-charcoal">
          Render
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-medium text-charcoal">
          Reality
        </div>
      </div>

      <p className="text-sm text-center text-charcoal/60">
        Drag the slider or use arrow keys to compare
      </p>
    </div>
  );
} 