'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ to, suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(1);  // start from 1, not 0

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setVal(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = 1;                // begin at 1
      const duration = 1800;          // slightly slower = more natural
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(start + (to - start) * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setVal(to);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}
