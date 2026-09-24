import type { Metadata } from 'next';
import ContentCard from '@/components/ContentCard';
import { getPodcasts, toFeaturedItem } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Podcasts — Sequoia',
  description: 'Listen to conversations with founders and operators from the Sequoia podcast.',
};

export default async function PodcastsPage() {
  const podcasts = await getPodcasts();
  const items = podcasts.map((podcast) => toFeaturedItem(podcast, 'podcast'));

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          Podcasts
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          Conversations worth hearing.
        </h1>
      </header>

      {items.length === 0 ? (
        <p className="font-mono text-sm text-ink/50">No podcasts published yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}