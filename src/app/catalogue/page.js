import PageHero from '@/components/PageHero';
import CatalogueView from '@/components/CatalogueView';
import catalogueBanner from '../../../assets/catalogue1.png';

export const metadata = { title: 'Catalogue', description: 'The complete TasmaFive Solutions services catalogue with web package pricing.' };

export default function Catalogue() {
  return (
    <>
      <PageHero title="Catalogue" sub="View our complete services catalogue and download the PDF." crumbs={[['Catalogue']]} bgImage={catalogueBanner} />
      <section className="section tight"><div className="container"><CatalogueView /></div></section>
    </>
  );
}
