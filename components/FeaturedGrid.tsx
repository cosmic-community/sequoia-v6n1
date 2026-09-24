import ContentCard from './ContentCard';
import type { FeaturedItem } from '@/types';

export default function FeaturedGrid({ items }: { items: FeaturedItem[] }) {
  if (!items || items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-ink/40">
          No content yet
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
      {items.map((item) => (
        <ContentCard key={`${item.kind}-${item.id}`} item={item} />
      ))}
    </div>
  );
}