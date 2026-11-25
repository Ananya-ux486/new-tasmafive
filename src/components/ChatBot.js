'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { botReply } from '@/lib/botReply';

const START = [{ from: 'bot', text: 'Hi, I am the TasmaFive assistant. Ask me about services, pricing, certificates or how to reach our team.' }];
const CHIPS = ['Website pricing', 'Free SEO audit', 'Government projects', 'Contact details'];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState(START);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const end = useRef(null);

  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener('tf:chat', on);
    return () => window.removeEventListener('tf:chat', on);
  }, []);
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, open]);

  async function send(value) {
    const q = (value ?? text).trim();
    if (!q || busy) return;
    setText('');
    setMsgs((m) => [...m, { from: 'me', text: q }]);
    setBusy(true);
    let reply;
    const api = process.env.NEXT_PUBLIC_CHAT_API;
    if (api) {
      try {
        const r = await fetch(api, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: q }) });
        reply = (await r.json()).reply;
      } catch {}
    }
    reply = reply || botReply(q);
    setTimeout(() => { setMsgs((m) => [...m, { from: 'bot', text: reply }]); setBusy(false); }, 450);
  }

  if (!open) return null;
  return (
    <section className="chat" aria-label="AI assistant">
      <header className="chat-head">
        <span className="chat-av"><Bot size={20} /></span>
        <div><strong>TasmaFive Assistant</strong><small>Instant answers</small></div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X size={20} /></button>
      </header>
      <div className="chat-body">
        {msgs.map((m, i) => <p key={i} className={`bubble ${m.from}`}>{m.text}</p>)}
        {busy && <p className="bubble bot typing">Typing…</p>}
        {msgs.length === 1 && (
          <div className="chips">{CHIPS.map((c) => <button key={c} type="button" onClick={() => send(c)}>{c}</button>)}</div>
        )}
        <div ref={end} />
      </div>
      <form className="chat-form" onSubmit={(e) => { e.preventDefault(); send(); }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your question" aria-label="Your message" />
        <button type="submit" aria-label="Send"><Send size={18} /></button>
      </form>
    </section>
  );
}
