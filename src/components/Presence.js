'use client';

import Image from 'next/image';
import { INDIA_PRESENCE, WORLD_PRESENCE } from '@/data/site';

/* ── India Presence — left-to-right auto-scroll slider ── */
export function IndiaPresence() {
  const cards = [...INDIA_PRESENCE, ...INDIA_PRESENCE];

  return (
    <div className="india-slider-wrap" aria-label="Our presence in India">
      <ul className="india-track" aria-hidden="false">
        {cards.map((c, idx) => (
          <li key={idx} className="india-card">
            <div className="india-img">
              <Image
                src={c.img}
                alt={`${c.city} – ${c.place}`}
                fill
                sizes="260px"
                className="india-photo"
              />
              <div className="india-overlay" />
            </div>
            <div className="india-info">
              <strong>{c.city}</strong>
              <span>{c.place}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── World Presence — right-to-left auto-scroll slider ── */
export function WorldPresence() {
  const cards = [...WORLD_PRESENCE, ...WORLD_PRESENCE];
  return (
    <div className="world-slider-wrap" aria-label="Our presence worldwide">
      <ul className="world-track">
        {cards.map((c, idx) => (
          <li key={idx} className="wf-card">
            <div className="wf-flag-wrap">
              <Image
                src={`/flags/${c.code}.svg`}
                alt={`Flag of ${c.name}`}
                fill
                className="wf-flag"
                sizes="120px"
              />
            </div>
            <strong>{c.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
