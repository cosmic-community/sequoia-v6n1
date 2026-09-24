import Link from 'next/link';
import type { CosmicImage } from '@/types';

interface PortraitCardProps {
  href: string;
  title: string;
  image?: CosmicImage;
  label: string;
}

export default function PortraitCard({ href, title, image, label }: PortraitCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative w-full aspect-square overflow-hidden bg-ink/5 border-t border-ink/15">
        {image && (
          <img
            src={`${image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="pt-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-1">
          {label}
        </p>
        <h3 className="font-serif text-lg text-ink group-hover:underline underline-offset-4">
          {title}
        </h3>
      </div>
    </Link>
  );
}