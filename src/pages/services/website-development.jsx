import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/WebsiteDevelopmentDetails';
import Contact from '@components/ServicesDetails/Contact';


function websiteDevelopment() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Website Development</title>
      </Head>

      <MainLayout>
        <main className="services-details-page style-5">
        <Header page="Website Development" path="/services/website-development" title="Website Development" />
        <Details />
          {/* <Contact /> */}
        </main>
      </MainLayout>
    </>
  )
}

export default websiteDevelopment