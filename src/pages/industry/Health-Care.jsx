import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';

const HealthCare = () => {
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
            <div className="content border-0 p-0 ">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 order-2 order-lg-0">
                    <div className="section-head mb-30 mt-4 style-5">
                      <h2>Health<span>Care</span> </h2>
                    </div>
                    <p className='mb-2'>
                      <strong>Electronic Health Records (EHR):</strong> Provides centralized and secure system for storing patient information which facilitate seamless information sharing among healthcare providers.
                    </p>
                    <p className='mb-2'>
                      <strong>Healthcare Analytics:</strong> Analyse vast amounts of data to derive insights into patient outcomes, population health trends, and effective treatment.
                    </p>
                    <p className='mb-2'>
                      <strong>Medical Billing Software:</strong> Automates and simplify various administrative tasks including handle invoicing task, patient billing, insurance coverage verification and claims processing, patient demographics, creation of financial reports and more.
                    </p>
                    <p className='mb-2'>
                    <strong>Patient Portals:</strong> Facilitate patient engagement like monitor their healthcare provider, schedule appointments, records, payments, prescriptions and live interactions through portal, apps and online resources.
                  </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="img">
                      <img src="/assets/img/industry/Health-Care2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className='mb-2'>
                    <strong>Medical Imaging and Diagnostics:</strong> Enhance medical imaging and diagnostic processes. Picture Archiving and Communication Systems (PACS) enable efficient storage, retrieval, and sharing of medical images, aiding in accurate diagnoses.
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

export default HealthCare;