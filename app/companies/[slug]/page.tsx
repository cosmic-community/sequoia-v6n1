// app/companies/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import MarkdownContent from '@/components/MarkdownContent';
import { getCompany, getMetafieldValue } from '@/lib/cosmic';

interface CompanyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = await getCompany(slug);
  if (!company) return {};
  const description = getMetafieldValue(company.metadata?.seo_description);
  return {
    title: `${company.title} — Sequoia Companies`,
    description: description || undefined,
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = await getCompany(slug);

  if (!company) {
    notFound();
  }

  return (
    <article>
      <PageHeader
        label="Company"
        title={company.title}
        image={company.metadata?.featured_image}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <MarkdownContent content={company.metadata?.content} />
      </div>
    </article>
  );
}