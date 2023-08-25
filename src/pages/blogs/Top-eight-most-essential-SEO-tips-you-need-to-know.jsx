import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components


function TopmostEssentialSEOTips() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Top 8 Essential SEO Tips For Your Website That You Must Know"</title>
        <meta name="description" content="Website optimization for all types of devices is crucial to increase user experience. A well-navigated site helps both search engines and visitors to identify it. It allows customers to look for products in the least amount of time." />
      </Head>

      <MainLayout>
        <main className="services-details-page style-5">
          <section className="ser-details pt-5 pb-4 overflow-hidden">
            <div className="container pt-3">
              <div className="main-info">

                <p className="mb-20">
                  SEO means <Link href="" legacyBehavior><a href="https://www.exultitsolution.com/services/search-engine-optimization/" target='_blank' className='text-primary'> Search Engine Optimization. </a></Link> It is a technique to increase traffic to your website through organic search engine results.
                </p>
                <p className="mb-30">
                  <strong>Below are 8 Essential SEO tips for your website that you should follow:</strong>
                </p>

                <h3 className="text-capitalize mb-20"> Improve user experience </h3>
                <p className="mb-30">
                  Website optimization for all types of devices is crucial to increase user experience. A well-navigated site helps both search engines and visitors to identify it. It allows customers to look for products in the least amount of time.
                </p>


                <h3 className="text-capitalize mb-20"> Quality and Genuine content </h3>
                <p className="mb-30">
                  Write high-quality content which is original and, at the same time, sounds humane. Make sure the content is informative and action-driven. It is now the most crucial factor in SEO.
                </p>

                <h3 className="text-capitalize mb-20"> Use keywords at the appropriate place. </h3>
                <p className="mb-30">
                  Most people know that a specific keyword is an integral part of SEO to rank your page. But what one should focus on is arranging those keywords in the correct number of times at the right places. It primarily includes the title, webpage URL, and first 100 words of the content.
                </p>

                <h3 className="text-capitalize mb-20"> Add visual graphic </h3>
                <p className="mb-30">
                  Adding infographics and visuals such as images and videos attract your audience and makes the page more appealing. It is also a great way to bring traffic and backlinks to your site. But it is important to add text to your infographics for the search engine to recognize them.
                </p>

                <h3 className="text-capitalize mb-20"> Optimize images with proper keywords </h3>
                <p className="mb-30">
                  Search Engine giants are captivated with images. When someone is looking for a significant photo, they search with keywords. Hence, it is essential to use suitable keywords in your image name and description.
                </p>


                <h3 className="text-capitalize mb-20"> Speeding up your website </h3>
                <p className="mb-30">
                  Page speed is a significant part of SEO. People won’t stay on your site if it takes too much time to process. Also, it creates a wrong impression on the customer’s mind and discourages them from buying your product or services. So remove all insignificant large images and unnecessary plug-ins to get rid of page load.
                </p>

                <h3 className="text-capitalize mb-20"> Simple URL structure </h3>
                <p className="mb-20">
                  A simple URL structure is vital for your audience as well as search engines to understand your purpose. Choose a static URL that includes your keyword and gives an audience what to anticipate from the content.
                </p>
                <p className="mb-30">
                  E.g., https://blog/10-most-essential-seo-tips-for-your-website-that-youu-must-know/.
                </p>

                <h3 className="text-capitalize mb-20"> Focus on your niche </h3>
                <p className="mb-20">
                  Make sure you publish content that focuses on a particular niche. It helps in other SEO practices. For any business, knowing about your target audience is a must. Thus with the right keyword and niche-based content, it is easy to bring traffic that profits you.
                </p>

              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  )

}

export default TopmostEssentialSEOTips