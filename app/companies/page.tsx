import type { Metadata } from 'next';
import ContentCard from '@/components/ContentCard';
import { getCompanies, toFeaturedItem } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Our Companies — Sequoia',
  description:
    'Explore the portfolio of legendary companies Sequoia has helped build.',
};

export default async function CompaniesPage() {
  const companies = await getCompanies();
  const items = companies.map((company) => toFeaturedItem(company, 'company'));

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          Our Companies
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          A portfolio of the daring.
        </h1>
      </header>

      {items.length === 0 ? (
        <p className="font-mono text-sm text-ink/50">No companies published yet.</p>
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