'use client';

import { useEffect, useState } from 'react';
import { Maximize2, ShieldCheck, X } from 'lucide-react';
import { CERTIFICATES } from '@/data/certificates';

const block = (e) => e.preventDefault();

export default function CertGallery() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const keys = (e) => {
      const k = e.key.toLowerCase();
      if (e.key === 'Escape') setOpen(null);
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(k)) e.preventDefault();
    };
    window.addEventListener('keydown', keys);
    return () => window.removeEventListener('keydown', keys);
  }, []);

  return (
    <div className="certs cert-protected" onContextMenu={block} onDragStart={block}>
      {CERTIFICATES.map((c) => (
        <article className="cert" key={c.id}>
          <button type="button" className="cert-img" onClick={() => setOpen(c)} aria-label={`View ${c.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/api/certs/${c.id}`} alt={c.title} draggable={false} />
            <span className="cert-wm" aria-hidden="true" />
            <span className="cert-zoom"><Maximize2 size={16} /> View</span>
          </button>
          <div className="cert-meta">
            <h3><ShieldCheck size={18} /> {c.title}</h3>
            <p className="cert-issuer">{c.issuer}</p>
            <p>{c.detail}</p>
          </div>
        </article>
      ))}
      {open && (
        <div className="lightbox cert-protected" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)} onContextMenu={block}>
          <button type="button" className="lb-close" onClick={() => setOpen(null)} aria-label="Close"><X size={26} /></button>
          <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/api/certs/${open.id}`} alt={open.title} draggable={false} />
            <span className="cert-wm" aria-hidden="true" />
          </div>
        </div>
      )}
    </div>
  );
}
