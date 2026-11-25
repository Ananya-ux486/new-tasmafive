'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bot, ChevronDown, CreditCard, LogOut, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV } from '@/data/site';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sub, setSub] = useState(null);

  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const active = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]));

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-in">
        <Logo />
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <div className="nav-drop" key={item.label}>
                <button
                  type="button"
                  className={`nav-link ${active(item.href) ? 'is-active' : ''}`}
                  aria-expanded={sub === item.label}
                  onClick={() => setSub(sub === item.label ? null : item.label)}
                >
                  {item.label} <ChevronDown size={15} />
                </button>
                <div className={`drop ${sub === item.label ? 'is-open' : ''}`}>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href}>{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={`nav-link ${active(item.href) ? 'is-active' : ''}`}>
                {item.label}
              </Link>
            )
          )}
          <div className="nav-mobile-actions">
            {user ? (
              <button className="btn btn-ghost" onClick={logout}><LogOut size={16} /> Sign out</button>
            ) : (
              <Link href="/login" className="btn btn-ghost">Sign in</Link>
            )}
          </div>
        </nav>
        <div className="header-actions">
          {user ? (
            <button className="link-btn hide-sm" onClick={logout} title={user.email}>
              <LogOut size={16} /> {user.name}
            </button>
          ) : (
            <Link href="/login" className="link-btn hide-sm">Sign in</Link>
          )}
          <button
            type="button"
            className="bot-btn"
            aria-label="Open AI assistant"
            onClick={() => window.dispatchEvent(new Event('tf:chat'))}
          >
            <Bot size={22} />
          </button>
          <Link href="/payment" className="btn btn-primary btn-sm">
            <CreditCard size={16} /> Pay Now
          </Link>
          <button type="button" className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
