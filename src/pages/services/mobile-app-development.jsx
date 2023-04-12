import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/MobileAppDevelopmentDetails';
import Contact from '@components/ServicesDetails/Contact';


function mobileAppDevelopment() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Mobile App Development</title>
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="Mobile App Development" title="Mobile App Development" />
        <Details />
          {/* <Contact /> */}
        </main>
      </MainLayout>
    </>
  )
}

export default mobileAppDevelopment