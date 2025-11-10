'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { allProjects } from '@/lib/projects-data';
import { Container } from '@/components/ui/Container';
import { ComparisonSlider } from '@/components/compare/ComparisonSlider';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, years: 0, countries: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targets = {
      projects: allProjects.length,
      years: new Date().getFullYear() - 1995,
      countries: 15
    };
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress),
        countries: Math.floor(targets.countries * progress)
      });
      
      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
    
    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const featuredProjects = allProjects
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Hero - Architectural Statement */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Hero Image with zoom animation */}
        <div className="absolute inset-0">
          <div className="image-zoom w-full h-full">
            <img 
              src="/images/cover.jpg"
              alt="MKDP Studio Architecture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Hero content with stagger animation */}
        <div className="relative h-full flex items-end pb-32">
          <Container>
            <div className="max-w-6xl stagger-children">
              {/* Studio label */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-3">
                  <div className="h-px w-12 bg-white/60 shimmer"></div>
                  <span className="text-[9px] tracking-[0.35em] text-white/70 uppercase font-light">
                    Architecture × Interior × Urbanism
                  </span>
                </div>
              </div>

              {/* Main statement with gradient text */}
              <h1 className="mb-8">
                <span className="block text-6xl md:text-8xl lg:text-[10rem] text-white font-extralight tracking-[-0.02em] leading-[0.85] mb-4">
                  Designing
                </span>
                <span className="block text-6xl md:text-8xl lg:text-[10rem] text-white font-extralight tracking-[-0.02em] leading-[0.85]">
                  Tomorrow's
                </span>
                <span className="block text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[-0.02em] leading-[0.85] gradient-text neon-glow">
                  Environments
                </span>
              </h1>

              {/* Description */}
              <div className="max-w-2xl">
                <p className="text-white/80 text-base md:text-lg font-light leading-relaxed tracking-wide mb-8">
                  Design for a changing world. We make architecture, interiors, and urbanism that is innovative, social, sustainable, realistic, and remarkable.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/60 text-xs font-light">
                  <span className="tracking-[0.2em] uppercase">Est. 1995</span>
                  <span className="text-white/30">·</span>
                  <span className="tracking-[0.2em] uppercase">Dubai × Beirut</span>
                  <span className="text-white/30">·</span>
                  <span className="tracking-[0.2em] uppercase">{counters.years}+ Years</span>
                </div>
              </div>

              {/* CTA with hover lift */}
              <div className="mt-12">
                <Link 
                  href="/projects"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black hover:bg-white/90 transition-all duration-500 hover-lift"
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

        {/* Scroll indicator with pulse */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pulse-glow">
          <div className="flex flex-col items-center gap-3 text-white/50">
            <span className="text-[8px] tracking-[0.35em] uppercase font-light">Scroll</span>
            <div className="w-px h-16 bg-white/30 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counters with glass morphism */}
      <section className="relative bg-black py-24 border-t border-white/5">
        <div className="absolute inset-0 glass opacity-50"></div>
        <Container>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-12 text-center stagger-children">
            <div className="group cursor-default perspective-card">
              <div className="text-6xl md:text-7xl text-white font-extralight mb-4 group-hover:scale-110 transition-transform duration-700 gradient-text">
                {counters.projects}+
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Projects Delivered
              </div>
            </div>
            <div className="group cursor-default perspective-card">
              <div className="text-6xl md:text-7xl text-white font-extralight mb-4 group-hover:scale-110 transition-transform duration-700 gradient-text">
                {counters.years}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Years of Excellence
              </div>
            </div>
            <div className="group cursor-default perspective-card">
              <div className="text-6xl md:text-7xl text-white font-extralight mb-4 group-hover:scale-110 transition-transform duration-700 gradient-text">
                {counters.countries}+
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Countries Worldwide
              </div>
            </div>
            <div className="group cursor-default perspective-card">
              <div className="text-6xl md:text-7xl text-white font-extralight mb-4 group-hover:scale-110 transition-transform duration-700 gradient-text">
                2
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                International Offices
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Render ⇄ Reality Feature Section */}
      <section className="bg-black py-32 relative">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Header with fade in */}
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-white/20 shimmer"></div>
                <h2 className="text-5xl md:text-7xl text-white font-extralight tracking-tight">
                  Render <span className="text-white/30">⇄</span> Reality
                </h2>
                <div className="h-px w-16 bg-white/20 shimmer"></div>
              </div>
              <p className="text-white/50 text-sm tracking-wide max-w-2xl mx-auto">
                Drag the slider to compare our architectural visualizations with the completed buildings.
                Every detail, perfectly realized.
              </p>
            </div>

            {/* Interactive Comparison with scale in */}
            <div className="scale-in">
              <ComparisonSlider
                renderImage={featuredProjects[1]?.cover.render}
                realityImage={featuredProjects[1]?.cover.reality}
                title={featuredProjects[1]?.title}
                className="aspect-[16/9] rounded-sm"
              />
            </div>

            {/* Stats with stagger */}
            <div className="grid grid-cols-3 gap-8 mt-16 text-center stagger-children">
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl text-white font-extralight mb-2 group-hover:text-green-400 transition-colors duration-500">98%</div>
                <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Accuracy</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl text-white font-extralight mb-2 group-hover:text-blue-400 transition-colors duration-500">{allProjects.length}+</div>
                <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Projects</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl text-white font-extralight mb-2 group-hover:text-green-400 transition-colors duration-500">100%</div>
                <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Built</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Grid with hover lift effects */}
      <section className="bg-white py-24">
        <Container>
          <div className="mb-16 fade-in-up">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-black/20"></div>
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                Featured Projects
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-extralight tracking-tight text-black mb-6">
              Recent Work
            </h3>
            <p className="text-lg text-black/60 font-light max-w-3xl">
              From single-family homes to public buildings across the MENA region and Europe, we create spaces that transform lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProjects.slice(1).map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block hover-lift"
                style={{
                  animation: `fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100 perspective-card">
                  <img 
                    src={project.cover.reality}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Hover overlay with project info */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="text-white">
                      <div className="text-xs tracking-wider uppercase mb-2">{project.location}</div>
                      <div className="text-sm font-light">{project.year}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-light tracking-tight text-black group-hover:text-black/60 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs text-black/40 tracking-wider uppercase px-3 py-1 border border-black/10 group-hover:border-black/30 transition-colors duration-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16 fade-in-up">
            <Link 
              href="/projects"
              className="group inline-flex items-center gap-3 text-black/60 hover:text-black transition-colors duration-500 hover-lift"
            >
              <span className="text-sm tracking-wider uppercase font-light">View All Projects</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Studio Introduction with slide in effects */}
      <section className="bg-black py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 slide-in-left">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/20 shimmer"></div>
                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                  About MKDP
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl text-white font-extralight tracking-tight leading-tight gradient-text">
                30 Years of
                <br />
                Design Excellence
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6 slide-in-right">
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Founded in 1995 in Lebanon by Michel Keyrouz, MKDP Studio has grown into an international architecture and interior design practice with offices in Dubai and Beirut.
              </p>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Our multidisciplinary team operates at the intersection of architecture, urbanism, interior design, and landscape, creating holistic environments that seamlessly integrate form and function across the MENA region and Europe.
              </p>
              <div className="pt-8">
                <Link 
                  href="/about"
                  className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500 hover-lift"
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

      {/* Services with perspective cards */}
      <section className="bg-white py-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 fade-in-up">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-black/20"></div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                  What We Do
                </span>
                <div className="h-px w-12 bg-black/20"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tight text-black mb-6">
                Our Services
              </h2>
              <p className="text-lg text-black/60 font-light max-w-2xl mx-auto">
                We revolutionize every aspect of human life through innovative design solutions.
              </p>
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
                <div 
                  key={index} 
                  className="group perspective-card p-8 border border-black/5 hover:border-black/20 transition-all duration-700 hover-lift bg-white hover:shadow-2xl"
                  style={{
                    animation: `fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="mb-6 text-black/40 group-hover:text-black transition-colors duration-500 group-hover:scale-110 transform duration-700">
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

      {/* CTA Section with glass effect */}
      <section className="relative bg-black py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 glass opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8 fade-in-up">
              <div className="h-px w-16 bg-white/20 shimmer"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                Let's Collaborate
              </span>
              <div className="h-px w-16 bg-white/20 shimmer"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl text-white font-extralight tracking-tight mb-8 leading-tight scale-in gradient-text">
              Ready to Start
              <br />
              Your Project?
            </h2>
            
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed fade-in-up">
              Whether you're planning a new development or reimagining an existing space, we're here to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 fade-in-up">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-4 px-12 py-5 bg-white text-black hover:bg-white/90 transition-all duration-500 hover-lift pulse-glow"
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
                className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500 hover-lift"
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