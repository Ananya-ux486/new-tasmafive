import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { BLOGS, getBlog } from '@/data/blogs';

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}
export function generateMetadata({ params }) {
  const b = getBlog(params.slug);
  return b ? { title: b.title, description: b.excerpt } : {};
}

export default function BlogPost({ params }) {
  const b = getBlog(params.slug);
  if (!b) notFound();
  const date = new Date(b.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <>
      <article className="post">
        <div className="container narrow">
          <Link href="/blogs" className="back"><ArrowLeft size={16} /> All articles</Link>
          <span className="blog-cat">{b.category}</span>
          <h1>{b.title}</h1>
          <p className="post-meta">{date} · {b.read} · TasmaFive Solutions</p>
          <div className="post-body">
            {b.body.map(([type, text], i) => (type === 'h' ? <h2 key={i}>{text}</h2> : <p key={i}>{text}</p>))}
          </div>
        </div>
      </article>
    </>
  );
}
