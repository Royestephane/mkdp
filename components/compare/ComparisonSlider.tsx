'use client';

import React, { useState, useRef, useEffect } from 'react';

interface ComparisonSliderProps {
  renderImage: string;
  realityImage: string;
  title: string;
  className?: string;
}

export function ComparisonSlider({
  renderImage,
  realityImage,
  title,
  className = '',
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  // Auto-sweep animation on mount
  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    const duration = 2000; // 2 seconds
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        // Sweep from 30 to 70
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setSliderPosition(30 + (easeProgress * 40));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setSliderPosition(50);
      }
    };
    
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 500); // Start after 500ms
    
    return () => {
      clearTimeout(timer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden bg-black ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Reality Image (Background) */}
      <div className="relative w-full h-full">
        <img
          src={realityImage}
          alt={`${title} - Reality`}
          className="w-full h-full object-cover object-center"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
          draggable={false}
        />
        
        {/* Reality Label */}
        <div className="absolute bottom-8 right-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-black to-black/95 backdrop-blur-xl border border-white/30 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-[0.35em] text-white uppercase font-light">Reality</span>
              <span className="text-[8px] tracking-wider text-white/40">Built Environment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Render Image (Foreground with clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={renderImage}
          alt={`${title} - Render`}
          className="w-full h-full object-cover object-center"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
          draggable={false}
        />
        
        {/* Render Label */}
        <div className="absolute bottom-8 left-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-white to-white/95 backdrop-blur-xl border border-white/40 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-[0.35em] text-black uppercase font-light">Render</span>
              <span className="text-[8px] tracking-wider text-black/40">Visualization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-grab active:cursor-grabbing"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Instructions (fade out on interaction) */}
      {!isDragging && sliderPosition === 50 && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full animate-pulse">
            <span className="text-[10px] tracking-[0.3em] text-white/80 uppercase font-light">
              Drag to Compare
            </span>
          </div>
        </div>
      )}
    </div>
  );
} 