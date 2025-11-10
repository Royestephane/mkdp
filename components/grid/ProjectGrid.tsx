import React from 'react';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Reveal } from '@/components/reveal/Reveal';

interface Project {
  title: string;
  slug: string;
  location: string;
  year: number;
  tags: string[];
  cover: {
    render: string;
    reality: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-charcoal/60">No projects found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
      {projects.map((project, index) => (
        <div key={project.slug} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
          <ProjectCard
            title={project.title}
            location={project.location}
            year={project.year}
            tags={project.tags}
            coverRender={project.cover.render}
            coverReality={project.cover.reality}
            slug={project.slug}
          />
        </div>
      ))}
    </div>
  );
} 