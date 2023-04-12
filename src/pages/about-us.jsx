import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import AboutIndex from '@components/AboutUs/index';
import ChooseUs from '@components/Saas/ChooseUs';
import Clients from '@components/Saas/Clients';
import Numbers from '@components/Saas/Numbers';
import Team from '@components/Saas/Team';
import Community from '@components/Saas/Community';
import Philosophy from '@components/Saas/Philosophy';
import Culture from '@components/Saas/Culture';
import Footer from '@components/Saas/Footer';

const About = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>About</title>
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