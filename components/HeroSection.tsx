export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
      <h1 className="font-serif text-4xl md:text-6xl leading-tight text-ink">
        We{' '}
        <span className="relative inline-block px-1">
          help the{' '}
          <span className="relative inline-block px-1">
            daring
            <svg
              className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none"
              viewBox="0 0 160 90"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M20 45C20 20 45 8 80 8C115 8 145 18 148 45C151 72 118 82 80 82C42 82 20 70 20 45Z"
                stroke="#0F9D6B"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <svg
            className="absolute -bottom-2 left-0 w-full h-4 pointer-events-none"
            viewBox="0 0 300 20"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 12C50 4 90 16 140 8C190 2 240 16 298 6"
              stroke="#0F9D6B"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>{' '}
        build legendary companies.
      </h1>
      <p className="mt-8 font-mono text-xs md:text-sm uppercase tracking-widest text-ink/50">
        Perspectives, portfolio companies, founders &amp; people from Sequoia
      </p>
    </section>
  );
}