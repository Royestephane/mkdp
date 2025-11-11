'use client';

import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  location: string;
  year: number;
  tags: string[];
  coverRender: string;
  coverReality: string;
  slug: string;
}

export function ProjectCard({
  title,
  location,
  year,
  tags,
  coverReality,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden mb-6 bg-neutral-100">
        <img 
          src={coverReality}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Hover overlay with project info */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="text-white">
            <div className="text-xs tracking-wider uppercase mb-2">{location}</div>
            <div className="text-sm font-light">{year}</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-2xl font-light tracking-tight text-black group-hover:text-black/60 transition-colors duration-500">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag, i) => (
            <span 
              key={i} 
              className="text-xs text-black/40 tracking-wider uppercase px-3 py-1 border border-black/10 group-hover:border-black/30 transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
} 