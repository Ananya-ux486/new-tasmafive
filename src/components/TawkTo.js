'use client';

import { useEffect } from 'react';

// Live chat. Set NEXT_PUBLIC_TAWK_PROPERTY_ID (and optionally NEXT_PUBLIC_TAWK_WIDGET_ID) in .env
export default function TawkTo() {
  useEffect(() => {
    const property = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const widget = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || 'default';
    if (!property || document.getElementById('tawk-script')) return;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const s = document.createElement('script');
    s.id = 'tawk-script';
    s.async = true;
    s.src = `https://embed.tawk.to/${property}/${widget}`;
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.body.appendChild(s);
  }, []);
  return null;
}
