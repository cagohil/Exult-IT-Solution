import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components

function remoteStaff() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Remote Staff</title>
      </Head>

      <MainLayout>
        <main className="about-page style-5">
        </main>
      </MainLayout>
    </>
  )
}

export default remoteStaff