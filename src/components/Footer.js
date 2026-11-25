import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';

const QUICK = [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['Catalogue', '/catalogue'], ['Certificates', '/certificates'], ['Blogs', '/blogs'], ['Contact', '/contact']];
export default function Footer() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello TasmaFive Solutions, I would like to discuss a project.')}`;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <h2>Have a project in mind? Let&apos;s build it.</h2>
            <p>Tell us what you need. We reply within 24 hours with a clear plan and quote.</p>
          </div>
          <div className="footer-cta-btns">
            <Link href="/contact" className="btn btn-white btn-lg">Contact us <ArrowUpRight size={18} /></Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg"><WhatsappIcon width={18} height={18} /> WhatsApp</a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo height={52} />
            <p>Professional IT company providing website development, software solutions, digital marketing, cloud and government project services.</p>
            <div className="social-row">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon width={18} height={18} /></a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon width={18} height={18} /></a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon width={18} height={18} /></a>
            </div>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul className="flinks">{QUICK.map(([l, h]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
          </div>
          <div>
            <h3>Our services</h3>
            <ul className="flinks">
              {SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <ul className="fcontact">
              <li><MapPin size={18} /><span>{SITE.address}</span></li>
              {SITE.phones.map((p) => <li key={p}><Phone size={18} /><a href={`tel:${p}`}>{p}</a></li>)}
              <li><Mail size={18} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <div className="container footer-bar-in">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Top IT Company in Kanpur | Digital Solutions Across India &amp; Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
