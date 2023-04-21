import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/WebsiteDevelopmentDetails';


function websiteDevelopment() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Website Development - Exult It Solution</title>
        <meta name="DESCRIPTION" content="Every business requires a clean and responsive website to succeed in the digital world. The way your website performs is an indication of the efforts you put in for the comfort of your customers. A good website should be effortless to use and pleasing to the eyes. Website development is what encapsulates everything related to getting your website up and running. At Exult It Solutions, we focus on understanding your business and creating a more engaging user experience. A well-made website can become the difference between an unrecognized brand and an innovative market leader." /> 
      </Head>

      <MainLayout>
        <main className="services-details-page style-5">
        <Header page="Website Development" path="/services/website-development" title="Website Development" />
        <Details />
        </main>
      </MainLayout>
    </>
  )
}

export default websiteDevelopment