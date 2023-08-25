import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const AutomationIndustry = () => {
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
                      <h2>Automation<span>industry</span> </h2>
                    </div>
                    <p className='mb-2'>
                    <strong>Streamline complex process:</strong> Simplify the complicating processes by designing a digital industrial computer control system (PLC) to execute automatic industrial operations. 
                    </p>
                    <p className='mb-2'>
                    <strong>Optimized Operations:</strong> The pivotal technology managing and monitoring industrial processes by collecting real-time data, enabling informed decision-making and process optimization. 
                    </p>
                  </div>
                  <div className="col-lg-6">
                  <div className="img">
                      <img src="/assets/img/industry/Automation-Industry2.jpg" alt="" />
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

export default AutomationIndustry;