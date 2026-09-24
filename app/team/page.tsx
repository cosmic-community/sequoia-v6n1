import type { Metadata } from 'next';
import PortraitCard from '@/components/PortraitCard';
import { getPeople } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Our Team — Sequoia',
  description:
    'Meet the Sequoia team working alongside founders to build legendary companies.',
};

export default async function TeamPage() {
  const people = await getPeople();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          Our Team
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          The people behind Sequoia.
        </h1>
      </header>

      {people.length === 0 ? (
        <p className="font-mono text-sm text-ink/50">No team members published yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {people.map((person) => (
            <PortraitCard
              key={person.id}
              href={`/team/${person.slug}`}
              title={person.title}
              image={person.metadata?.featured_image}
              label="Team"
            />
          ))}
        </div>
      )}
    </div>
  );
}