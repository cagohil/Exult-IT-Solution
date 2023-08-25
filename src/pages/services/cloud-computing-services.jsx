import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/CloudServicesDetails';
import Contact from '@components/ServicesDetails/Contact';


function cloudComputingServices() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Cloud Computing Services - Exult It Solution</title>
        <meta name="description" content="Our Experts Integrate Hybrid Cloud & Cognitive Computing to add value to your business. We offer PaaS, IaaS and SaaS. We have knowledge and experience of Azure, Google cloud and AWS. It is a visible mass of a huge amount of condensed water vapours floating all around in the sky." />
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="Cloud Computing Services"  title="Cloud Computing Services" />
        <Details />
          {/* <Contact /> */}
        </main>
      </MainLayout>
    </>
  )

}

export default cloudComputingServices