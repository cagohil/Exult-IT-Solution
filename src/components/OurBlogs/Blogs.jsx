import { useEffect } from 'react';
import Link from 'next/link';
import blogs from '@data/OurBlogs/blogsDetails.json';

const Projects = ({ style = "4" }) => {
  const blogsData =  blogs;

  useEffect(() => {
    setTimeout(() => {
      if (!mixitup) return;
      mixitup('.portfolio-projects')
    }, 0);
  }, []);

  const whiteColor = {
    color:"white"
  }

  return (
    <section className={`portfolio-projects pb-20 style-1 style-5`}>
      <div className="container">
        <div className={`section-head text-center style-${style} ${style === '5' ? 'mb-60':'mb-40'}`}>
          <h2 className="mb-20" style={{...whiteColor}}>Our<span style={{...whiteColor}}>Blogs</span> </h2>
          <p style={{...whiteColor, maxWidth:"700px", margin:"auto"}}>Get inspired by our latest tips and articles! Check out our various <a target='_blank' href="https://exultitsolution.com">exultitsolution.com</a>  blogs today to help you improve your workflow, efficiency, and professional skillsets.</p>
        </div>
        <div className="controls bg-white rounded ">
          {
            blogsData.filters.map((filter, i) => (<button key={i} type="button"  className="control" data-filter={filter.filter}>{ filter.title }</button>))
          }
        </div>
        <section className="portfolio style-1">
          <div className="content">
            <div className="row mix-container">
              {
                blogsData.blogs.map((blog, i) => (
                  <div className={`col-lg-4 mix ${blog.filter}`} key={i} >
                    <Link href={blog.link} legacyBehavior>
                    <div className={`portfolio-card ${i !== blogs.blogs.length - 1 ? 'mb-50':''}`}>
                      <div className="img">
                        <img src={blog.image} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                            { blog.title }
                        </h5>
                        <div className="text">
                          { blog.details }
                        </div>
                        <div className="tags">
                          {
                            blog.tags.map((tag, i) => (<a key={i} href="#" className="me-1">{ tag }</a>))
                          }
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects