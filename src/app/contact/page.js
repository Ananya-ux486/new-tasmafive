import { Suspense } from 'react';
import { Clock, Mail, MapPin, Phone, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/data/site';

export const metadata = { title: 'Contact', description: 'Contact TasmaFive Solutions in Kanpur for websites, software, marketing, cloud and government IT projects.' };

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    lines: [<a key="email" href={`mailto:${SITE.email}`}>{SITE.email}</a>],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: SITE.phones.map((p) => <a key={p} href={`tel:${p}`}>{p}</a>),
  },
  {
    icon: MapPin,
    label: 'Location',
    lines: [<span key="city">Kanpur, UP – India</span>, <span key="addr" className="ci-sub">{SITE.address}</span>],
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: [<span key="hrs">{SITE.hours}</span>],
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's Talk About Your Project"
        sub="Tell us what you need and we will reply within 24 hours."
        crumbs={[['Contact']]}
        bgImage="/contact1.png"
        eyebrow="Contact Us"
      />

      <section className="section ct-section">
        <div className="container ct-grid">

          {/* ── Left: dark info panel ── */}
          <div className="ct-info">
            <h2 className="ct-info-heading">
              Reach Us <span className="accent-orange">Directly</span>
            </h2>
            <p className="ct-info-sub">Prefer a quick call or email? Use the details below.</p>

            <ul className="ct-items">
              {CONTACT_ITEMS.map(({ icon: Icon, label, lines }) => (
                <li key={label} className="ct-item">
                  <span className="ct-item-icon"><Icon size={18} /></span>
                  <div>
                    <small>{label}</small>
                    {lines}
                  </div>
                </li>
              ))}
            </ul>

            {/* Looking for pricing */}
            <div className="ct-pricing-box">
              <span className="ct-pricing-icon"><FileText size={22} /></span>
              <div className="ct-pricing-text">
                <strong>Looking for pricing?</strong>
                <p>Share your requirements and get a clear project estimate.</p>
              </div>
              <Link href="/catalogue" className="ct-pricing-btn" aria-label="See the catalogue">
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* ── Right: form + map ── */}
          <div className="ct-right">
            <div className="ct-form-card">
              <div className="ct-form-head">
                <span className="ct-form-ico"><Mail size={22} /></span>
                <div>
                  <h2 className="ct-form-title">Send a <span className="accent-orange">Message</span></h2>
                  <p>Tell us why you are reaching out so we can help faster.</p>
                </div>
              </div>
              <Suspense fallback={null}><ContactForm /></Suspense>
            </div>

            {/* Map */}
            <div className="ct-map-wrap">
              <iframe
                title="TasmaFive Solutions on Google Maps"
                className="ct-map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Nayaganj+Kanpur+208001&output=embed"
              />
              <a
                href="https://maps.google.com/?q=Nayaganj+Kanpur+208001"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-map-btn"
              >
                Open in Maps ↗
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
