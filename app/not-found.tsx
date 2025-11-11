import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-12">
            <span className="text-[12rem] md:text-[16rem] text-white font-extralight tracking-tighter leading-none opacity-20">
              404
            </span>
          </div>

          {/* Message */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-light">
                Page Not Found
              </span>
              <div className="h-px w-12 bg-white/20"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl text-white font-extralight tracking-tight mb-6">
              This page doesn&apos;t exist
            </h1>
            
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md mx-auto">
              The page you&apos;re looking for has been moved, deleted, or never existed.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black hover:bg-white/90 transition-all duration-500"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                Back Home
              </span>
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase font-light">
                View Projects
              </span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
} 