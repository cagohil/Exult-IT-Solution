import Link from 'next/link';
import Seo from '@components/site/Seo';
import PageHero from '@components/site/PageHero';
import FilterGrid from '@components/site/FilterGrid';
import { ArrowUpRight } from '@components/site/Icons';
import blogs from '@data/OurBlogs/blogsDetails.json';

export default function Blog() {
  return (
    <>
      <Seo title="Blog - Exult It Solution" />
      <PageHero
        crumbs={[{ label: 'Blog' }]}
        title={<>Our <span className="hl">Blogs</span></>}
        sub={<>Get inspired by our latest tips and articles! Check out our various <a href="https://exultitsolution.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>exultitsolution.com</a> blogs today to help you improve your workflow, efficiency, and professional skillsets.</>}
      />
      <section className="section">
        <div className="wrap">
          <FilterGrid
            label="Filter articles"
            filters={blogs.filters}
            gridClass="post-grid"
            items={blogs.blogs.map((b) => ({
              key: b.link,
              filter: b.filter,
              node: (
                <Link href={b.link} className="post">
                  <div className="post__img"><img src={b.image} alt="" loading="lazy" /></div>
                  <div className="post__body">
                    <div className="post__tags">{b.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    <h3>{b.title}</h3>
                    <p>{b.details}</p>
                    <span className="text-link">Read article <ArrowUpRight /></span>
                  </div>
                </Link>
              ),
            }))}
          />
        </div>
      </section>
    </>
  );
}
