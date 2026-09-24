import type { CosmicImage } from '@/types';

interface PageHeaderProps {
  label: string;
  title: string;
  date?: string;
  image?: CosmicImage;
}

export default function PageHeader({ label, title, date, image }: PageHeaderProps) {
  return (
    <header className="border-b border-ink/10">
      {image && (
        <div className="relative w-full h-[45vh] min-h-[280px] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
            {label}
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-ink">{title}</h1>
        {date && (
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/50">
            {date}
          </p>
        )}
      </div>
    </header>
  );
}