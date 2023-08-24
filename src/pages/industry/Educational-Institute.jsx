import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const EducationalInstitute = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);


  return (
    <>
      <Head>
        <title>Software Development Company Macomb | Web apps development Macomb</title>
        <meta name="DESCRIPTION" content="As a Software development company, we deliver website design and development, ecommerce website, custom software, cloud computing services and SEO Services." />
      </Head>

      <MainLayout>
        <main className="about-page style-5">
          <header className={`about-page-sec style-5 pt-5}`}>
            <div className="content border-0 p-0">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 order-2 order-lg-0">
                    <div className="section-head mb-30 mt-4 style-5">
                      <h2>Educational <span>institute</span> </h2>
                    </div>
                    <p className='mb-2'>
                      <strong>Personalized Learning with Technology:</strong> Technology facilitates personalised learning experience, engaging students with relevant content. It improves student outcomes and helps institutions cater to diverse learning styles.   
                    </p>
                    <p className='mb-2'>
                      <strong>Efficient Teaching through Technology:</strong> Advanced technological aids optimize teaching productivity, better resource utilization. This improves educators' effectiveness and enriches student learning experiences.  
                    </p>
                    <p className='mb-2'>
                      <strong>Online Learning Platforms and Learning Management Systems (LMS):</strong>IT-enabled LMS offer global access to courses and materials. Flexibility for content access, assignments, and discussions leading to expanding educational reach. 
                    </p>
                    <p className='mb-2'>
                      <strong>Data Analytics for Student Performance:</strong> IT tools collect and analyse student performance data, helping institutions enhance teaching strategies and interventions. Predictive analytics assists in identifying areas needing improvement, predicting risks, and ultimately improving student retention. 
                    </p>
                  </div>
                  <div className="col-lg-6">
                  <div className="img">
                      <img src="/assets/img/industry/Educational-Institute2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </main>
      </MainLayout>
    </>
  )
}

export default EducationalInstitute;