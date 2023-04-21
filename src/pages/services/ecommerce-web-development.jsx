import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ServicesDetails/Header';
import Details from '@components/ServicesDetails/E-commerceWebDevelopmentDetails';


function eCommerceWebDevelopment() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>E-commerce Web Development - Exult It Solution</title>
        <meta name="DESCRIPTION" content="There is a massive population that prefers the Internet for watching movies, finding the right solutions, or even buying their dog’s food. Over 2 billion of the global population looks up to online eCommerce stores to shop for their favorite products and services. Such a whopping number is hard to ignore and businesses need to realize the potential it holds." />
      </Head>

      <MainLayout>
      <main className="services-details-page style-5">
        <Header page="E-commerce Web Development"  title="E-commerce Web Development" />
        <Details />
        </main>
      </MainLayout>
    </>
  )
}

export default eCommerceWebDevelopment