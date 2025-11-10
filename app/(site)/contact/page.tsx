'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-black/10">
      <Container>
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-black/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-black/40 uppercase font-light">
                Get in Touch
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-black font-extralight tracking-tight mb-12 leading-[0.9]">
              Let's Create
              <br />
              Together
            </h1>
            
            <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed max-w-3xl">
              If you're interested in exploring our work or considering potential collaborations, please don't hesitate to contact us. We are always eager to embrace new challenges and create together.
            </p>
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <Container>
          <div className="mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-black/20"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-black">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Michel P. Keyrouz */}
            <div className="group">
              <div className="bg-white p-8 md:p-12 border border-black/10 hover:border-black/20 transition-colors duration-500">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-black flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-white tracking-tighter">M</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extralight tracking-tight text-black mb-2">
                    Michel P. Keyrouz
                  </h3>
                  <p className="text-sm tracking-wider text-black/50 uppercase mb-6">
                    Founder / Principal Designer
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                      Email
                    </p>
                    <a 
                      href="mailto:michel@mkdp.com" 
                      className="text-base text-black hover:text-black/60 transition-colors duration-500 font-light"
                    >
                      michel@mkdp.com
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                        UAE
                      </p>
                      <a 
                        href="tel:+971524452386" 
                        className="text-base text-black hover:text-black/60 transition-colors duration-500 font-light"
                      >
                        +971 52 445 2386
                      </a>
                    </div>
                <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                        Lebanon
                      </p>
                      <a 
                        href="tel:+9613212127" 
                        className="text-base text-black hover:text-black/60 transition-colors duration-500 font-light"
                      >
                        +961 3 212 127
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Michael M. Jibrine */}
            <div className="group">
              <div className="bg-white p-8 md:p-12 border border-black/10 hover:border-black/20 transition-colors duration-500">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-black flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-white tracking-tighter">M</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extralight tracking-tight text-black mb-2">
                    Michael M. Jibrine
                  </h3>
                  <p className="text-sm tracking-wider text-black/50 uppercase mb-6">
                    Partner / Principal Architect
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                      Email
                    </p>
                    <a 
                      href="mailto:michael@mkdp.com" 
                      className="text-base text-black hover:text-black/60 transition-colors duration-500 font-light"
                    >
                      michael@mkdp.com
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                        UAE
                      </p>
                      <a 
                        href="tel:+971503796708" 
                        className="text-base text-black hover:text-black/60 transition-colors duration-500 font-light"
                      >
                        +971 50 379 6708
                      </a>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                        Lebanon
                      </p>
                      <a 
                        href="tel:+96170551606" 
                        className="text-base text-black hover:text-black/60 transition-colors duration-500 font-light"
                      >
                        +961 70 551 606
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Studio Information */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-black/20"></div>
                  <h2 className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                    Studio
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-2">Website</p>
                    <a 
                      href="https://www.mkdp.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-black hover:text-black/60 transition-colors duration-500 tracking-wide"
                    >
                      www.mkdp.com
                    </a>
                  </div>
                <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-2">General Inquiries</p>
                    <a
                      href="mailto:info@mkdp.com"
                      className="text-lg text-black hover:text-black/60 transition-colors duration-500 tracking-wide"
                    >
                      info@mkdp.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-black/20"></div>
                  <h2 className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                    Offices
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm tracking-wider text-black/50 uppercase mb-2">Dubai, UAE</p>
                    <p className="text-base text-black/70 font-light">
                      Primary Office — Established 2019
                    </p>
                  </div>
                  <div>
                    <p className="text-sm tracking-wider text-black/50 uppercase mb-2">Beirut, Lebanon</p>
                    <p className="text-base text-black/70 font-light">
                      Founded 1995
                    </p>
                  </div>
                </div>
                </div>

              {/* Social */}
                <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-black/20"></div>
                  <h2 className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
                    Follow Us
                  </h2>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="text-sm tracking-wider text-black/60 hover:text-black transition-colors duration-500">
                    Instagram
                  </a>
                  <a href="#" className="text-sm tracking-wider text-black/60 hover:text-black transition-colors duration-500">
                    LinkedIn
                  </a>
                  <a href="#" className="text-sm tracking-wider text-black/60 hover:text-black transition-colors duration-500">
                    Behance
                  </a>
                </div>
              </div>
          </div>

          {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-neutral-50 p-8 md:p-12 border border-black/10">
                <h2 className="text-3xl font-extralight tracking-tight text-black mb-8">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
          <div>
                    <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                      Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/20 focus:border-black transition-colors duration-500 text-black placeholder:text-black/30 focus:outline-none"
                      placeholder="Your name"
                  />
                </div>

                <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                      Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/20 focus:border-black transition-colors duration-500 text-black placeholder:text-black/30 focus:outline-none"
                      placeholder="your@email.com"
                  />
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                      Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/20 focus:border-black transition-colors duration-500 text-black placeholder:text-black/30 resize-none focus:outline-none"
                      placeholder="Tell us about your project..."
                  />
                </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                  type="submit"
                  disabled={status === 'loading'}
                      className="group inline-flex items-center gap-4 px-10 py-4 bg-black text-white hover:bg-black/90 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                      <span className="text-xs tracking-[0.25em] uppercase font-light">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                      </span>
                      {status === 'idle' && (
                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </button>

                {status === 'success' && (
                      <div className="flex items-center gap-2 text-green-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-light">Message sent!</span>
                      </div>
                )}

                {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-sm font-light">Please try again</span>
                      </div>
                    )}
                  </div>
              </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-neutral-100 border-t border-black/10">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/30 font-light">
              Dubai × Beirut
            </p>
          </div>
        </div>
    </section>
    </div>
  );
} 