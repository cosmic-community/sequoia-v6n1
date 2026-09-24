import Link from 'next/link';
import type { FeaturedItem } from '@/types';

const LABELS: Record<string, string> = {
  podcast: 'Podcast',
  article: 'Perspective',
  founder: 'Founder',
  company: 'Company',
  people: 'Team',
};

export default function ContentCard({ item }: { item: FeaturedItem }) {
  const isPodcast = item.kind === 'podcast';
  const label = LABELS[item.kind] || item.kind;
  const imageUrl = item.image?.imgix_url;

  return (
    <Link href={item.href} className="group block border-t border-ink/15">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink/5">
        {imageUrl && (
          <img
            src={`${imageUrl}?w=1200&h=900&fit=crop&auto=format,compress`}
            alt={item.title}
            width={600}
            height={450}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-white drop-shadow-sm">
            {label}
          </span>
        </div>
        {isPodcast && (
          <span className="absolute top-4 right-4 font-mono text-[11px] uppercase tracking-widest text-white drop-shadow-sm">
            Listen
          </span>
        )}
        {isPodcast && (
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-white leading-snug">
              {item.title}
            </h3>
          </div>
        )}
      </div>
      {!isPodcast && (
        <div className="pt-5">
          <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug group-hover:underline underline-offset-4">
            {item.title}
          </h3>
          {item.excerpt && (
            <p className="mt-2 text-sm text-ink/60 line-clamp-2">{item.excerpt}</p>
          )}
          {item.date && (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-ink/40">
              {item.date}
            </p>
          )}
        </div>
      )}
    </Link>
  );
}