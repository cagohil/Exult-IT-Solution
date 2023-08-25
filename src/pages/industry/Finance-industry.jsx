import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const FinanceIndustry = () => {
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
                      <h2>Finance<span>industry</span> </h2>
                    </div>
                    <p className='mb-2'>
                      <strong>Predictive Analytics Tools:</strong> Predictive data analysis and statistical algorithms forecast future trends and insights. It helps financial professionals to make informed decision and develop effective strategies. 
                    </p>
                    <p className='mb-2'>
                      <strong>East data access:</strong> Cloud computing offers unlimited real-time data storage capacity, which facilitates easy data access entry and data analysis monitoring. 
                    </p>
                    <p className='mb-2'>
                      <strong>Fintech solutions and Applications:</strong> Fintech solutions include mobile payment apps, digital wallets, peer-to-peer lending platforms, crypto management automate finance, boost security, offer personalized services and quicken transactions. 
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="img">
                      <img src="/assets/img/industry/Finance-industry2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <p className='mb-2'>
                      <strong>Efficient Financial operations:</strong> Automated tools enhance financial accounting with streamlined operations, automated data tasks, and error reduction. Customizable reports and metrics drive efficiency, saving time and minimizing risks. 
                    </p>
                    <p className='mb-2'>
                      <strong>Enhance Consumer satisfaction:</strong> Consumer-friendly applications benefit non-accounting professionals by providing easy access to financial data and insights. 
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

export default FinanceIndustry;