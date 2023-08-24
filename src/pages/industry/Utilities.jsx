import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const Utilities = () => {
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
                      <h2>Utilities<span>industry</span> </h2>
                    </div>
                    <p className='mb-2'>
                      <strong>Advanced Metering Infrastructure (AMI):</strong> AMI facilitates two-way communication between utility companies and consumers, providing valuable data for energy consumption analysis, billing accuracy, and energy efficiency programs.  
                    </p>
                    <p className='mb-2'>
                      <strong>Smart Grid Upgrade for Operational Efficiency:</strong> Upgrading to a smart grid using IT tools ensures efficient, reliable, and resilient service. It enhances operations, minimizes downtime, and improves service quality.  
                    </p>
                    <p className='mb-2'>
                      <strong>Safety monitoring:</strong>IoT enabled sensors track parameters like temp, pressure, flow rate, pipeline stress and continuous monitoring ensures safety compliance, prevents leaks, and enables efficient water management via IoT networked devices.   
                    </p>
                    <p className='mb-2'>
                      <strong>Improve customer engagement:</strong> Digitalization empowers energy firms to engage customers proactively, shaping behaviour and enhancing results across marketing, sales, and service stages.  
                    </p>
                  </div>
                  <div className="col-lg-6">
                  <div className="img">
                      <img src="/assets/img/industry/Utilities2.jpg" alt="" />
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

export default Utilities;