'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/founders', label: 'Our Founders' },
  { href: '/companies', label: 'Our Companies' },
  { href: '/team', label: 'Our Team' },
  { href: '/stories', label: 'Stories' },
  { href: '/podcasts', label: 'Podcasts' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex items-end gap-[3px] h-6" aria-hidden="true">
            <span className="w-1 h-3 bg-ink" />
            <span className="w-1 h-5 bg-accent" />
            <span className="w-1 h-4 bg-ink" />
            <span className="w-1 h-6 bg-ink" />
          </span>
          <span className="font-sans font-extrabold text-xl tracking-tight text-ink">
            SEQUOIA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-ink/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button aria-label="Search" className="text-ink/70 hover:text-accent transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </nav>

        <button
          className="lg:hidden text-ink"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden border-t border-ink/10 px-6 py-6 flex flex-col gap-5 bg-cream">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-ink/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="border-b border-ink/10" />
    </header>
  );
}