import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import PreviewLayout from '@layouts/Preview';
//= Components
import Technologies from '@components/Technologies/Technologies';


function technologies() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Our Technologies - Exult It Solution</title>
        <meta name="description" content="Exult it Solution is leading company provides IT services and solutions, we expert in web design and development, software development, cloud computing and SEO services." />
        <meta name="keywords" content="Website Development, Software Development, Application Development, Mobile App Development, E Commerce Web Development, Search Engine Optimization, CRM Development, Cloud Computing, SEO "/>
        <meta name="author" content="Exult IT Solution"/>
      </Head>

      <PreviewLayout>
        <main className='portfolio-page style-1'>
          <Technologies />
        </main>
      </PreviewLayout>
    </>
  )
}

export default technologies