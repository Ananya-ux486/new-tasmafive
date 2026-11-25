import Link from 'next/link';
import Image from 'next/image';
import governmentImage from '../../assets/5.png';
import { ArrowRight, ArrowUpRight, BadgeCheck, Braces, Building2, CarFront, ChartNoAxesCombined, Check, CloudUpload, Code2, Dumbbell, Factory, FileCheck2, GraduationCap, Hotel, Hospital, Landmark, Layers3, Lock, PenTool, Plane, Rocket, SearchCheck, ServerCog, Shirt, ShoppingCart, Tag, Target, Truck } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import Counter from '@/components/Counter';
import ScrollText from '@/components/ScrollText';
import GlobeOrbit from '@/components/GlobeOrbit';
import { IndiaPresence, WorldPresence } from '@/components/Presence';
import { SERVICE_ICONS } from '@/components/Icons';
import { SERVICES, WEB_PACKAGES } from '@/data/services';
import { INDUSTRIES, TECH } from '@/data/site';

const CREDS = ['ISO 9001:2015 certified', 'Startup India recognised', 'GST registered', 'Udyam (MSME) registered'];
const STATS = [[50, '+', 'Projects delivered'], [98, '%', 'Client satisfaction'], [12, '+', 'Industries served'], [10, '+', 'Countries reached']];
const PROCESS = [
  ['Discover & audit', 'We understand your goals, review your current setup and find the gaps in performance, security and conversion.'],
  ['Plan & design', 'Clear scope, timelines and UX aligned to your brand, so you know what is delivered and when.'],
  ['Build & secure', 'Clean code, responsive design, SSL and best practices built into every site and system.'],
  ['Launch & support', 'Smooth go-live, training if needed and ongoing maintenance to keep things fast and reliable.'],
];
const PROCESS_ICONS = [SearchCheck, PenTool, Braces, Rocket];
const GOV = [
  [Landmark, 'Portals & e-governance', 'Department websites, citizen service portals and internal workflow software.'],
  [ServerCog, 'Cloud hosting', 'Secure AWS and Azure hosting with backups, monitoring and access control.'],
  [FileCheck2, 'Digitisation & BPO/KPO', 'Back-office operations, data entry and call-centre support within our ISO scope.'],
  [Lock, 'Security first', 'Encryption, role-based access and audit logging as standard.'],
];
// 3D Microsoft Fluent Emoji icons — stored locally in /public/sectors/
const INDUSTRY_ICONS_3D = [
  { src: '/sectors/office_building_3d.png',  alt: 'Real Estate'          },
  { src: '/sectors/graduation_cap_3d.png',   alt: 'Education'            },
  { src: '/sectors/hospital_3d.png',         alt: 'Hospital'             },
  { src: '/sectors/airplane_3d.png',         alt: 'Travel'               },
  { src: '/sectors/shopping_cart_3d.png',    alt: 'E-commerce'           },
  { src: '/sectors/factory_3d.png',          alt: 'Manufacturing'        },
  { src: '/sectors/gym_3d.png',              alt: 'Gym & Fitness'        },
  { src: '/sectors/delivery_truck_3d.png',   alt: 'Logistics'            },
  { src: '/sectors/automobile_3d.png',       alt: 'Automobile'           },
  { src: '/sectors/laptop_3d.png',           alt: 'IT & Software'        },
  { src: '/sectors/bell_3d.png',             alt: 'Hotel & Restaurants'  },
  { src: '/sectors/dress_3d.png',            alt: 'Fashion'              },
];
const FAQ_ICONS = [Code2, Tag, Landmark, ChartNoAxesCombined, CloudUpload];
const FAQ = [
  ['What is included in the website packages?', 'Every web package includes domain and hosting, a mobile-responsive design and SEO optimisation. Dynamic sites add an admin panel, and e-commerce adds a product catalogue and cart checkout.'],
  ['Are the prices final?', 'Package prices are transparent starting points. Final scope is confirmed after a short brief, and taxes are extra where applicable.'],
  ['Do you work with government departments?', 'Yes. We build portals, e-governance software and cloud setups, and we hold ISO 9001:2015, Startup India, GST and Udyam registrations that tender evaluations usually ask for.'],
  ['Can you manage SEO and ads after launch?', 'Yes. We offer SEO with a free audit report, Google and Meta Ads, Google My Business ranking and social media promotion, billed monthly or per project.'],
  ['How do I get a quote for CRM or cloud work?', 'Use the contact form or WhatsApp. Share your requirements and we send a custom proposal within 24 hours.'],
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="trust">
        <div className="container trust-in">
          {CREDS.map((c) => (<span key={c}><BadgeCheck size={20} />{c}</span>))}
        </div>
      </section>

      <section className="section statement">
        <div className="container statement-body">
          {/* LEFT — text content */}
          <div className="statement-copy">
            {/* corner decorations */}
            <span className="stmt-corner tl" aria-hidden="true">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none"><circle cx="8" cy="8" r="6" fill="none" stroke="#ff7a1a" strokeWidth="1.5"/><line x1="14" y1="8" x2="85" y2="8" stroke="#ff7a1a" strokeWidth="1" strokeDasharray="4 4"/><line x1="8" y1="14" x2="8" y2="85" stroke="#ff7a1a" strokeWidth="1" strokeDasharray="4 4"/><circle cx="8" cy="8" r="2.5" fill="#ff7a1a"/></svg>
            </span>
            <span className="stmt-corner bl" aria-hidden="true">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none"><circle cx="8" cy="82" r="6" fill="none" stroke="#4c7dff" strokeWidth="1.5"/><line x1="14" y1="82" x2="85" y2="82" stroke="#4c7dff" strokeWidth="1" strokeDasharray="4 4"/><line x1="8" y1="76" x2="8" y2="5" stroke="#4c7dff" strokeWidth="1" strokeDasharray="4 4"/><circle cx="8" cy="82" r="2.5" fill="#4c7dff"/></svg>
            </span>
            <p className="stmt-tag"><span className="stmt-dot" aria-hidden="true" />IT Solutions · Kanpur, India</p>
            <ScrollText text="From startups to public departments, we craft cloud-ready digital platforms that expand your reach, strengthen your credibility and accelerate your growth, with the paperwork and certifications to back it up." />
            <div className="stmt-codeline" aria-hidden="true">
              <span className="stmt-kw">const</span> <span className="stmt-fn">tasmafive</span> <span className="stmt-op">=</span> <span className="stmt-str">'Smart IT · Real Growth'</span><span className="stmt-op">;</span>
            </div>
          </div>

          {/* RIGHT — 3D globe with orbiting services */}
          <div className="statement-globe">
            <GlobeOrbit />
          </div>
        </div>
      </section>

      <section className="section section-peach">
        <div className="container">
          <div className="sec-head center">
            <h2>Creative digital solutions</h2>
            <p>We build scalable websites, enterprise software and AI-powered experiences that help businesses grow faster.</p>
          </div>
          <div className="bento">
            {SERVICES.map((s, n) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <Link href={`/services/${s.slug}`} className={`bento-card c${n}`} key={s.slug}>
                  <span className="bento-ico"><Icon size={28} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <ul className="ticks one">{s.highlights.slice(0, 3).map((h) => <li key={h}><Check size={15} />{h}</li>)}</ul>
                  <span className="bento-go">Explore <ArrowUpRight size={18} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack — logo cards slider, no heading */}
      <section className="stack-section">
        <div className="stack-slider-wrap">
          <div className="stack-track-logos" aria-hidden="true">
            {[...TECH, ...TECH].map((t, i) => (
              <div className="stack-logo-card" key={i}>
                <div className="stack-logo-img-wrap" style={{ background: t.bg }}>
                  <img src={t.logo} alt={t.name} width={48} height={48} loading="lazy" className="stack-logo-img" />
                </div>
                <span className="stack-logo-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container stats-grid">
          {STATS.map(([n, s, l]) => (<div key={l}><strong><Counter to={n} suffix={s} /></strong><span>{l}</span></div>))}
          <div><strong><Counter to={5} decimals={1} /></strong><span>Google rating</span></div>
          <div><strong>24/7</strong><span>Support availability</span></div>
        </div>
      </section>

      <section className="section gov">
        <div className="container gov-grid">
          <div>
            <p className="tag-pill"><BadgeCheck size={16} /> Tender-ready IT partner</p>
            <h2>Built for business. Ready for government.</h2>
            <p className="lead">Public-sector buyers need more than good code. We hold ISO 9001:2015, Startup India recognition, GST and Udyam registration, so evaluation teams get the documents they expect.</p>
            <ul className="gov-list">
              {GOV.map(([Icon, t, d]) => (<li key={t}><Icon size={22} /><div><strong>{t}</strong><p>{d}</p></div></li>))}
            </ul>
            <div className="hero-cta">
              <Link href="/government" className="btn btn-primary btn-lg">Government solutions <ArrowUpRight size={18} /></Link>
              <Link href="/certificates" className="btn btn-ghost btn-lg">View certificates</Link>
            </div>
          </div>
          <div className="gov-art">
            <Image src={governmentImage} alt="Digital government services and citizen portal illustration" className="gov-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head center"><h2>Website packages with clear pricing</h2><p>Domain, hosting and SEO included. Choose a package and pay online after signing in.</p></div>
          <div className="pkgs">
            {WEB_PACKAGES.map((p) => (
              <article className="pkg" key={p.id}>
                <span className="badge">{p.tag}</span>
                <h3>{p.title}</h3>
                <ul className="ticks one">{p.features.slice(0, 4).map((f) => <li key={f}><Check size={15} />{f}</li>)}</ul>
                <div className="pkg-actions">
                  <Link href={`/contact?reason=${encodeURIComponent(p.title)}`} className="btn btn-primary btn-sm">Enquire Now</Link>
                  <Link href={`/services/web-development#${p.id}`} className="btn btn-ghost btn-sm">Details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="process-heading">
            <p className="process-kicker"><Target size={17} /> Our Work Process</p>
            <h2>From Idea to <span>Launch</span></h2>
            <p>A simple and structured process to turn your ideas into real, high-performing solutions.</p>
          </div>
          <ol className="process-flow">
            {PROCESS.map(([t, d], i) => {
              const Icon = PROCESS_ICONS[i];
              return (
                <li className={`process-card process-card-${i + 1}`} key={t}>
                  <span className="process-number">{String(i + 1).padStart(2, '0')}</span>
                  <div className="process-visual"><Icon size={58} strokeWidth={1.45} /></div>
                  <h3>{t}</h3>
                  <span className="process-accent" aria-hidden="true" />
                  <p>{d}</p>
                  {i < PROCESS.length - 1 && <span className="process-arrow" aria-hidden="true"><ArrowRight size={20} /></span>}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section sectors-section">
        <div className="container">
          <div className="sec-head center sectors-head">
            <span className="sectors-eyebrow"><Layers3 size={15} aria-hidden="true" /> Industries we empower</span>
            <h2>Sectors We <span>Serve</span></h2>
            <p>We adapt technology to how your industry actually works.</p>
          </div>
          <ul className="sectors-grid">
            {INDUSTRIES.map((industry, index) => {
              const icon = INDUSTRY_ICONS_3D[index];
              return (
                <li className="sector-card" key={industry} style={{ '--sector-delay': `${index * 55}ms` }}>
                  <div className="sector-icon-3d">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      width={72}
                      height={72}
                      loading="lazy"
                      className="sector-3d-img"
                    />
                  </div>
                  <strong>{industry}</strong>
                  <span className="sector-accent" aria-hidden="true" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section section-peach">
        <div className="container">
          <div className="sec-head center"><h2>Our presence in India</h2><p>Serving clients from Kanpur to the National Capital Region.</p></div>
          <IndiaPresence />
          <div className="sec-head center" style={{ marginTop: 72 }}><h2>Our presence worldwide</h2><p>Clients across the UK, Europe, the Middle East, Africa, Australia and the Caribbean.</p></div>
          <WorldPresence />
        </div>
      </section>

      <section className="section faq-section">
        <div className="container narrow">
          <div className="faq-heading-wrap">
            <div className="faq-kicker"><span /><b>FAQs</b><span /></div>
            <h2 className="faq-heading"><em>Questions,</em> <strong>Answered</strong></h2>
            <p>Find quick answers to the most common queries about our IT services, process and support.</p>
          </div>
          <div className="faq">
            {FAQ.map(([q, a], index) => {
              const Icon = FAQ_ICONS[index];
              return (
                <details key={q} open={index === 0}>
                  <summary>
                    <span className="faq-question-icon"><Icon size={27} strokeWidth={1.9} /></span>
                    <span className="faq-question-text">{q}</span>
                  </summary>
                  <p>{a}</p>
                </details>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
