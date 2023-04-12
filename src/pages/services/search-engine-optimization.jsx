import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/SearchEngine OptimizationDetails';
import Contact from '@components/ServicesDetails/Contact';


function searchEngineOptimization() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Search Engine Optimization</title>
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="Search Engine Optimization" title="Search Engine Optimization" />
        <Details />
          {/* <Contact /> */}
        </main>
      </MainLayout>
    </>
  )
}

export default searchEngineOptimization