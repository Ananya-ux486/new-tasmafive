import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { SERVICES, getService } from '@/data/services';
import webDevelopmentBanner from '../../../../assets/web_development1.png';
import digitalMarketingBanner from '../../../../assets/digital1.png';
import crmBanner from '../../../../assets/crm1.png';
import cloudBanner from '../../../../assets/cloud1.png';

const SERVICE_HERO_IMAGES = {
  'web-development': webDevelopmentBanner,
  'digital-marketing': digitalMarketingBanner,
  crm: crmBanner,
  'cloud-solutions': cloudBanner,
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  return s ? { title: `${s.title} Services`, description: s.intro } : {};
}

export default function ServicePage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const isWeb = s.slug === 'web-development';
  const heroImage = SERVICE_HERO_IMAGES[s.slug];

  return (
    <>
      <PageHero title={s.title} sub={s.intro} crumbs={[['Services', '/services'], [s.title]]} bgImage={heroImage} lightImage={Boolean(heroImage)}>
        <div className="subnav">
          {SERVICES.map((x) => (<Link key={x.slug} href={`/services/${x.slug}`} className={x.slug === s.slug ? 'on' : ''}>{x.title}</Link>))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container offer-list">
          {s.items.map((it, i) => (
            <article className="offer" key={it.id} id={it.id}>
              <div className="offer-main">
                <span className="badge">{it.tag}</span>
                <h2>{it.title}</h2>
                <p>{it.text}</p>
                <ul className="ticks cols">{it.features.map((f) => <li key={f}><Check size={16} />{f}</li>)}</ul>
                <div className="svc-actions">
                  {isWeb && <Link href={`/contact?reason=${encodeURIComponent(it.title)}`} className="btn btn-primary">Enquire Now</Link>}
                  {it.auditCta && <Link href="/contact?audit=1" className="btn btn-primary">Get a free audit report</Link>}
                  <Link href={`/contact?reason=${encodeURIComponent(s.title)}`} className="btn btn-ghost">Ask a question</Link>
                </div>
              </div>
              <aside className="price-box">
                {it.price.india ? (
                  <>
                    <p>{it.price.note}</p>
                    <p className="fine">Final scope confirmed after a short brief. Taxes extra where applicable.</p>
                    <Link href={`/contact?reason=${encodeURIComponent(it.title)}`} className="btn btn-primary btn-sm">Enquire Now</Link>
                  </>
                ) : (
                  <>
                    <small>Flexible pricing</small>
                    <strong className="price-text">Pricing as per requirements / budget</strong>
                    <p>Every business has different goals and scale. We tailor the scope and share a clear breakdown before any work begins.</p>
                    <p className="fine">Monthly or project-based billing. Custom proposal within 24 hours.</p>
                  </>
                )}
              </aside>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
