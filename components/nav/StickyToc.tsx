'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  title: string;
}

interface StickyTocProps {
  items: TocItem[];
}

export function StickyToc({ items }: StickyTocProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show TOC after scrolling 600px
      setIsVisible(window.scrollY > 600);

      // Update active section
      const headings = items.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentHeading = headings.find((heading) => {
        if (!heading.element) return false;
        const rect = heading.element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentHeading) {
        setActiveId(currentHeading.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className={cn(
        'fixed top-24 right-8 max-w-xs transition-opacity duration-300 hidden lg:block',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Table of contents"
    >
      <div className="bg-white border border-charcoal/10 rounded-sm p-4">
        <h2 className="text-sm font-semibold text-charcoal mb-3">On this page</h2>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'text-left w-full hover:text-accent transition-colors',
                  activeId === item.id
                    ? 'text-accent font-medium'
                    : 'text-charcoal/60'
                )}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 