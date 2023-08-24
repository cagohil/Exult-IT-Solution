import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const Manufacturing = () => {
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
                      <h2>Manufacturing<span>industry</span> </h2>
                    </div>
                    <p className='mb-2'>
                      <strong>Increase productivity:</strong> MES (Manufacturing Execution Systems) provides real-time monitoring of production processes, resource allocation, and quality control, leading to improved manufacturing efficiency and productivity. 
                    </p>
                    <p className='mb-2'>
                      <strong>Computer-Aided Design (CAD):</strong> CAD software facilitates product design, prototyping, and simulation, leading to hastened product development and reduced time-to-market for manufacturers. 
                    </p>
                    <p className='mb-2'>
                      <strong>Robotics and Automation:</strong>Robotics and automation optimize production by improve efficiency, reduce labour costs, and maintain product quality. Collaborative robots (cobots) work alongside human workers, enhancing process speed and precision. 
                    </p>
                    <p className='mb-2'>
                      <strong>Energy Efficiency and Sustainability:</strong> IT systems monitor and optimize energy consumption, reducing environmental impact and operational costs. Sustainability initiatives enhance brand reputation and attract environmentally conscious customers. 
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="img">
                      <img src="/assets/img/industry/Manufacturing.jpg" alt="" />
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

export default Manufacturing;