import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/CRMSoftwareCompanyDetails';
import Contact from '@components/ServicesDetails/Contact';


function crmDevelopmentCompany() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>CRM Development Company</title>
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="CRM Development Company" title="CRM Development Company" />
        <Details />
          {/* <Contact /> */}
        </main>
      </MainLayout>
    </>
  )

}

export default crmDevelopmentCompany