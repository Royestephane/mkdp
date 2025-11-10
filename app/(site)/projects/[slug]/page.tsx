import React from 'react';
import Link from 'next/link';
import { allProjects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ComparisonSlider } from '@/components/compare/ComparisonSlider';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Architecture Portfolio`,
    description: `${project.title} - ${project.location} (${project.year})`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-white">
      {/* Hero - Full Width Image */}
      <section className="relative h-[60vh] md:h-[70vh] w-full bg-black">
        <img 
          src={project.cover.reality}
          alt={`${project.title}`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <Container>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-white/40"></div>
              <span className="text-[9px] tracking-[0.35em] text-white/70 uppercase font-light">
                {project.status}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-extralight tracking-tight leading-tight max-w-5xl">
              {project.title}
            </h1>
          </Container>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="border-b border-black/10 bg-white sticky top-0 z-40">
        <Container>
          <div className="flex flex-wrap items-center gap-8 py-6 text-sm">
            <div>
              <span className="text-black/40 text-xs tracking-wider uppercase mr-2">Status</span>
              <span className="text-black font-light">{project.status}</span>
            </div>
            <div className="h-4 w-px bg-black/10"></div>
            <div>
              <span className="text-black/40 text-xs tracking-wider uppercase mr-2">Year</span>
              <span className="text-black font-light">{project.year}</span>
            </div>
            <div className="h-4 w-px bg-black/10"></div>
            <div>
              <span className="text-black/40 text-xs tracking-wider uppercase mr-2">Surface</span>
              <span className="text-black font-light">{project.size}</span>
            </div>
            <div className="h-4 w-px bg-black/10"></div>
            <div>
              <span className="text-black/40 text-xs tracking-wider uppercase mr-2">Location</span>
              <span className="text-black font-light">{project.location}</span>
            </div>
            <div className="h-4 w-px bg-black/10"></div>
            <div>
              <span className="text-black/40 text-xs tracking-wider uppercase mr-2">Programme</span>
              <span className="text-black font-light">{project.program.join(', ')}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-black/80 font-light leading-relaxed mb-8">
              {project.title} represents our commitment to creating spaces that seamlessly blend architectural innovation with cultural context.
            </p>
            <p className="text-lg text-black/60 font-light leading-relaxed mb-6">
              Located in {project.location}, this {project.size} development showcases our multidisciplinary approach to design, integrating architecture, interior design, and landscape to create a holistic environment.
            </p>
            <p className="text-base text-black/50 font-light leading-relaxed">
              The project embodies our philosophy of designing spaces that respond to the dynamic needs of modern life while respecting the unique cultural and environmental context of its location.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Comparison */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-black mb-4">
                Render ⇄ Reality
              </h2>
              <p className="text-black/60 text-sm font-light max-w-2xl">
                Drag the slider to explore how our architectural visualization translates to the built environment.
              </p>
            </div>

            <ComparisonSlider
              renderImage={project.cover.render}
              realityImage={project.cover.reality}
              title={project.title}
              className="aspect-[16/9] shadow-lg"
            />
          </div>
        </Container>
      </section>

      {/* Project Details Grid */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-black mb-12">
              Project Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-light">
                  Programme
                </h3>
                <p className="text-base text-black font-light leading-relaxed">
                  {project.program.join(', ')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-light">
                  Location
                </h3>
                <p className="text-base text-black font-light leading-relaxed">
                  {project.location}
                </p>
              </div>
              
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-light">
                  Timeline
                </h3>
                <p className="text-base text-black font-light leading-relaxed">
                  {project.year} – {project.status}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Credits */}
      <section className="py-16 bg-neutral-50 border-t border-black/10">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-black mb-12">
              Credits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-light">
                  Architect
                </h3>
                <p className="text-base text-black font-light">
                  MKDP Studio
                </p>
              </div>
              
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-light">
                  Founder
                </h3>
                <p className="text-base text-black font-light">
                  Michel Keyrouz
                </p>
              </div>
              
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-light">
                  Location
                </h3>
                <p className="text-base text-black font-light">
                  Dubai × Beirut
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-black">
              You might also like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProjects
              .filter(p => p.slug !== project.slug)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
                    <img 
                      src={relatedProject.cover.reality}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <h3 className="text-xl font-light tracking-tight mb-2 text-black group-hover:text-black/60 transition-colors duration-500">
                    {relatedProject.title}
                  </h3>
                  <div className="flex items-center gap-3 text-black/50 text-sm font-light">
                    <span>{relatedProject.location}</span>
                    <span>·</span>
                    <span>{relatedProject.year}</span>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </section>

      {/* Back to Projects */}
      <section className="py-12 bg-neutral-50 border-t border-black/10">
        <Container>
          <a 
            href="/projects" 
            className="inline-flex items-center gap-3 text-black/60 hover:text-black transition-colors duration-500 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-xs tracking-[0.2em] uppercase font-light">All Projects</span>
          </a>
        </Container>
      </section>
    </article>
  );
} 