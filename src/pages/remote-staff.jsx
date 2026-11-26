import Seo from '@components/site/Seo';
import PageHero from '@components/site/PageHero';
import Button from '@components/site/Button';
import TextReveal from '@components/anm/text-reveal';
import MagneticTagCloud from '@components/anm/magnetic-tag-cloud';
import Accordion from '@components/anm/accordion';
import ProcessRail from '@components/anm/process-rail';

const DOMAINS = [
  'IT Sector', 'Graphic Designing', 'Mobile and Web Development', 'CRM Software Development',
  'IT and Tech Support', 'Accounting and Finance', 'Virtual Assistant', 'Content Writing',
  'Multimedia and Animation', 'Digital Marketing', 'Data Entry', 'HR and Recruitment',
];
const COLORS = ['cobalt', 'white', 'signal', 'ink', 'stone', 'white', 'cobalt', 'ink', 'white', 'signal', 'stone', 'cobalt'];

const REASONS = [
  { title: 'Access to a wider pool of talent', text: 'As you get access to a global workforce, there is no limit to talent and diversity you can achieve in your team' },
  { title: 'Reduced office costs', text: 'You won’t need to increase your office space to accommodate your employees. Hence, you can say goodbye to ever-increasing office/ rental space costs.' },
  { title: 'Saves time', text: 'No need to travel, no unnecessary office gossips. Pure focus on getting the work done.' },
  { title: 'Fewer employee costs', text: 'Depending on your company’s norms, you can save a lot on payroll expenditures, documentation, employee assistances, various taxes, insurances, etc. to name a few.' },
  { title: 'Increased flexibility & scalability', text: 'You can easily hire a remote employee as per your needs, any time. Hourly or project-based, the choice is yours to make. It also becomes easier to scale your operations across a wider geographic region/market.' },
];

const STEPS = [
  { num: '01', title: 'What do you NEED?', text: 'We offer a variety of remote staffing services, including project-based staff augmentation and dedicated teams.' },
  { num: '02', title: 'Choose your SERVICE TYPE', text: 'Get the best cost-effective solution for your needs with one of our flexible options.' },
  { num: '03', title: 'Select your TEAM SIZE', text: 'Project-based or full-time? Our experts will find the perfect match for you in no time!' },
  { num: '04', title: 'CONNECT with us to GET GOING', text: 'Simply reach out to us and get started today!' },
];

export default function RemoteStaff() {
  return (
    <>
      <Seo title="Remote Staff - Exult It Solution" />
      <PageHero
        crumbs={[{ label: 'Remote Staff' }]}
        title={<>Exult IT is the <span className="hl">Solution.</span></>}
        sub={<>Are you struggling to find the right talent for the job? <br />Finding it difficult to grow your business?</>}
      />

      <section className="section">
        <div className="wrap rs-intro">
          <div>
            <p className="eyebrow" data-scramble>Remote Staffing</p>
            <TextReveal as="h2" className="h2" type="words" stagger={0.06} >
              Pick The Best <span className="hl">In Any Domain</span>
            </TextReveal>
            <p className="lede" style={{ marginTop: 24 }} data-reveal>We’ll get you the perfect team, on time and within your budget.</p>
          </div>
          <div className="prose" data-reveal>
            <p>Our dedicated team of experts makes it easy for you to cherry-pick the finest of talents from across the globe so that you can stay carefree of all the daily tasks of your business and focus on increasing your ROI.</p>
            <p>We offer Remote Staffing services which can help you grow your business and compete with the best of them.</p>
            <p>Get access to dedicated remote staff at an affordable price that’s been evaluated by us so you don’t have to do it yourself.</p>
          </div>
        </div>
      </section>

      <section className="rs-cloud" aria-labelledby="domains-title">
        <div className="rs-cloud__head">
          <p className="eyebrow" data-scramble>Domains</p>
          <h2 id="domains-title" className="h2" data-reveal>Talent for <span className="hl">every team</span></h2>
          <p className="lede" data-reveal>Sweep your cursor through the tags: these are the domains we hire for.</p>
        </div>
        <MagneticTagCloud
          className="mtc-brand rs-cloud__tags"
          tags={DOMAINS.map((label, i) => ({ label, href: '/contact-us/', color: COLORS[i] }))}
          maxRows={5}
        />
        <p className="rs-cloud__more">And a lot more…</p>
      </section>

      <section className="section">
        <div className="wrap rs-intro">
          <div>
            <p className="eyebrow" data-scramble>Why remote</p>
            <h2 className="h2" data-reveal>A Remote Team- <span className="hl">WHY?</span></h2>
          </div>
          <div data-reveal>
            <Accordion className="acc-brand" allowMultiple={false}>
              {REASONS.map((r, i) => (
                <Accordion.Item key={r.title} defaultOpen={i === 0} enableStagger>
                  {({ toggle, isOpen, contentRef, iconRef, verticalBarRef }) => (
                    <>
                      <button type="button" onClick={toggle} className="accordion_trigger" aria-expanded={isOpen}>
                        <span className="accordion_title"><span className="acc-num">{String(i + 1).padStart(2, '0')}</span>{r.title}</span>
                        <svg ref={iconRef} className="accordion_icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path ref={verticalBarRef} d="M8 1V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div ref={contentRef} className="accordion_content">
                        <p className="accordion_text">{r.text}</p>
                      </div>
                    </>
                  )}
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <p className="eyebrow" data-scramble>WE, Exult IT Solutions, FOR YOU</p>
          <p className="statement" style={{ marginTop: 28, maxWidth: '30ch' }} data-reveal>
            Whether you are an upcoming next-door small business or a tech start-up with several rounds of funding, <strong>remote staffing is the best way</strong> to stay ahead of all the daily problems the business throws at you.
          </p>
          <div className="prose" style={{ marginTop: 36, maxWidth: 720 }} data-reveal>
            <p>With over 10 years of experience in providing expert business solutions, we know what it takes to build a successful remote staffing team. Our services are tailored to your needs and designed for long-term success.</p>
            <p>Hire the best people to do the job for you so you can fully focus on your business going forward.</p>
          </div>
        </div>
      </section>

      <section className="rail-sec">
        <div className="wrap section-head" style={{ paddingTop: 'var(--section)', marginBottom: 0 }}>
          <p className="eyebrow" data-scramble>Process</p>
          <h2 className="h2" data-reveal>START HIRING in these <span className="hl">simple STEPS</span></h2>
        </div>
        <ProcessRail className="rail-brand" steps={STEPS} scrub={0.6} beadSize={12} sticky />
      </section>

      <section className="section">
        <div className="wrap">
          <div className="hire-band" data-reveal>
            <h2>HIRE AN <span>EMPLOYEE</span> WITH US and become a part of our long list of happy clients that have <span>grown</span> their <span>business</span> with us!!</h2>
            <div className="hire-band__ctas">
              <Button href="/about-us/" variant="light">About Us</Button>
              <Button href="/contact-us/" variant="glass">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
