import { Clock, Mail, Phone } from 'lucide-react';
import LangSwitcher from './LangSwitcher';
import { SITE } from '@/data/site';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-in">
        <ul className="topbar-info">
          <li><Phone size={14} /><a href={`tel:${SITE.phones[0]}`}>{SITE.phones[0]}</a></li>
          <li className="hide-md"><Mail size={14} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li className="hide-md"><Clock size={14} />{SITE.hours}</li>
        </ul>
        <LangSwitcher />
      </div>
    </div>
  );
}
