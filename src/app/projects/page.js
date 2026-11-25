import PageHero from '@/components/PageHero';
import { PROJECTS } from '@/data/projects';
import projectBanner from '../../../assets/project1.png';

export const metadata = { title: 'Projects', robots: { index: false } };

export default function Projects() {
  return (
    <>
      <PageHero title="Our projects" sub="A selection of work across healthcare, education, e-commerce, logistics and government." crumbs={[['Projects']]} bgImage={projectBanner} />
      <section className="section">
        <div className="container proj-grid">
          {PROJECTS.map((p) => (
            <article className="proj" key={p.id}>
              <div className="proj-top"><span className="badge">{p.type}</span><small>{p.stack}</small></div>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
