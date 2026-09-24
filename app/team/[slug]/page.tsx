// app/team/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import MarkdownContent from '@/components/MarkdownContent';
import { getPerson, getMetafieldValue } from '@/lib/cosmic';

interface PersonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PersonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) return {};
  const description = getMetafieldValue(person.metadata?.seo_description);
  return {
    title: `${person.title} — Sequoia Team`,
    description: description || undefined,
  };
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = await params;
  const person = await getPerson(slug);

  if (!person) {
    notFound();
  }

  return (
    <article>
      <PageHeader
        label="Team"
        title={person.title}
        image={person.metadata?.featured_image}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <MarkdownContent content={person.metadata?.content} />
      </div>
    </article>
  );
}