'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { Container } from '@/components/ui/Container';
import { ScrollProgress } from '@/components/progress/ScrollProgress';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/parallax';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <ScrollProgress />

      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <Container className="relative">
          <nav className="flex items-center justify-between py-8">
            {/* Refined Logo - Text Only */}
            <Link
              href="/"
              className="group flex flex-col gap-1 transition-all duration-700"
            >
              <span className="text-2xl md:text-3xl font-extralight tracking-[0.2em] text-white uppercase leading-none group-hover:tracking-[0.25em] transition-all duration-700">
                MKDP
              </span>
              <span className="text-[8px] font-light tracking-[0.3em] text-white/50 uppercase leading-none">
                Studio
              </span>
            </Link>

            {/* Ultra minimal navigation */}
            <ul className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-[11px] tracking-[0.2em] font-light uppercase transition-opacity duration-500',
                      pathname === item.href ? 'text-white opacity-100' : 'text-white opacity-40 hover:opacity-100'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Minimal menu indicator */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <div className={cn("w-5 h-px bg-white transition-all duration-300", mobileMenuOpen && "rotate-45 translate-y-[5px]")}></div>
                <div className={cn("w-5 h-px bg-white transition-all duration-300", mobileMenuOpen && "-rotate-45 -translate-y-[3px]")}></div>
              </div>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-500",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-2xl tracking-[0.2em] font-light uppercase transition-opacity duration-500',
                  pathname === item.href ? 'text-white opacity-100' : 'text-white opacity-40'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <main>{children}</main>

      <footer className="bg-black text-white py-24 border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-6xl md:text-7xl font-extralight tracking-[0.15em] uppercase leading-none text-white">MKDP</h3>
                <span className="text-sm font-light tracking-[0.3em] text-white/50 uppercase">Studio</span>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed max-w-md tracking-wide">
                International architecture and interior design studio operating at the intersection of architecture, urbanism, interior design, and landscape. Founded 1995.
              </p>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-light">Contact</h4>
              <div className="space-y-3 text-sm font-light">
                <p className="text-white/60 tracking-wide">Dubai, UAE</p>
                <p className="text-white/60 tracking-wide">Beirut, Lebanon</p>
                <a href="mailto:info@mkdpstudio.com" className="block text-white/60 hover:text-white transition-all duration-500 tracking-wide">info@mkdpstudio.com</a>
              </div>
            </div>

            {/* Social */}
            <div className="md:col-span-4">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-light">Connect</h4>
              <div className="space-y-3 text-sm font-light">
                <a href="#" className="block text-white/60 hover:text-white transition-all duration-500 tracking-wide">Instagram</a>
                <a href="#" className="block text-white/60 hover:text-white transition-all duration-500 tracking-wide">LinkedIn</a>
                <a href="#" className="block text-white/60 hover:text-white transition-all duration-500 tracking-wide">Behance</a>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-light">
              &copy; {new Date().getFullYear()} MKDP Studio
            </p>
            <div className="flex items-center gap-8 text-[10px] text-white/30 tracking-[0.2em] uppercase font-light">
              <span>Beirut · Dubai</span>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
} 