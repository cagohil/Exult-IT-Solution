import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const Telecommunications = () => {
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
                      <h2>Telecommunications</h2>
                    </div>
                    <p className='mb-2'>
                      <strong>5G Technology Deployment:</strong> IT enables the rollout of 5G networks which establish seamless communication, increased network capacity, delivering faster data speeds and supports advanced applications like IoT and real-time streaming.
                    </p>
                    <p className='mb-2'>
                      <strong>Customer-Centric Experience through Data Analysis:</strong> CEM enhances customer satisfaction by analysing customer data, optimizing interactions, reducing churn, and increasing loyalty. Digital payment solutions streamline processes and improve customer satisfaction.
                    </p>
                    <p className='mb-2'>
                      <strong>Network Monitoring and Risk Prevention:</strong>AI-driven predictive analytics tools consistent monitor networking, anticipates equipment failures, and providing better root cause analysis for efficient issue resolution. Maintain, and integrate predictive algorithms to yield viable results.
                    </p>
                    
                    
                  </div>
                  <div className="col-lg-6">
                    <div className="img mt-4">
                      <img src="/assets/img/industry/Telecommunications2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <p className='mb-2'>
                      <strong>Data analytics and Storage: </strong> Analytical tools like Customer Data Platforms extract, manage and unify data from different sources via sensors in devices which helps to generate crucial business insights and understand customer usage patterns.
                    </p>
                <p className='mb-2'>
                      <strong>Efficient and innovative solution: </strong> Cloud infrastructure supports diverse applications, data management, and billing. It introduces new services, reduces costs, and facilitates agile responses to market needs.
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

export default Telecommunications;