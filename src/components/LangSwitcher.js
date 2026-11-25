'use client';

import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';

const LANGS = [['en', 'English'], ['hi', 'हिन्दी'], ['ar', 'العربية'], ['de', 'Deutsch'], ['fr', 'Français'], ['es', 'Español']];

function currentLang() {
  const m = document.cookie.match(/googtrans=\/en\/([a-z-]+)/i);
  return m ? m[1] : 'en';
}

export default function LangSwitcher() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    setLang(currentLang());
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'g_translate');
    };
    if (!document.getElementById('g-translate-script')) {
      const s = document.createElement('script');
      s.id = 'g-translate-script';
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  function change(e) {
    const v = e.target.value;
    const host = location.hostname;
    document.cookie = `googtrans=/en/${v}; path=/`;
    document.cookie = `googtrans=/en/${v}; path=/; domain=${host}`;
    setLang(v);
    location.reload();
  }

  return (
    <div className="lang notranslate">
      <Languages size={16} />
      <select value={lang} onChange={change} aria-label="Select language">
        {LANGS.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
      </select>
      <div id="g_translate" />
    </div>
  );
}
