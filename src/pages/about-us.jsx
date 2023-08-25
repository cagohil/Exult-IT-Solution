import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import AboutIndex from '@components/AboutUs/index';

const About = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Software Development Company Macomb | Web apps development Macomb</title>
        <meta name="description" content="Exult it Solution is leading company provides IT services and solutions, we expert in web design and development, software development, cloud computing and SEO services." />
        <meta name="keywords" content="Website Development, Software Development, Application Development, Mobile App Development, E Commerce Web Development, Search Engine Optimization, CRM Development, Cloud Computing, SEO "/>
        <meta name="author" content="Exult IT Solution"/>
      </Head>

      <MainLayout>
        <main className="about-page style-5">
          <AboutIndex />
        </main>
      </MainLayout>
    </>
  )
}

export default About;