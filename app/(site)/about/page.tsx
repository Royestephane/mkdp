import React from 'react';
import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | MKDP Studio',
  description: 'International architecture and interior design studio founded in 1995 by Michel Keyrouz.',
};

export default function AboutPage() {
  return (
    <div className="bg-black pt-24">
      {/* Hero */}
      <section className="py-32 border-b border-white/5">
        <Container>
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                About Us
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl text-white font-extralight tracking-tight mb-12 leading-[0.95]">
              MKDP Studio
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
              International architecture and interior design studio that traces its origins back to 1995.
            </p>
          </div>
        </Container>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-6 font-light sticky top-32">
                Our Story
              </h2>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
                  Founded in Lebanon, Expanded to Dubai
                </h3>
                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>
                    MKDP Studio traces its origins back to <strong>1995</strong>, when it was founded by <strong>Michel Keyrouz</strong> in Lebanon under the name <strong>MK Design</strong>.
                  </p>
                  <p>
                    In <strong>2019</strong>, the studio expanded its operations to Dubai, rebranding itself as <strong>MKDP Studio</strong> to reflect its broader scope and international ambitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6 font-light sticky top-32">
                Our Approach
              </h2>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6 text-white">
                  Multidisciplinary Design Excellence
                </h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    At MKDP, our multidisciplinary team of architects and designers is dedicated to pushing the boundaries of contemporary design. We operate at the intersection of:
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-white/40 mt-1">—</span>
                      <span>Architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white/40 mt-1">—</span>
                      <span>Urbanism</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white/40 mt-1">—</span>
                      <span>Interior Design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white/40 mt-1">—</span>
                      <span>Landscape Design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white/40 mt-1">—</span>
                      <span>Development</span>
                    </li>
                  </ul>
                  <p>
                    We create holistic environments that seamlessly integrate form and function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-6 font-light sticky top-32">
                Global Portfolio
              </h2>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
                  MENA Region & Europe
                </h3>
                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>
                    Our portfolio spans a diverse array of projects across the <strong>MENA region</strong> and <strong>Europe</strong>, where we engage with the unique cultural and environmental contexts of each location.
                  </p>
                  <p>
                    We are driven by a commitment to designing spaces that respond to the dynamic and ever-evolving needs of modern life. Our work is deeply informed by the principles of:
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-black/40 mt-1">—</span>
                      <span>Multicultural exchange</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black/40 mt-1">—</span>
                      <span>Global economic trends</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black/40 mt-1">—</span>
                      <span>Accelerating pace of communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black/40 mt-1">—</span>
                      <span>Technological advancement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/20"></div>
                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                  Founder
                </span>
              </div>
              <h3 className="text-5xl md:text-6xl font-extralight tracking-tight mb-6 text-white">
                Michel Keyrouz
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Founded MK Design in Lebanon in 1995, expanding to Dubai as MKDP Studio in 2019. Leading the studio's vision of pushing the boundaries of contemporary design across multiple disciplines.
              </p>
              <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                Est. 1995
              </div>
            </div>
            
            <div className="aspect-square bg-white/5 flex items-center justify-center">
              <div className="w-32 h-32 bg-white flex items-center justify-center">
                <span className="text-6xl font-bold text-black">M</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white border-t border-black/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
              Let's Create Together
            </h2>
            <p className="text-black/60 mb-12 max-w-2xl mx-auto">
              We're always interested in new projects and collaborations. Get in touch to discuss how we can bring your vision to life.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-black/90 transition-all duration-500 group"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase font-light">Contact Us</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
} 