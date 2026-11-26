import Seo from '@components/site/Seo';
import PageHero from '@components/site/PageHero';
import Button from '@components/site/Button';
import TextReveal from '@components/anm/text-reveal';
import ElasticDivider from '@components/anm/elastic-divider';

export default function About() {
  return (
    <>
      <Seo title="Software Development Company Macomb | Web apps development Macomb" />
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title={<>About <span className="hl">Us</span></>}
        sub="Your idea, our expert hands makes the product success. We have expert hand in multiple technology."
      />

      <section className="section">
        <div className="wrap about-split">
          <div>
            <p className="eyebrow" data-scramble>Why Choose Us</p>
            <TextReveal as="h2" className="h2" type="words" stagger={0.06}>
              Why <span className="hl">Choose Us?</span>
            </TextReveal>
            <div className="prose" style={{ marginTop: 32 }} data-reveal>
              <p>
                Exult IT Solution is a software development and IT-services based company which provides a range of services such as IT consulting, Application and Software development and customizations, Application Maintenance, and AWS server set up and configuration. We also have experience in delivering our facilities in verticals like API’s Development, Mobile and Web apps development, and Remote Database Administration services.
              </p>
              <p>
                We have a team of professionals with expertise in their respective fields that provide highly satisfactory and quality services according to your needs.
              </p>
              <p>
                Our multi-level approach along with the world-class standards makes us a perfect choice for your growth-oriented business.
              </p>
            </div>
          </div>
          <figure className="about-split__img" data-reveal style={{ margin: 0 }}>
            <img src="/assets/img/about/about-img-1.png" alt="Illustration of a business growing with Exult" />
          </figure>
        </div>
      </section>

      <div className="wrap">
        <ElasticDivider className="divider-brand" color="#157efb" weight={1.5} maxAmplitude={44} />
      </div>

      <section className="section">
        <div className="wrap">
          <div className="pillars">
            <article className="pillar" data-reveal>
              <span className="pillar__num">01</span>
              <h3>Our Goal</h3>
              <p>
                To maintain a user-friendly and healthy professional relationship by analyzing the current as well as the future needs of your business in this globalized world.
              </p>
            </article>
            <article className="pillar pillar--b" data-reveal>
              <span className="pillar__num">02</span>
              <h3>Philosophy</h3>
              <p>
                We believe in creating a thriving and interactive relationship with the client and help them out whenever they need us. Our efficient work ethics ensures that business solutions are delivered at the earliest possible.
              </p>
            </article>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 40 }}>
            <Button href="/contact-us/">Contact Us</Button>
            <Button href="/services/website-development/" variant="ghost">Explore Services</Button>
          </div>
        </div>
      </section>
    </>
  );
}
