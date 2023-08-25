import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/MobileAppDevelopmentDetails';


function mobileAppDevelopment() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Mobile App Development - Exult It Solution</title>
        <meta name="description" content="With the advent of modern technology and innovations, every item we need is being transformed into something we can fit into our pockets. The real-life theatre made its way into the television, and from there to the mobile phones. Due to mobile phones, especially smartphones, there is a rising need for businesses to acknowledge the huge potential this user base offers." />
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="Mobile App Development" title="Mobile App Development" />
        <Details />
        </main>
      </MainLayout>
    </>
  )
}

export default mobileAppDevelopment