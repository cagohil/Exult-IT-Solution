import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import RemoteStaffIndex from '@components/RemoteStaff/index';

const RemoteStaff = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>RemoteStaff</title>
      </Head>

      <MainLayout>
        <main className="about-page style-5">
        <RemoteStaffIndex />
        </main>
      </MainLayout>
    </>
  )
}

export default RemoteStaff;