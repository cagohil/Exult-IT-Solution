import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/SearchEngine OptimizationDetails';


function searchEngineOptimization() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Search Engine Optimization - Exult It Solution</title>
        <meta name="DESCRIPTION" content="Search Engine Optimization is all about knowing and implementing what can make your website visible. It focuses on attracting visitors organically by ranking higher in Google searches. This can be achieved through optimizing your website and content according to several factors that affect the rankings." />
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="Search Engine Optimization" title="Search Engine Optimization" />
        <Details />
        </main>
      </MainLayout>
    </>
  )
}

export default searchEngineOptimization