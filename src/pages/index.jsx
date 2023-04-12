import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import PreviewLayout from '@layouts/Preview';

//= Components
import Header from '@components/Home/Header';
import AboutComponent from '@components/Home/AboutComponent';
import ServicesComponent from '@components/Home/ServicesComponent';
import Testimonials from '@components/Home/Testimonials';
import Clients from '@components/Home/Clients';

const LandingPreview = () => {
  useEffect(() => {
    document.body.classList.add('index-main');
    return () => document.body.classList.remove('index-main');
  }, []);

  return (
    <>
      <Head>
        <title>Exult It Solution</title>
      </Head>

      <PreviewLayout>
        <Header />
        {/* <AboutComponent /> */}
        <ServicesComponent style="5" />
        <Clients />
        <Testimonials />
      </PreviewLayout>
    </>
  )
}

export default LandingPreview;