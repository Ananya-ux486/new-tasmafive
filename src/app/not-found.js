import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section nf">
      <div className="container narrow" style={{ textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="btn btn-primary btn-lg">Back to home</Link>
      </div>
    </section>
  );
}
