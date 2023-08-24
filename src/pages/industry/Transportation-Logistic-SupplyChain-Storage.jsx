import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const TransportationLogisticSupplyChainStorage = () => {
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
                      <h2>Transportation,<span> Logistic, Supply Chain and Storage</span></h2>
                    </div>
                    <p className='mb-2'>
                    <strong>Inventory management:</strong> Using data analytics, optimize inventory management to forecast demand, track stock levels and avoid stock outs. 
                    </p>
                    <p className='mb-2'>
                    <strong>Real-time tracking:</strong> Helps in better logistics planning, reducing delays, and improving overall supply chain efficiency.  
                    </p>
                    <p className='mb-2'>
                    <strong>Route Optimization:</strong> UEnhance travel routes which leads to increased productivity and customer satisfaction. 
                    </p>
                    
                  </div>
                  <div className="col-lg-6">
                  <div className="img">
                      <img src="/assets/img/industry/Transportation-Logistic-SupplyChain-Storage2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <p className='mb-2'>
                    <strong>E-commerce Integration:</strong> Establish seamless integration between transportation and logistics companies and e-commerce platforms, facilitating smooth order processing and tracking for online customers. 
                    </p>
                    <p className='mb-2'>
                    <strong>Cloud Computing:</strong> Cloud-based platforms offer quick, scalable and cost-effective solutions for data storage, collaboration, and processing. 
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

export default TransportationLogisticSupplyChainStorage;