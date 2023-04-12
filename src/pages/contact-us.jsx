import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Form from '@components/Contact/Form';
import Map from '@components/Contact/Map';
import Community from '@components/Contact/Community';


function contactUs() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <MainLayout>
        <main className="contact-page style-5">
        <Community />
        <Form style="5" />
        <Map />
        </main>
      </MainLayout>
    </>
  )
}

export default contactUs