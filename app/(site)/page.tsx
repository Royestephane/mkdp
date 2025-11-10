'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { allProjects } from '@/lib/projects-data';
import { Container } from '@/components/ui/Container';
import { ComparisonSlider } from '@/components/compare/ComparisonSlider';
import { ProjectCardComparison } from '@/components/cards/ProjectCardComparison';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredProjects = allProjects
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  return (
    <div className="bg-black">
      {/* Hero - Architectural Statement */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Hero Image with subtle zoom */}
        <div className="absolute inset-0">
          <img 
            src="/images/cover.jpg"
            alt="MKDP Studio Architecture"
            className="w-full h-full object-cover scale-105"
            style={{
              transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
              transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Architectural text composition */}
        <div className="relative h-full flex items-end pb-32">
          <Container>
            <div className="max-w-6xl">
              {/* Studio label */}
              <div 
                className="mb-6 overflow-hidden"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                <div className="inline-flex items-center gap-3">
                  <div className="h-px w-8 bg-white/60"></div>
                  <span className="text-[9px] tracking-[0.35em] text-white/70 uppercase font-light">
                    Architecture × Interior × Urbanism
                  </span>
                </div>
              </div>

              {/* Main statement - MVRDV-style bold typography */}
              <h1 className="mb-8">
                <div 
                  className="overflow-hidden"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
                  }}
                >
                  <span className="block text-6xl md:text-8xl lg:text-[10rem] text-white font-extralight tracking-[-0.02em] leading-[0.85] mb-4">
                    Designing
                  </span>
                  <span className="block text-6xl md:text-8xl lg:text-[10rem] text-white font-extralight tracking-[-0.02em] leading-[0.85]">
                    Tomorrow's
                  </span>
                  <span className="block text-6xl md:text-8xl lg:text-[10rem] text-white font-bold tracking-[-0.02em] leading-[0.85]">
                    Environments
                  </span>
                </div>
              </h1>

              {/* Conceptual statement */}
              <div 
                className="max-w-2xl"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
                }}
              >
                <p className="text-white/80 text-base md:text-lg font-light leading-relaxed tracking-wide mb-8">
                  Where architecture meets innovation. We create holistic spaces that seamlessly 
                  integrate form, function, and cultural context across the MENA region and Europe.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/60 text-xs font-light">
                  <span className="tracking-[0.2em] uppercase">Est. 1995</span>
                  <span className="text-white/30">·</span>
                  <span className="tracking-[0.2em] uppercase">Dubai × Beirut</span>
                  <span className="text-white/30">·</span>
                  <span className="tracking-[0.2em] uppercase">30+ Years</span>
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 1s'
                }}
              >
                <Link 
                  href="/projects"
                  className="group inline-flex items-center gap-4 mt-12 px-8 py-4 bg-white text-black hover:bg-white/90 transition-all duration-500"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Explore Projects</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 text-white/50">
            <span className="text-[8px] tracking-[0.35em] uppercase font-light">Scroll</span>
            <div className="w-px h-16 bg-white/30 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Render ⇄ Reality Feature Section */}
      <section className="bg-black py-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-white/20"></div>
                <h2 className="text-5xl md:text-7xl text-white font-extralight tracking-tight">
                  Render <span className="text-white/30">⇄</span> Reality
                </h2>
                <div className="h-px w-16 bg-white/20"></div>
              </div>
              <p className="text-white/50 text-sm tracking-wide max-w-2xl mx-auto">
                Drag the slider to compare our architectural visualizations with the completed buildings.
                Every detail, perfectly realized.
              </p>
            </div>

            {/* Interactive Comparison */}
            <ComparisonSlider
              renderImage={featuredProjects[1]?.cover.render}
              realityImage={featuredProjects[1]?.cover.reality}
              title={featuredProjects[1]?.title}
              className="aspect-[16/9] rounded-sm"
            />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 text-center">
              <div>
                <div className="text-4xl md:text-5xl text-white font-extralight mb-2">98%</div>
                <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl text-white font-extralight mb-2">{allProjects.length}+</div>
                <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl text-white font-extralight mb-2">100%</div>
                <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Built</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Grid - Render ⇄ Reality Cards */}
      <section className="bg-white py-24">
        <Container>
          <div className="mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-black/20"></div>
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                Featured Projects
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-extralight tracking-tight text-black">
              Recent Work
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProjects.slice(1).map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <img 
                    src={project.cover.reality}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-light tracking-tight text-black group-hover:text-black/60 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-black/50 text-sm font-light">
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs text-black/40 tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Studio Introduction */}
      <section className="bg-black py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/20"></div>
                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                  About MKDP
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl text-white font-extralight tracking-tight leading-tight">
                30 Years of
                <br />
                Design Excellence
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Founded in 1995 in Lebanon by Michel Keyrouz, MKDP Studio has grown into an international architecture and interior design practice with offices in Dubai and Beirut.
              </p>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Our multidisciplinary team operates at the intersection of architecture, urbanism, interior design, and landscape, creating holistic environments that seamlessly integrate form and function across the MENA region and Europe.
              </p>
              <div className="pt-8">
                <Link 
                  href="/about"
                  className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500"
                >
                  <span className="text-[11px] tracking-[0.2em] uppercase font-light">Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-black/20"></div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                  What We Do
                </span>
                <div className="h-px w-12 bg-black/20"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tight text-black">
                Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: 'Architecture',
                  description: 'Innovative architectural solutions that respond to cultural and environmental contexts.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: 'Interior Design',
                  description: 'Sophisticated interior spaces that blend functionality with aesthetic excellence.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                {
                  title: 'Urban Design',
                  description: 'Master planning and urban interventions that shape vibrant communities.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )
                },
                {
                  title: 'Landscape Design',
                  description: 'Integrated landscape solutions that enhance the built environment.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Development',
                  description: 'Comprehensive development services from concept to completion.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: 'Consultation',
                  description: 'Expert architectural consultation and project management services.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="mb-6 text-black/40 group-hover:text-black transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-extralight tracking-tight mb-4 text-black">
                    {service.title}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-32 border-t border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                Let's Collaborate
              </span>
              <div className="h-px w-16 bg-white/20"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl text-white font-extralight tracking-tight mb-8 leading-tight">
              Ready to Start
              <br />
              Your Project?
            </h2>
            
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're planning a new development or reimagining an existing space, we're here to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-4 px-12 py-5 bg-white text-black hover:bg-white/90 transition-all duration-500"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                  Get in Touch
                </span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link 
                href="/projects"
                className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500"
              >
                <span className="text-[11px] tracking-[0.2em] uppercase font-light">
                  View All Projects
                </span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 