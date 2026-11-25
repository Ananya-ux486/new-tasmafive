import PageHero from '@/components/PageHero';
import CertGallery from '@/components/CertGallery';
import certificateBanner from '../../../assets/certificate1.png';

export const metadata = { title: 'Certificates', robots: { index: false } };

export default function Certificates() {
  return (
    <>
      <PageHero title="Certificates & registrations" sub="Verification copies of our registrations, shared for client and tender evaluation. These copies are watermarked and not available for download." crumbs={[['Certificates']]} bgImage={certificateBanner} />
      <section className="section">
        <div className="container"><CertGallery /></div>
      </section>
    </>
  );
}
