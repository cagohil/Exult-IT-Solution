import Seo from '@components/site/Seo';
import ImageFlyIn from '@components/anm/image-fly-in';
import FilterGrid from '@components/site/FilterGrid';
import techData from '@data/Technologies/TechDetails.json';

const LABEL = Object.fromEntries(techData.filters.map((f) => [f.filter.replace(/^\./, ''), f.title]));
const ASPECTS = ['square_lg', 'square_sm', 'square_sm', 'square_lg'];

// a spread of logos from every group for the fly-in field
const flyLogos = techData.filters
  .filter((f) => f.filter !== 'all')
  .flatMap((f) => techData.techs.filter((t) => `.${t.filter}` === f.filter).slice(0, 3))
  .slice(0, 16)
  .map((t, i) => ({ src: t.image, alt: '', aspect: ASPECTS[i % ASPECTS.length], hideMobile: i % 2 === 1 }));

export default function Technologies() {
  return (
    <>
      <Seo title="Our Technologies - Exult It Solution" />
      <h1 className="sr-only">Our Technologies</h1>
      <div className="tech-hero">
        <ImageFlyIn
          className="ifi-brand"
          images={flyLogos}
          headline="Our Technologies"
          support="Your idea, our expert hands makes the product success. We have expert hand in multiple technology."
          duration={12}
          pan={30}
        />
      </div>

      <section className="section section--mist">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div style={{ display: 'grid', gap: 22 }}>
              <p className="eyebrow" data-scramble>Stack · {techData.techs.length} tools</p>
              <h2 className="h2" data-reveal>Our <span className="hl">Technologies</span></h2>
            </div>
            <p className="lede" data-reveal>Filter by layer to see the frameworks, databases, clouds and tools our team ships with.</p>
          </div>
          <FilterGrid
            label="Filter technologies"
            filters={techData.filters}
            gridClass="tech-grid"
            items={techData.techs.map((t) => ({
              key: t.name,
              filter: t.filter,
              node: (
                <div className="tech">
                  <img src={t.image} alt="" loading="lazy" />
                  <span>{t.name}</span>
                  <small>{LABEL[t.filter]}</small>
                </div>
              ),
            }))}
          />
        </div>
      </section>
    </>
  );
}
