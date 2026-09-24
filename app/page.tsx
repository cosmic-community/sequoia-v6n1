import HeroSection from '@/components/HeroSection';
import FeaturedGrid from '@/components/FeaturedGrid';
import { getHomepageFeatured } from '@/lib/cosmic';

export default async function HomePage() {
  const items = await getHomepageFeatured();

  return (
    <>
      <HeroSection />
      <FeaturedGrid items={items} />
    </>
  );
}