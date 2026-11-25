import { Suspense } from 'react';
import PageHero from '@/components/PageHero';
import PayForm from '@/components/PayForm';

export const metadata = { title: 'Pay Now', robots: { index: false } };

export default function Payment() {
  return (
    <>
      <PageHero title="Pay securely" sub="Choose your package and region. You are signed in, so your payment request is linked to your account." crumbs={[['Pay Now']]} />
      <section className="section">
        <div className="container narrow"><Suspense fallback={null}><PayForm /></Suspense></div>
      </section>
    </>
  );
}
