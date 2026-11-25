import { SITE } from '@/data/site';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/projects', '/certificates', '/payment', '/login'] }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
