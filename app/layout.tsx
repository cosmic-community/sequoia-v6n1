import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CosmicBadge from '@/components/CosmicBadge';

export const metadata: Metadata = {
  title: 'Sequoia — We help the daring build legendary companies.',
  description:
    'Sequoia partners with the boldest founders to build legendary companies. Explore our portfolio, people, perspectives and podcasts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌲</text></svg>"
        />
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://staging.cosmicinsights.dev/script.js" data-project="6ab54541ebf2e3b18dbe6337"></script>
      </head>
      <body className="bg-cream text-ink font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}