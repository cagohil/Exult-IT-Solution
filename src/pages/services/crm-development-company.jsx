import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/CRMSoftwareCompanyDetails';


function crmDevelopmentCompany() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>CRM Development Company - Exult It Solution</title>
        <meta name="description" content="Businesses all over the world try to figure out better ways to retain and increase their client base. This is where a good CRM system comes into play. So what is Customer Relation Management (CRM)?: This refers to the process of understanding, analyzing, and structuring the way businesses interact with their customers. It helps collect user data that can be used to manage sales, marketing, customer service, and deliver valuable insights. This enables sales cycle optimization and improved marketing strategies through data analysis." />
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="CRM Development Company" title="CRM Development Company" />
        <Details />
        </main>
      </MainLayout>
    </>
  )

}

export default crmDevelopmentCompany