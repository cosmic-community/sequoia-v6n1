// app/founders/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import MarkdownContent from '@/components/MarkdownContent';
import { getFounder, getMetafieldValue } from '@/lib/cosmic';

interface FounderPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: FounderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const founder = await getFounder(slug);
  if (!founder) return {};
  const description = getMetafieldValue(founder.metadata?.seo_description);
  return {
    title: `${founder.title} — Sequoia Founders`,
    description: description || undefined,
  };
}

export default async function FounderPage({ params }: FounderPageProps) {
  const { slug } = await params;
  const founder = await getFounder(slug);

  if (!founder) {
    notFound();
  }

  return (
    <article>
      <PageHeader
        label="Founder"
        title={founder.title}
        image={founder.metadata?.featured_image}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <MarkdownContent content={founder.metadata?.content} />
      </div>
    </article>
  );
}