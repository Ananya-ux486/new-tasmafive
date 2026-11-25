'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Send } from 'lucide-react';
import { WhatsappIcon } from './Icons';
import { SITE } from '@/data/site';

const REASONS = ['Web Development', 'Digital Marketing', 'CRM Solutions', 'Cloud Solutions', 'Government / Tender enquiry', 'Free SEO audit report', 'Payment / Billing', 'Something else'];

export default function ContactForm() {
  const params = useSearchParams();
  const [f, setF] = useState({ reason: '', name: '', email: '', phone: '', message: '', website: '' });
  const [state, setState] = useState({ status: 'idle', msg: '' });

  useEffect(() => {
    if (params.get('audit')) setF((v) => ({ ...v, reason: 'Free SEO audit report' }));
    else if (params.get('reason') && REASONS.includes(params.get('reason'))) setF((v) => ({ ...v, reason: params.get('reason') }));
  }, [params]);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const waLink = () => {
    const text = `Hello TasmaFive Solutions,\nReason: ${f.reason || 'General enquiry'}\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\n\n${f.message}`;
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  async function submit(e) {
    e.preventDefault();
    setState({ status: 'sending', msg: '' });
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, reason: f.reason || 'General enquiry' }) });
      const data = await res.json().catch(() => ({}));
      if (data.ok) {
        setState({ status: 'done', msg: '' });
        window.open(waLink(), '_blank', 'noopener');
      } else {
        setState({ status: 'error', msg: data.message || 'Could not send your message.' });
      }
    } catch {
      setState({ status: 'error', msg: 'Network error. Please try again or use WhatsApp.' });
    }
  }

  if (state.status === 'done') {
    return (
      <div className="form-done">
        <CheckCircle2 size={44} />
        <h3>Message sent</h3>
        <p>We received your enquiry by email and will reply within 24 hours. A WhatsApp chat with the same details should have opened; if it did not, use the button below.</p>
        <a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsappIcon width={18} height={18} /> Continue on WhatsApp</a>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <label className="field">
        <span>What are you contacting us about?</span>
        <select value={f.reason} onChange={set('reason')} required>
          <option value="" disabled>Select a reason</option>
          {REASONS.map((r) => <option key={r}>{r}</option>)}
        </select>
      </label>
      <div className="two">
        <label className="field"><span>Name</span><input value={f.name} onChange={set('name')} placeholder="Your full name" required autoComplete="name" /></label>
        <label className="field"><span>Email</span><input type="email" value={f.email} onChange={set('email')} placeholder="you@company.com" required autoComplete="email" /></label>
      </div>
      <label className="field"><span>Phone</span><input type="tel" value={f.phone} onChange={set('phone')} placeholder="+91 98765 43210" autoComplete="tel" /></label>
      <label className="field"><span>Message</span><textarea rows={5} value={f.message} onChange={set('message')} placeholder="How can we help?" required /></label>
      <input className="hp" tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} aria-hidden="true" name="website" />
      {state.status === 'error' && (
        <p className="form-error" role="alert">{state.msg} <a href={waLink()} target="_blank" rel="noopener noreferrer">Send on WhatsApp instead</a></p>
      )}
      <button className="btn btn-primary btn-lg btn-block" disabled={state.status === 'sending'}>
        {state.status === 'sending' ? 'Sending…' : <>Send message <Send size={18} /></>}
      </button>
      <p className="form-note">Your message goes to our email and opens a WhatsApp chat with the same details.</p>
    </form>
  );
}
