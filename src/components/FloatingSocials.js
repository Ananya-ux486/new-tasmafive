import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { SITE } from '@/data/site';

export default function FloatingSocials() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello TasmaFive Solutions, I would like to know more about your services.')}`;
  return (
    <aside className="float-socials" aria-label="Social links">
      <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="fs fs-fb"><FacebookIcon width={18} height={18} /></a>
      <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="fs fs-in"><LinkedinIcon width={18} height={18} /></a>
      <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="fs fs-ig"><InstagramIcon width={18} height={18} /></a>
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fs fs-wa"><WhatsappIcon width={22} height={22} /></a>
    </aside>
  );
}
