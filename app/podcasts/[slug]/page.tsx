// app/podcasts/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import MarkdownContent from '@/components/MarkdownContent';
import { getPodcast, getMetafieldValue } from '@/lib/cosmic';

interface PodcastPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PodcastPageProps): Promise<Metadata> {
  const { slug } = await params;
  const podcast = await getPodcast(slug);
  if (!podcast) return {};
  const description = getMetafieldValue(podcast.metadata?.seo_description);
  return {
    title: `${podcast.title} — Sequoia Podcasts`,
    description: description || undefined,
  };
}

export default async function PodcastPage({ params }: PodcastPageProps) {
  const { slug } = await params;
  const podcast = await getPodcast(slug);

  if (!podcast) {
    notFound();
  }

  return (
    <article>
      <PageHeader
        label="Podcast"
        title={podcast.title}
        image={podcast.metadata?.featured_image}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <MarkdownContent content={podcast.metadata?.content} />
      </div>
    </article>
  );
}