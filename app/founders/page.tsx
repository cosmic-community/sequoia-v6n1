import type { Metadata } from 'next';
import PortraitCard from '@/components/PortraitCard';
import { getFounders } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Our Founders — Sequoia',
  description:
    'Meet the daring founders Sequoia has partnered with to build legendary companies.',
};

export default async function FoundersPage() {
  const founders = await getFounders();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          Our Founders
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          The daring people we back.
        </h1>
      </header>

      {founders.length === 0 ? (
        <p className="font-mono text-sm text-ink/50">No founders published yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {founders.map((founder) => (
            <PortraitCard
              key={founder.id}
              href={`/founders/${founder.slug}`}
              title={founder.title}
              image={founder.metadata?.featured_image}
              label="Founder"
            />
          ))}
        </div>
      )}
    </div>
  );
}