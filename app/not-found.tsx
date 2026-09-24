import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">404</p>
      <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
        This page went looking for daring founders and got lost.
      </h1>
      <Link
        href="/"
        className="font-mono text-sm uppercase tracking-widest text-ink underline underline-offset-4 hover:text-accent"
      >
        Back to home
      </Link>
    </div>
  );
}