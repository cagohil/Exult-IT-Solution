import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/E-commerceWebDevelopmentDetails';
import Contact from '@components/ServicesDetails/Contact';


function eCommerceWebDevelopment() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>E-commerce Web Development</title>
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="E-commerce Web Development"  title="E-commerce Web Development" />
        <Details />
          {/* <Contact /> */}
        </main>
      </MainLayout>
    </>
  )
}

export default eCommerceWebDevelopment