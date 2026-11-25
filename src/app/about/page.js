import Image from 'next/image';
import { Target, Rocket, ShieldCheck, Lightbulb, Trophy, Handshake, CheckCircle2, Lock, PenTool, HeadphonesIcon } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Counter from '@/components/Counter';
import about2 from '../../../assets/about2.png';

export const metadata = { title: 'About Us', description: 'TasmaFive Solutions is an IT company in Kanpur building websites, software, cloud and digital growth solutions for businesses and government projects.' };

const VALUES = [
  { n: '01', icon: ShieldCheck,  title: 'Integrity',   desc: 'Honest timelines, honest scope and honest communication with every client.' },
  { n: '02', icon: Lightbulb,    title: 'Innovation',  desc: 'Modern stacks like MERN, Laravel and Next.js keep your product future-ready.' },
  { n: '03', icon: Trophy,       title: 'Ownership',   desc: 'We treat every project like our own: quality, speed and accountability included.' },
  { n: '04', icon: Handshake,    title: 'Partnership', desc: 'Long-term relationships over one-time deliveries. Your growth is our success metric.' },
];

const TRUST = [
  { n: '01', icon: CheckCircle2,     title: 'Transparent delivery',    desc: 'Clear milestones, regular updates and no hidden costs.' },
  { n: '02', icon: Lock,             title: 'Security first',           desc: 'SSL, secure authentication, firewalls and best practices in every build.' },
  { n: '03', icon: PenTool,          title: 'Business-focused design',  desc: 'We design for leads, trust and conversions, not just pages.' },
  { n: '04', icon: HeadphonesIcon,   title: 'Post-launch support',      desc: 'Direct consultation and maintenance after go-live.' },
];

export default function About() {
  return (
    <>
      {/* Hero — about1.png as full background */}
      <PageHero
        title="We build digital products that businesses trust"
        sub="From Kanpur to global markets: websites, software, cloud and digital growth solutions crafted for performance, security and long-term results."
        crumbs={[['About Us']]}
        bgImage="/about1.png"
      />

      {/* About — about2.png replaces CloudScene, facts removed */}
      <section className="section">
        <div className="container two-col">
          <div className="about-left">
            <h2>Smart IT solutions. Full control. Real results.</h2>
            <div className="about-img-wrap">
              <Image
                src={about2}
                alt="TasmaFive Solutions team at work"
                className="about-img"
                sizes="(max-width: 1020px) 100vw, 46vw"
                priority
              />
            </div>
          </div>
          <div className="prose">
            <p>TasmaFive Solutions is a professional IT company based in Kanpur, delivering website development, custom software, digital marketing, cloud solutions and government project services.</p>
            <p>We combine modern tech stacks, including MERN, Laravel and Next.js, with transparent communication so every client, from local businesses to international partners, gets solutions built for performance, security and long-term growth.</p>
            <p>Whether you need a high-converting website, a secure enterprise portal or cloud infrastructure that scales with demand, our team plans, builds and supports products that drive measurable outcomes.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-peach about-mv-section">
        <div className="container about-mv-grid">
          <div className="about-mv-photo">
            <Image src={about2} alt="TasmaFive team collaborating" fill className="about-mv-img" sizes="(max-width: 1020px) 100vw, 48vw" />
            <div className="about-mv-photo-overlay" />
          </div>
          <div className="about-mv-cards">
            <div className="about-mv-card">
              <div className="about-mv-icon"><Target size={28} /></div>
              <div>
                <h3 className="about-mv-title">Our <span className="accent-orange">Mission</span></h3>
                <p>To deliver smart, secure and scalable IT solutions that help businesses grow faster with full control and real results.</p>
              </div>
            </div>
            <div className="about-mv-card">
              <div className="about-mv-icon"><Rocket size={28} /></div>
              <div>
                <h3 className="about-mv-title">Our <span className="accent-orange">Vision</span></h3>
                <p>To become a trusted digital partner for startups, enterprises and government projects across India and global markets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats">
        <div className="container stats-grid">
          <div><strong><Counter to={50} suffix="+" /></strong><span>Projects delivered</span></div>
          <div><strong><Counter to={98} suffix="%" /></strong><span>Client satisfaction</span></div>
          <div><strong><Counter to={12} suffix="+" /></strong><span>Industries served</span></div>
          <div><strong><Counter to={10} suffix="+" /></strong><span>Countries reached</span></div>
          <div><strong><Counter to={5} decimals={1} /></strong><span>Google rating</span></div>
          <div><strong>24/7</strong><span>Support availability</span></div>
        </div>
      </section>

      {/* Why clients trust us — numbered steps */}
      <section className="section">
        <div className="container">
          <div className="sec-head center">
            <h2>Why clients trust us</h2>
            <p>Four commitments we make to every client, on every project.</p>
          </div>
          <div className="about-steps-grid">
            {TRUST.map(({ n, icon: Icon, title, desc }) => (
              <div className="about-step" key={n}>
                <div className="about-step-top">
                  <span className="about-step-num">{n}</span>
                  <span className="about-step-line" aria-hidden="true" />
                </div>
                <div className="about-step-icon"><Icon size={26} /></div>
                <h3 className="about-step-title">{title}</h3>
                <p className="about-step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What guides every project — numbered steps */}
      <section className="section section-peach">
        <div className="container">
          <div className="sec-head center">
            <h2>What guides every project</h2>
            <p>The four values we hold ourselves to, from first brief to final delivery.</p>
          </div>
          <div className="about-values-steps">
            {VALUES.map(({ n, icon: Icon, title, desc }) => (
              <div className="about-val-step" key={n}>
                <div className="about-val-left">
                  <span className="about-val-num">{n}</span>
                  <div className="about-val-icon"><Icon size={24} /></div>
                </div>
                <div className="about-val-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
