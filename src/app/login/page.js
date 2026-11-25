import { Suspense } from 'react';
import AuthForm from '@/components/AuthForm';

export const metadata = { title: 'Sign in', robots: { index: false } };

export default function Login() {
  return (
    <section className="section auth-wrap">
      <div className="container"><Suspense fallback={null}><AuthForm /></Suspense></div>
    </section>
  );
}
