import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { SERVICE_ICONS } from '@/components/Icons';
import { SERVICES } from '@/data/services';
import serviceBanner from '../../../assets/service1.png';

export const metadata = { title: 'Services', description: 'Web development, digital marketing, CRM and cloud solutions: comprehensive IT services for your business.' };

export default function Services() {
  return (
    <>
      <PageHero title="Our services" sub="We deliver innovative and scalable IT solutions designed to help businesses grow, streamline operations and achieve digital success." crumbs={[['Services']]} bgImage={serviceBanner} />
      <section className="section">
        <div className="container svc-list">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <article className="svc" key={s.slug}>
                <div className="svc-head">
                  <span className="row-ico"><Icon size={26} /></span>
                  <h2>{s.title}</h2>
                  <span className="badge">{s.badge}</span>
                </div>
                <p>{s.intro}</p>
                <ul className="ticks">{s.highlights.map((h) => <li key={h}><Check size={16} />{h}</li>)}</ul>
                <div className="svc-actions">
                  <Link href={`/services/${s.slug}`} className="btn btn-primary">View {s.title} <ArrowUpRight size={16} /></Link>
                  <Link href={`/contact?reason=${encodeURIComponent(s.title)}`} className="btn btn-ghost">Get a quote</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section section-peach">
        <div className="container gov-teaser">
          <div><h2>Working with a government department?</h2><p>Portals, e-governance software, cloud hosting and digitisation, backed by ISO 9001:2015, Startup India, GST and Udyam registrations.</p></div>
          <Link href="/government" className="btn btn-primary btn-lg">Government solutions <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
