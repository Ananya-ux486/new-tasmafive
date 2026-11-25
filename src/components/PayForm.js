'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, CreditCard } from 'lucide-react';
import { WEB_PACKAGES } from '@/data/services';
import { useAuth } from '@/context/AuthContext';

const API = process.env.NEXT_PUBLIC_API_URL || '';

export default function PayForm() {
  const params = useSearchParams();
  const { user } = useAuth();
  const initial = WEB_PACKAGES.find((p) => p.id === params.get('package'))?.id || WEB_PACKAGES[0].id;
  const [pkg, setPkg] = useState(initial);
  const [region, setRegion] = useState('india');
  const [state, setState] = useState({ status: 'idle', msg: '' });
  const item = WEB_PACKAGES.find((p) => p.id === pkg);
  const amount = region === 'india' ? item.price.india : item.price.intl;

  async function pay() {
    setState({ status: 'busy', msg: '' });
    try {
      if (API) {
        // Backend contract: POST {API}/payments/create-order { packageId, region } -> { url }
        const res = await fetch(`${API}/payments/create-order`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ packageId: pkg, region }) });
        const data = await res.json();
        if (!res.ok || !data.url) throw new Error(data.message || 'Could not start payment.');
        window.location.href = data.url;
        return;
      }
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reason: 'Payment / Billing', name: user?.name || 'Signed-in visitor', email: user?.email || 'unknown@example.com', phone: '', message: `Payment request: ${item.title} (${region === 'india' ? 'India' : 'International'}) ${amount}` }) });
      const data = await res.json().catch(() => ({}));
      if (!data.ok) throw new Error(data.message || 'Could not send your request.');
      setState({ status: 'done', msg: '' });
    } catch (e) {
      setState({ status: 'error', msg: e.message });
    }
  }

  if (state.status === 'done') {
    return (
      <div className="form-done">
        <CheckCircle2 size={44} />
        <h3>Payment request received</h3>
        <p>Our team will email you a secure payment link for {item.title} shortly.</p>
      </div>
    );
  }

  return (
    <div className="pay">
      <div className="seg" role="radiogroup" aria-label="Region">
        <button type="button" className={region === 'india' ? 'on' : ''} onClick={() => setRegion('india')}>India (₹)</button>
        <button type="button" className={region === 'intl' ? 'on' : ''} onClick={() => setRegion('intl')}>International ($)</button>
      </div>
      <div className="pay-list">
        {WEB_PACKAGES.map((p) => (
          <label key={p.id} className={`pay-item ${pkg === p.id ? 'on' : ''}`}>
            <input type="radio" name="pkg" checked={pkg === p.id} onChange={() => setPkg(p.id)} />
            <span><b>{p.title}</b><small>{p.tag}</small></span>
            <em>{region === 'india' ? p.price.india : p.price.intl}</em>
          </label>
        ))}
      </div>
      <div className="pay-total"><span>Total</span><strong>{amount}</strong></div>
      <p className="form-note">{item.price.note}. Taxes extra where applicable. Final scope is confirmed after a short brief.</p>
      {state.status === 'error' && <p className="form-error" role="alert">{state.msg}</p>}
      <button className="btn btn-primary btn-lg btn-block" onClick={pay} disabled={state.status === 'busy'}>
        <CreditCard size={18} /> {state.status === 'busy' ? 'Please wait…' : 'Proceed to pay'}
      </button>
    </div>
  );
}
