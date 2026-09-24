import { createBucketClient } from '@cosmicjs/sdk';
import type {
  Founder,
  Person,
  Article,
  Company,
  Podcast,
  FeaturedItem,
  FeaturedKind,
} from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging',
});

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getSortValue(item: {
  created_at: string;
  metadata?: { published_at?: string };
}): number {
  const raw = item.metadata?.published_at || item.created_at;
  const time = raw ? Date.parse(raw) : NaN;
  return Number.isNaN(time) ? 0 : time;
}

const PROPS = ['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'];

export async function getFounders(): Promise<Founder[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'founder' })
      .props(PROPS)
      .depth(1);
    return (response.objects as Founder[]).sort(
      (a, b) => getSortValue(b) - getSortValue(a)
    );
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch founders');
  }
}

export async function getFounder(slug: string): Promise<Founder | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'founder', slug })
      .props(PROPS)
      .depth(1);
    return response.object as Founder;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch founder');
  }
}

export async function getPeople(): Promise<Person[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'people' })
      .props(PROPS)
      .depth(1);
    return (response.objects as Person[]).sort(
      (a, b) => getSortValue(b) - getSortValue(a)
    );
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch people');
  }
}

export async function getPerson(slug: string): Promise<Person | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'people', slug })
      .props(PROPS)
      .depth(1);
    return response.object as Person;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch person');
  }
}

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'article' })
      .props(PROPS)
      .depth(1);
    return (response.objects as Article[]).sort(
      (a, b) => getSortValue(b) - getSortValue(a)
    );
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch articles');
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'article', slug })
      .props(PROPS)
      .depth(1);
    return response.object as Article;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch article');
  }
}

export async function getCompanies(): Promise<Company[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'company' })
      .props(PROPS)
      .depth(1);
    return (response.objects as Company[]).sort(
      (a, b) => getSortValue(b) - getSortValue(a)
    );
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch companies');
  }
}

export async function getCompany(slug: string): Promise<Company | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'company', slug })
      .props(PROPS)
      .depth(1);
    return response.object as Company;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch company');
  }
}

export async function getPodcasts(): Promise<Podcast[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'podcast' })
      .props(PROPS)
      .depth(1);
    return (response.objects as Podcast[]).sort(
      (a, b) => getSortValue(b) - getSortValue(a)
    );
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch podcasts');
  }
}

export async function getPodcast(slug: string): Promise<Podcast | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'podcast', slug })
      .props(PROPS)
      .depth(1);
    return response.object as Podcast;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch podcast');
  }
}

const BASE_PATH_MAP: Record<FeaturedKind, string> = {
  founder: '/founders',
  people: '/team',
  article: '/stories',
  company: '/companies',
  podcast: '/podcasts',
};

export function toFeaturedItem(
  item: Founder | Person | Article | Company | Podcast,
  kind: FeaturedKind
): FeaturedItem {
  const dateValue =
    kind === 'article' ? (item as Article).metadata?.published_at : undefined;

  return {
    kind,
    id: item.id,
    slug: item.slug,
    title: item.title,
    href: `${BASE_PATH_MAP[kind]}/${item.slug}`,
    image: item.metadata?.featured_image,
    excerpt: getMetafieldValue(item.metadata?.seo_description) || undefined,
    date: dateValue,
  };
}

function interleave(arrays: FeaturedItem[][]): FeaturedItem[] {
  const result: FeaturedItem[] = [];
  const maxLen = Math.max(...arrays.map((arr) => arr.length), 0);
  for (let i = 0; i < maxLen; i++) {
    for (const arr of arrays) {
      const item = arr[i];
      if (item) result.push(item);
    }
  }
  return result;
}

export async function getHomepageFeatured(): Promise<FeaturedItem[]> {
  const [podcasts, articles, founders, companies] = await Promise.all([
    getPodcasts(),
    getArticles(),
    getFounders(),
    getCompanies(),
  ]);

  const articleItems = articles.slice(0, 3).map((item) => toFeaturedItem(item, 'article'));
  const podcastItems = podcasts.slice(0, 2).map((item) => toFeaturedItem(item, 'podcast'));
  const companyItems = companies.slice(0, 3).map((item) => toFeaturedItem(item, 'company'));
  const founderItems = founders.slice(0, 2).map((item) => toFeaturedItem(item, 'founder'));

  return interleave([articleItems, podcastItems, companyItems, founderItems]).slice(0, 8);
}