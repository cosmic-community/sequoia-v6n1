export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface FounderMetadata {
  seo_description?: string;
  featured_image?: CosmicImage;
  content?: string;
}

export interface Founder extends CosmicObject {
  type: 'founder';
  metadata: FounderMetadata;
}

export interface PersonMetadata {
  seo_description?: string;
  featured_image?: CosmicImage;
  content?: string;
}

export interface Person extends CosmicObject {
  type: 'people';
  metadata: PersonMetadata;
}

export interface ArticleMetadata {
  seo_description?: string;
  seo_title?: string;
  featured_image?: CosmicImage;
  published_at?: string;
  content?: string;
}

export interface Article extends CosmicObject {
  type: 'article';
  metadata: ArticleMetadata;
}

export interface CompanyMetadata {
  seo_description?: string;
  featured_image?: CosmicImage;
  content?: string;
}

export interface Company extends CosmicObject {
  type: 'company';
  metadata: CompanyMetadata;
}

export interface PodcastMetadata {
  seo_description?: string;
  featured_image?: CosmicImage;
  content?: string;
}

export interface Podcast extends CosmicObject {
  type: 'podcast';
  metadata: PodcastMetadata;
}

export type FeaturedKind = 'founder' | 'people' | 'article' | 'company' | 'podcast';

export interface FeaturedItem {
  kind: FeaturedKind;
  id: string;
  slug: string;
  title: string;
  href: string;
  image?: CosmicImage;
  excerpt?: string;
  date?: string;
}