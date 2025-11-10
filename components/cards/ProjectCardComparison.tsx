'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ProjectCardComparisonProps {
  title: string;
  location: string;
  year: number;
  slug: string;
  renderImage: string;
  realityImage: string;
  number: string;
}

export function ProjectCardComparison({
  title,
  location,
  year,
  slug,
  renderImage,
  realityImage,
  number,
}: ProjectCardComparisonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative aspect-[4/5] overflow-hidden block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Reality Image (Background) */}
      <img 
        src={realityImage}
        alt={`${title} - Reality`}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ 
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
      />
      
      {/* Render Image (Foreground - fades out on hover) */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        <img 
          src={renderImage}
          alt={`${title} - Render`}
          className="w-full h-full object-cover object-center"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700" />

      {/* Elegant Render/Reality Badge */}
      <div className="absolute top-8 left-8">
        <div className="relative">
          {/* Render Badge */}
          <div 
            className="absolute inset-0 transition-all duration-700"
            style={{ 
              opacity: isHovered ? 0 : 1,
              transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
            }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-white to-white/95 backdrop-blur-xl border border-white/40 shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[9px] tracking-[0.35em] text-black uppercase font-light">Render</span>
            </div>
          </div>
          
          {/* Reality Badge */}
          <div 
            className="transition-all duration-700"
            style={{ 
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(8px)'
            }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-black to-black/95 backdrop-blur-xl border border-white/30 shadow-2xl">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span className="text-[9px] tracking-[0.35em] text-white uppercase font-light">Reality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="text-[10px] tracking-[0.3em] text-white/60 uppercase mb-3">
          {number}
        </div>
        <h3 className="text-3xl md:text-4xl text-white font-extralight tracking-tight mb-3 group-hover:translate-y-[-4px] transition-transform duration-500">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-white/60 text-xs tracking-wider">
          <span>{location}</span>
          <span>—</span>
          <span>{year}</span>
        </div>
      </div>

      {/* Comparison Icon */}
      <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
      </div>
    </Link>
  );
} 