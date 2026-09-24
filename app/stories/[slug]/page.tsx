// app/stories/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import MarkdownContent from '@/components/MarkdownContent';
import { getArticle, getMetafieldValue, formatDate } from '@/lib/cosmic';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  const seoTitle = getMetafieldValue(article.metadata?.seo_title) || article.title;
  const seoDescription = getMetafieldValue(article.metadata?.seo_description);
  return {
    title: `${seoTitle} — Sequoia Stories`,
    description: seoDescription || undefined,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = formatDate(article.metadata?.published_at);

  return (
    <article>
      <PageHeader
        label="Perspective"
        title={article.title}
        date={publishedDate}
        image={article.metadata?.featured_image}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <MarkdownContent content={article.metadata?.content} />
      </div>
    </article>
  );
}