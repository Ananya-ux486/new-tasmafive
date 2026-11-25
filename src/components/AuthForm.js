'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function AuthForm() {
  const { login, register } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const [mode, setMode] = useState('login');
  const [f, setF] = useState({ name: '', email: '', password: '' });
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setErr('');
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setErr('Enter a valid email address.');
    if (mode === 'register' && f.name.trim().length < 2) return setErr('Enter your name.');
    setBusy(true);
    try {
      if (mode === 'login') await login(f); else await register(f);
      const next = params.get('next');
      router.replace(next && next.startsWith('/') ? next : '/');
      router.refresh();
    } catch (error) {
      setErr(error.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth">
      <div className="auth-icon"><Lock size={22} /></div>
      <h1>{mode === 'login' ? 'Sign in' : 'Create your account'}</h1>
      <p className="auth-sub">Sign in to view our projects and certificates, and to make payments.</p>
      <div className="tabs" role="tablist">
        <button role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'on' : ''} onClick={() => setMode('login')} type="button">Sign in</button>
        <button role="tab" aria-selected={mode === 'register'} className={mode === 'register' ? 'on' : ''} onClick={() => setMode('register')} type="button">Create account</button>
      </div>
      <form className="form" onSubmit={submit} noValidate>
        {mode === 'register' && <label className="field"><span>Name</span><input value={f.name} onChange={set('name')} autoComplete="name" /></label>}
        <label className="field"><span>Email</span><input type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
        <label className="field"><span>Password</span><input type="password" value={f.password} onChange={set('password')} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} /></label>
        {err && <p className="form-error" role="alert">{err}</p>}
        <button className="btn btn-primary btn-lg btn-block" disabled={busy}>{busy ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}</button>
      </form>
    </div>
  );
}
