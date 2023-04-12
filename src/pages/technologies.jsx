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
        <title>Technologies</title>
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