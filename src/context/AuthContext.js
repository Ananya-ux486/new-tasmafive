'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const API = process.env.NEXT_PUBLIC_API_URL || '';
const COOKIE = 'tf_auth';

function setCookie(value, days = 7) {
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE}=${encodeURIComponent(value)}; path=/; max-age=${days * 86400}; SameSite=Lax${secure}`;
}
function clearCookie() {
  document.cookie = `${COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

/*
 * Auth contract for your backend (set NEXT_PUBLIC_API_URL to enable):
 *   POST {API}/auth/login     { email, password }        -> { token, user: { name, email } }
 *   POST {API}/auth/register  { name, email, password }  -> { token, user: { name, email } }
 * Without NEXT_PUBLIC_API_URL the site runs in DEMO mode: any valid email and a
 * password of 6+ characters signs in. Replace this before going to production.
 */
async function callApi(path, payload) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Something went wrong. Please try again.');
  return data;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tf_user');
      if (saved && document.cookie.includes(`${COOKIE}=`)) setUser(JSON.parse(saved));
    } catch {}
    setReady(true);
  }, []);

  const finish = useCallback((token, profile) => {
    setCookie(token);
    localStorage.setItem('tf_user', JSON.stringify(profile));
    setUser(profile);
  }, []);

  const login = useCallback(async ({ email, password }) => {
    if (API) {
      const data = await callApi('/auth/login', { email, password });
      finish(data.token, data.user);
      return;
    }
    if (password.length < 6) throw new Error('Password must be at least 6 characters.');
    finish('demo-' + Date.now(), { name: email.split('@')[0], email });
  }, [finish]);

  const register = useCallback(async ({ name, email, password }) => {
    if (API) {
      const data = await callApi('/auth/register', { name, email, password });
      finish(data.token, data.user);
      return;
    }
    if (password.length < 6) throw new Error('Password must be at least 6 characters.');
    finish('demo-' + Date.now(), { name, email });
  }, [finish]);

  const logout = useCallback(() => {
    clearCookie();
    localStorage.removeItem('tf_user');
    setUser(null);
    window.location.href = '/';
  }, []);

  return (
    <AuthContext.Provider value={{ user, ready, login, register, logout }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
