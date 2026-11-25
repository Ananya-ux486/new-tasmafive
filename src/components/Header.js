'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bot, ChevronDown, ChevronRight, CreditCard, LogOut, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV, SITE } from '@/data/site';
import { useAuth } from '@/context/AuthContext';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';

export default function Header() {
  const pathname  = usePathname();
  const { user, logout } = useAuth();
  const [open, setOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sub, setSub]     = useState(null);

  /* ── close on route change ── */
  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);

  /* ── scroll shadow ── */
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  /* ── lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* ── Escape closes drawer ── */
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open]);

  const isActive   = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]);
  const closeMenu  = () => { setOpen(false); setSub(null); };
  const toggleSub  = (label) => setSub((v) => (v === label ? null : label));

  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello TasmaFive Solutions!')}`;

  return (
    <>
      {/* ── Dark backdrop (mobile only) ── */}
      {open && (
        <div
          className="mob-backdrop"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-in">

          {/* Logo — always visible */}
          <Logo />

          {/* ── Desktop nav ── */}
          <nav className="desk-nav" aria-label="Main navigation">
            {NAV.map((item) =>
              item.children ? (
                <div className="nav-drop" key={item.label}>
                  <button
                    type="button"
                    className={`nav-link${isActive(item.href) ? ' is-active' : ''}`}
                    aria-expanded={sub === item.label}
                    onClick={() => toggleSub(item.label)}
                  >
                    {item.label}
                    <ChevronDown size={14} style={{ transition: 'transform .2s', transform: sub === item.label ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />
                  </button>
                  <div className={`drop${sub === item.label ? ' is-open' : ''}`}>
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href}>{c.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${isActive(item.href) ? ' is-active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop actions ── */}
          <div className="header-actions">
            {user ? (
              <button className="link-btn desk-only" onClick={logout} title={user.email}>
                <LogOut size={16} /> {user.name}
              </button>
            ) : (
              <Link href="/login" className="link-btn desk-only">Sign in</Link>
            )}
            <button
              type="button"
              className="bot-btn"
              aria-label="Open AI assistant"
              onClick={() => window.dispatchEvent(new Event('tf:chat'))}
            >
              <Bot size={22} />
            </button>
            <Link href="/payment" className="btn btn-primary btn-sm desk-only">
              <CreditCard size={16} /> Pay Now
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className="ham-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>

      {/* ════════════════════════════════════
          MOBILE DRAWER — separate from header
          ════════════════════════════════════ */}
      <div className={`mob-drawer${open ? ' mob-drawer-open' : ''}`} aria-modal="true" role="dialog" aria-label="Navigation menu">

        {/* Drawer top bar: logo + X */}
        <div className="mob-drawer-top">
          <Logo height={36} />
          <button
            type="button"
            className="mob-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mob-nav" aria-label="Mobile navigation">
          {NAV.map((item) =>
            item.children ? (
              <div className="mob-nav-group" key={item.label}>
                <button
                  type="button"
                  className={`mob-nav-link mob-nav-btn${isActive(item.href) ? ' mob-active' : ''}`}
                  onClick={() => toggleSub(item.label)}
                  aria-expanded={sub === item.label}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={18}
                    className={`mob-chevron${sub === item.label ? ' mob-chevron-open' : ''}`}
                  />
                </button>
                {sub === item.label && (
                  <div className="mob-sub">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="mob-sub-link"
                        onClick={closeMenu}
                      >
                        <ChevronRight size={14} />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`mob-nav-link${isActive(item.href) ? ' mob-active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA buttons */}
        <div className="mob-cta">
          <Link href="/payment" className="btn btn-primary btn-block" onClick={closeMenu}>
            <CreditCard size={16} /> Pay Now
          </Link>
          {user ? (
            <button className="btn btn-ghost btn-block" onClick={() => { logout(); closeMenu(); }}>
              <LogOut size={16} /> Sign out
            </button>
          ) : (
            <Link href="/login" className="btn btn-ghost btn-block" onClick={closeMenu}>
              Sign in
            </Link>
          )}
        </div>

        {/* Social icons row at bottom */}
        <div className="mob-social-row">
          <a href={SITE.social.facebook}  target="_blank" rel="noopener noreferrer" aria-label="Facebook"  className="mob-social mob-social-fb"><FacebookIcon  width={20} height={20} /></a>
          <a href={SITE.social.linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className="mob-social mob-social-li"><LinkedinIcon  width={20} height={20} /></a>
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mob-social mob-social-ig"><InstagramIcon width={20} height={20} /></a>
          <a href={wa}                    target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"  className="mob-social mob-social-wa"><WhatsappIcon  width={20} height={20} /></a>
        </div>

        <p className="mob-drawer-brand">{SITE.name} · Smart IT · Real Growth</p>
      </div>
    </>
  );
}
