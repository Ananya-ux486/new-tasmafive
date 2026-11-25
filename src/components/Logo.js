import Link from 'next/link';

export default function Logo({ height = 44 }) {
  return (
    <Link href="/" aria-label="TasmaFive Solutions home" className="logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo.png" alt="TasmaFive Solutions" style={{ height }} width={Math.round(height * 3.17)} height={height} />
    </Link>
  );
}
