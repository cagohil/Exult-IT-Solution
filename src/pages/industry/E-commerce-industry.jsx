import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const eCommerceIndustry = () => {
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
          <header className={`about-page-sec style-5 pt-5 }`}>
            <div className="content border-0 p-0 ">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 order-2 order-lg-0">
                    <div className="section-head mb-30 mt-4 style-5">
                      <h2>E-commerce<span>industry</span> </h2>
                    </div>
                    <p className='mb-2'>
                    <strong>Enterprise Resource Planning (ERP) System: </strong> ERP systems integrate various business processes including inventory, logistic, supply chain management, into a single, centralized platform and provide cost-effective process.
                    </p>
                    <p className='mb-2'>
                    <strong>Customer satisfaction:</strong> CRM software manage and monitor customer interactions, tracks communication history and stores customer data. It enhance the customer satisfaction by providing improved customer services.
                    </p>
                    <p className='mb-2'>
                    <strong>Advance E-commerce platform:</strong> It provides online storefronts for retails and e-commerce operations, facilitating product listing, order processing, online transactions, tracking customer inquiries and timely responses.
                    </p>
                  </div>
                  <div className="col-lg-6">
                  <div className="img">
                      <img src="/assets/img/industry/E-commerce-industry2.jpg" alt="" />
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

export default eCommerceIndustry;