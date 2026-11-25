'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Cloud, Globe, Landmark, Megaphone, Users } from 'lucide-react';
import governmentHeroImage from '../../assets/6.png';
import crmHeroImage from '../../assets/7.png';

const INTERVAL = 4000; // 4 seconds between slides

const NODES = [[Globe, 'Web'], [Megaphone, 'Marketing'], [Users, 'CRM'], [Cloud, 'Cloud'], [Landmark, 'Government']];

function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="ring r1" /><div className="ring r2" />
      <div className="orbit-core"><span>5</span></div>
      <div className="orbit-spin">
        {NODES.map(([Icon, label], i) => (
          <div className="node" key={label} style={{ '--a': `${i * 72}deg` }}>
            <div className="node-in"><Icon size={20} /><b>{label}</b></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Rings3D() {
  return (
    <div className="rings3d-wrap" aria-hidden="true">
      <div className="rings3d">
        <div className="rg-cube" />
        <div className="rg-cube" />
        <div className="rg-cube" />
        <div className="rg-cube" />
        <div className="rg-dot" />
        <div className="rg-dot" />
        <div className="rg-dot" />
        <div className="rg rg1" />
        <div className="rg rg2" />
        <div className="rg rg3" />
        <div className="rg-core" />
      </div>
    </div>
  );
}

function Cloud3D() {
  return (
    <div className="cloud3d-wrap" aria-hidden="true">
      <div className="cloud3d-scene">
        <div className="cloud3d-particle" />
        <div className="cloud3d-particle" />
        <div className="cloud3d-particle" />
        <div className="cloud3d-particle" />
        <div className="cloud3d-particle" />
        <div className="cloud3d-body">
          <div className="cloud3d-puff p1" />
          <div className="cloud3d-puff p2" />
        </div>
        <div className="cloud3d-data">
          <span /><span /><span /><span /><span /><span />
        </div>
        <div className="cloud3d-shield">
          <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26 2L4 12V28C4 41.3 13.6 53.7 26 57C38.4 53.7 48 41.3 48 28V12L26 2Z"
              fill="url(#shieldGrad)"
              stroke="rgba(140,210,255,0.70)"
              strokeWidth="1.5"
            />
            <rect x="18" y="30" width="16" height="12" rx="2" fill="rgba(255,255,255,0.90)" />
            <path d="M20 30V26a6 6 0 0 1 12 0v4" stroke="rgba(255,255,255,0.90)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="26" cy="36" r="2" fill="rgba(60,120,230,0.80)" />
            <defs>
              <linearGradient id="shieldGrad" x1="4" y1="2" x2="48" y2="57" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(100,170,255,0.80)" />
                <stop offset="100%" stopColor="rgba(30,80,200,0.60)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

const SLIDES = [
  {
    badge: 'IT solutions · Kanpur, India',
    title: 'Software that runs businesses,',
    accent: 'and public departments.',
    text: 'Fast websites, CRM platforms and cloud systems for growing companies, backed by the registrations and certifications that government tenders ask for.',
    cta: [['Start your project', '/contact'], ['Government solutions', '/government']],
    bgImage: governmentHeroImage,
    bgAlt: 'IT solutions digital city',
    overlay: 'rgba(10, 15, 40, 0.65)',
    imgDir: 'right',
    extra: <div className="slide-orbit-overlay"><Orbit /></div>,
  },
  {
    badge: 'Web development',
    title: 'Websites that look sharp',
    accent: 'and bring in enquiries.',
    text: 'Static sites, landing pages, dynamic sites with an admin panel and online stores, with domain, hosting and SEO included in clear packages.',
    cta: [['See web packages', '/services/web-development'], ['Get a quote', '/contact?reason=Web%20Development']],
    bgImage: '/web1.jpg',
    bgAlt: 'Developer coding on multiple screens',
    overlay: 'rgba(8, 14, 36, 0.72)',
    imgDir: 'center',
    extra: <Rings3D />,
  },
  {
    badge: 'CRM solutions',
    title: 'One CRM for leads, clients,',
    accent: 'teams and finances.',
    text: 'Lead pipeline, service desk, HR, email and finance dashboards in a single login, built around how Indian businesses actually work.',
    cta: [['Explore CRM', '/services/crm'], ['Ask a question', '/contact?reason=CRM%20Solutions']],
    bgImage: crmHeroImage,
    bgAlt: 'Digital connected city representing CRM and business solutions',
    overlay: 'rgba(8, 14, 36, 0.60)',
    imgDir: 'right',
    extra: (
      <div className="slide-bg-badge top-right">
        <span className="sib-dot orange" />+24 leads
      </div>
    ),
  },
  {
    badge: 'Cloud & security',
    title: 'Cloud hosting that stays',
    accent: 'fast, safe and affordable.',
    text: 'AWS and Azure setup, migration, auto scaling, CI/CD and security policies, configured and monitored by our team.',
    cta: [['Cloud solutions', '/services/cloud-solutions'], ['Get a free audit', '/contact?audit=1']],
    bgImage: '/2.jpg',
    bgAlt: 'Cloud security infrastructure with shield',
    overlay: 'rgba(5, 12, 35, 0.75)',
    imgDir: 'center',
    extra: <Cloud3D />,
  },
];

export default function HeroSlider() {
  const [idx, setIdx]     = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  // Start/restart the auto-advance timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(() => {
      setIdx((v) => (v + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, INTERVAL);
  }, []);

  // Boot on mount, clean up on unmount
  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  // Manual navigation — restart the timer so the next auto-advance
  // counts from the moment the user interacted
  const go = useCallback((n) => {
    setIdx((n + SLIDES.length) % SLIDES.length);
    setAnimKey((k) => k + 1);
    startTimer();
  }, [startTimer]);

  return (
    <section
      className="hero hero-fullbg"
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {/* Background image layers */}
      {SLIDES.map((s, n) => (
        <div
          key={n}
          className={`hero-bg-layer ${n === idx ? 'is-on' : ''}`}
          aria-hidden="true"
        >
          <div className="hero-bg-motion">
            <Image
              key={n === idx ? `img-${animKey}` : `img-static-${n}`}
              src={s.bgImage}
              alt={s.bgAlt}
              fill
              className={`hero-bg-img${n === idx ? ` img-enter-${s.imgDir}` : ''}`}
              sizes="100vw"
              priority={n === 0}
            />
          </div>
          <div className="hero-bg-overlay" style={{ background: s.overlay }} />
        </div>
      ))}

      {/* Nav arrows */}
      <button type="button" className="hero-arrow left" onClick={() => go(idx - 1)} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button type="button" className="hero-arrow right" onClick={() => go(idx + 1)} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      <div className="container hero-stage">
        {SLIDES.map((s, n) => {
          const active = n === idx;
          return (
            <div
              className={`slide slide-fullbg ${active ? 'is-on' : ''}`}
              key={n}
              aria-hidden={!active}
              role="group"
              aria-label={`Slide ${n + 1} of ${SLIDES.length}`}
            >
              {/* LEFT — text */}
              <div className="slide-copy slide-copy-light">
                <p
                  key={`badge-${n}-${active ? animKey : 'idle'}`}
                  className={`hero-badge hero-badge-light${active ? ' sa-badge' : ''}`}
                >
                  {s.badge}
                </p>
                <h1
                  key={`title-${n}-${active ? animKey : 'idle'}`}
                  className={`hero-title hero-title-light${active ? ' sa-title' : ''}`}
                >
                  {s.title}{' '}
                  <span className="accent accent-light">{s.accent}</span>
                </h1>
                <p
                  key={`sub-${n}-${active ? animKey : 'idle'}`}
                  className={`hero-sub hero-sub-light${active ? ' sa-sub' : ''}`}
                >
                  {s.text}
                </p>
                <div
                  key={`cta-${n}-${active ? animKey : 'idle'}`}
                  className={`hero-cta${active ? ' sa-cta' : ''}`}
                >
                  <Link href={s.cta[0][1]} className="btn btn-primary btn-lg" tabIndex={active ? 0 : -1}>
                    {s.cta[0][0]} <ArrowUpRight size={18} />
                  </Link>
                  <Link href={s.cta[1][1]} className="btn btn-ghost-light btn-lg" tabIndex={active ? 0 : -1}>
                    {s.cta[1][0]}
                  </Link>
                </div>
              </div>

              {/* RIGHT — art / orbit — shown on desktop, also shown on mobile for slide 1 (orbit) */}
              <div className="slide-art slide-art-fullbg">
                {active ? (
                  <div key={`art-${n}-${animKey}`} className="sa-art-inner">
                    {s.extra}
                  </div>
                ) : (
                  s.extra
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="hero-dots hero-dots-light" role="tablist" aria-label="Choose slide">
        {SLIDES.map((_, n) => (
          <button
            key={n}
            type="button"
            role="tab"
            aria-selected={n === idx}
            aria-label={`Show slide ${n + 1}`}
            className={n === idx ? 'on' : ''}
            onClick={() => go(n)}
          >
            <span
              key={`dot-${n}-${idx === n ? animKey : 'x'}`}
              style={n === idx ? { animationDuration: `${INTERVAL}ms` } : undefined}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
