'use client';

import { useEffect, useRef } from 'react';

// Words fill in as the section scrolls through the viewport.
export default function ScrollText({ text }) {
  const wrap = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const spans = el.querySelectorAll('span');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = reduce ? 1 : Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0), 1);
      const n = Math.round(p * spans.length);
      spans.forEach((s, i) => s.classList.toggle('on', i < n));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  return (
    <p className="scroll-text" ref={wrap}>
      {words.map((w, i) => <span key={i}>{w} </span>)}
    </p>
  );
}
