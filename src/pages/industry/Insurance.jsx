import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const Insurance = () => {
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
                      <h2>Insurance<span>industry</span> </h2>
                    </div>
                    <p className='mb-2'>
                      <strong>Digital Customer Engagement:</strong> IT enabled online portals and apps provide easy access to policy info, claims, and account management. Personalization using advanced data analysis and AI tailors offerings to precise customer needs.
                    </p>
                    <p className='mb-2'>
                      <strong>Self-Service Platforms: </strong> Self-service options streamline solutions, boosting customer satisfaction by reducing manual interactions.  
                    </p>
                    <p className='mb-2'>
                      <strong>Operational efficiency:</strong> Digital automation lowers operational costs and accelerates outcomes. Insurers adopt flexible, simplified operations to enhance user experience and save costs.
                    </p>
                    <p className='mb-2'>
                      <strong>Data analytics:</strong> Advanced technology involves data mining tools and predictive quantitative which are useful to improve the fraud detection process, helping prevent claims pay-outs and enhance overall risk management.
                    </p>
                  </div>
                  <div className="col-lg-6">
                  <div className="img">
                      <img src="/assets/img/industry/Insurance2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                    <p className='mb-2'>
                      <strong>Block chain Technology for Fraud Prevention:</strong> Block chain creates secure and transparent insurance records. Smart contracts automate claims processing and ensure efficient interactions between parties.
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

export default Insurance;