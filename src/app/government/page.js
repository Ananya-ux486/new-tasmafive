import Link from 'next/link';
import { ArrowUpRight, Award, BadgeCheck, Building2, FileCheck2, Landmark, Lock, ServerCog } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata = { title: 'Government Solutions', description: 'IT services for government departments and public-sector projects: portals, e-governance software, cloud hosting and digitisation.' };

const OFFER = [
  [Landmark, 'Portals & websites', 'Accessible, secure department websites and citizen service portals with document downloads and grievance forms.'],
  [Building2, 'E-governance software', 'Workflow, approvals, records and reporting software built around departmental processes.'],
  [ServerCog, 'Cloud hosting', 'AWS and Azure hosting with backups, monitoring, access control and clear handover documentation.'],
  [FileCheck2, 'Digitisation & BPO/KPO', 'Back-office operations, data entry and call-centre support within the scope of our ISO 9001 certification.'],
  [Lock, 'Security & audit trails', 'Role-based access, encryption and audit logging so every action is traceable.'],
  [BadgeCheck, 'Support & maintenance', 'Annual maintenance, bug-fix SLAs and training for department staff.'],
];
const DOCS = [
  ['Startup India recognition', 'DPIIT-recognised startup in IT Services.'],
  ['ISO 9001:2015', 'Quality management for software, web, cloud and BPO/KPO services.'],
  ['GST registration', 'Regular registration, Uttar Pradesh.'],
  ['Udyam (MSME)', 'Micro enterprise, services activity.'],
];
const STEPS = [['Requirement study', 'We read the tender or scope document and map every requirement.'], ['Compliance documents', 'Registrations and certificates are prepared and checked for consistency.'], ['Technical proposal', 'Architecture, timeline, team and security approach, written clearly.'], ['Delivery & audit', 'Milestone-based delivery with testing and documentation.'], ['Support', 'Maintenance, training and ongoing support after go-live.']];

export default function Government() {
  return (
    <>
      <PageHero title="IT solutions for government and public-sector projects" sub="The engineering of a modern IT company, with the registrations and certifications that tender evaluation teams ask for." crumbs={[['Services', '/services'], ['Government']]}>
        <div className="hero-cta">
          <Link href="/contact?reason=Government%20%2F%20Tender%20enquiry" className="btn btn-primary btn-lg">Tender enquiry <ArrowUpRight size={18} /></Link>
          <Link href="/certificates" className="btn btn-ghost btn-lg">View certificates</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="sec-head"><h2>What we deliver</h2></div>
          <div className="grid-3">
            {OFFER.map(([Icon, t, d]) => (
              <div className="plain-card" key={t}><Icon size={26} className="ico" /><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-peach">
        <div className="container">
          <div className="sec-head"><h2>Tender-ready documents</h2><p>Sign in to view watermarked verification copies on the Certificates page.</p></div>
          <ul className="docs">
            {DOCS.map(([t, d]) => (<li key={t}><Award size={22} /><div><strong>{t}</strong><p>{d}</p></div></li>))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><h2>How we handle a tender</h2></div>
          <ol className="steps five">
            {STEPS.map(([t, d], i) => (<li key={t}><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></li>))}
          </ol>
        </div>
      </section>
    </>
  );
}
