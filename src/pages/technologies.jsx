import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import PreviewLayout from '@layouts/Preview';
//= Components
import Header from '@components/Preview/Header';


function technologies() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Technologies</title>
      </Head>

      <PreviewLayout>
        <Header />
        {/* <Header page="Our Technologies"  title="Our Technologies" /> */}
      </PreviewLayout>
    </>
  )
}

export default technologies