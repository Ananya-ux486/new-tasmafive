import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { BLOGS } from '@/data/blogs';
import blogBanner from '../../../assets/blog1.png';

export const metadata = { title: 'Blogs', description: 'Practical articles on websites, digital marketing, CRM, cloud and government IT from TasmaFive Solutions.' };

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Blogs() {
  const [first, ...rest] = BLOGS;
  return (
    <>
      <PageHero title="Blogs" sub="Practical notes on websites, digital marketing, CRM, cloud and government IT." crumbs={[['Blogs']]} bgImage={blogBanner} />
      <section className="section">
        <div className="container">
          <Link href={`/blogs/${first.slug}`} className="blog-feature">
            <span className="blog-cat">{first.category}</span>
            <h2>{first.title}</h2>
            <p>{first.excerpt}</p>
            <small>{fmt(first.date)} · {first.read}</small>
          </Link>
          <div className="blog-grid">
            {rest.map((b) => (
              <Link href={`/blogs/${b.slug}`} className="blog-card" key={b.slug}>
                <span className="blog-cat">{b.category}</span>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <small>{fmt(b.date)} · {b.read}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
