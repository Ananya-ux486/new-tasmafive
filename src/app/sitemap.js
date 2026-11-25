import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { BLOGS } from '@/data/blogs';

export default function sitemap() {
  const pages = ['', '/about', '/services', '/government', '/catalogue', '/blogs', '/contact'];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() })),
    ...SERVICES.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, lastModified: new Date() })),
    ...BLOGS.map((b) => ({ url: `${SITE.url}/blogs/${b.slug}`, lastModified: new Date(b.date) })),
  ];
}
