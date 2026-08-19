import type { MetadataRoute } from 'next';
import { getDictionary, locales } from '@/lib/content';

const BASE = 'https://luminovapartners.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Slugs are shared across locales.
  const slugs = getDictionary('en').services4.map((service) => service.slug);
  return locales.flatMap((locale) => [
    { url: `${BASE}/${locale}/`, priority: 1 },
    ...slugs.map((slug) => ({ url: `${BASE}/${locale}/services/${slug}/`, priority: 0.7 })),
  ]);
}
