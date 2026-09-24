import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/founders', label: 'Founders' },
  { href: '/companies', label: 'Companies' },
  { href: '/team', label: 'Team' },
  { href: '/stories', label: 'Stories' },
  { href: '/podcasts', label: 'Podcasts' },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-sans font-extrabold text-lg tracking-tight text-ink">SEQUOIA</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/40">
            We help the daring build legendary companies.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
            © {new Date().getFullYear()} Sequoia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}