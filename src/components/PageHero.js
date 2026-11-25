import Link from 'next/link';
import Image from 'next/image';

export default function PageHero({ title, sub, crumbs = [], children, bgImage, eyebrow, lightImage = false }) {
  return (
    <section className={`page-hero${bgImage ? ' page-hero-img' : ''}${bgImage && lightImage ? ' page-hero-light' : ''}`}>
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            className="page-hero-bg"
            sizes="100vw"
            priority
            aria-hidden="true"
          />
          <div className="page-hero-overlay" aria-hidden="true" />
        </>
      )}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map(([l, h]) => (<span key={l}> / {h ? <Link href={h}>{l}</Link> : l}</span>))}
        </nav>
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {sub && <p className="page-sub">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
