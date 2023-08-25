import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const AutomotiveIndustry = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);


  return (
    <>
      <Head>
        <title>Software Development Company Macomb | Web apps development Macomb</title>
        <meta name="description" content="As a Software development company, we deliver website design and development, ecommerce website, custom software, cloud computing services and SEO Services." />
      </Head>

      <MainLayout>
        <main className="about-page style-5">
          <header className={`about-page-sec style-5 pt-5}`}>
            <div className="content border-0 p-0">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 order-2 order-lg-0">
                    <div className="section-head mb-30 mt-4 style-5">
                      <h2>Automotive<span>industry</span> </h2>
                    </div>
                    <p className='mb-2'>
                    <strong>Enhance vehicle drive in Experience:</strong> Cloud computing modernizes in-vehicle driver experiences with location data, voice assistants and enabling features like navigation, route-planning, driver monitoring and safety.   
                    </p>
                    <p className='mb-2'>
                    <strong>Data analytics:</strong> Data analytics using advanced technologies offer real-time insights for better vehicle management.   
                    </p>
                    <p className='mb-2'>
                    <strong>Optimize performance:</strong> Optimizing mobile asset usage, enhancing vehicle performance, identifying productive road time, and improving fuel efficiency using IoT sensors and AI-based services.    
                    </p>
                    <p className='mb-2'>
                    <strong>Fleet management:</strong> It streamline operations and Fleet management benefits from data analysis tools that streamline operations and reduce costs.     
                    </p>
                    
                  </div>
                  <div className="col-lg-6">
                    <div className="img">
                      <img src="/assets/img/industry/Automotive-Industry2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <p className='mb-2'>
                    <strong>Meet rapidly evolving customer expectations:</strong> Advance analytics can provide data, track engagements, efficient communications and automate workflow.    
                    </p>
                </div>
              </div>
            </div>
          </header>
        </main>
      </MainLayout>
    </>
  )
}

export default AutomotiveIndustry;