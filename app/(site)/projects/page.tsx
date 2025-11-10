import React from 'react';
import { allProjects } from '@/lib/projects-data';
import { Container } from '@/components/ui/Container';
import { searchProjects } from '@/lib/search';
import { getUniqueTags } from '@/lib/utils';
import { ProjectCardComparison } from '@/components/cards/ProjectCardComparison';

interface ProjectsPageProps {
  searchParams: Promise<{
    query?: string;
    tag?: string | string[];
    status?: string;
  }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  
  const query = params.query || '';
  const tags = params.tag ? (Array.isArray(params.tag) ? params.tag : [params.tag]) : [];
  const status = params.status || '';

  // Get all unique tags and statuses
  const availableTags = getUniqueTags(allProjects);
  const availableStatuses = Array.from(new Set(allProjects.map((p) => p.status)));
  const availableYears = Array.from(new Set(allProjects.map((p) => p.year))).sort(
    (a, b) => b - a
  );

  // Filter projects based on search params
  const filteredProjects = searchProjects(allProjects, {
    query,
    tags,
    status,
  });

  return (
    <div className="bg-black pt-24">
      {/* Hero Header */}
      <section className="py-32 border-b border-white/5">
        <Container>
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                Portfolio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-extralight tracking-tight mb-12 leading-[0.9]">
              Projects
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-white/60">
              <div>
                <span className="text-4xl md:text-5xl text-white font-extralight tracking-tight">
                  {filteredProjects.length}
                </span>
                <span className="text-sm ml-3 tracking-wider">
                  {filteredProjects.length === 1 ? 'Project' : 'Projects'}
                </span>
              </div>
              <span className="text-white/20">·</span>
              <div className="text-sm tracking-wider">
                MENA × Europe
              </div>
              <span className="text-white/20">·</span>
              <div className="text-sm tracking-wider">
                1995 – {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Render ⇄ Reality Grid */}
      <section className="py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCardComparison
                key={project.slug}
                title={project.title}
                location={project.location}
                year={project.year}
                slug={project.slug}
                renderImage={project.cover.render}
                realityImage={project.cover.reality}
                number={String(index + 1).padStart(2, '0')}
              />
            ))
          ) : (
            <div className="col-span-2 py-32 text-center">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-black/30 font-light">
                No projects found
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-white font-extralight mb-3">
                {allProjects.length}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-white font-extralight mb-3">
                {allProjects.filter(p => p.status === 'Built').length}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Built
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-white font-extralight mb-3">
                {availableYears.length}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Years Active
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-white font-extralight mb-3">
                2
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Offices
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Projects | MKDP Studio',
  description: 'Explore our portfolio of architectural projects across the MENA region and Europe. From cultural centers to residential developments.',
}; 