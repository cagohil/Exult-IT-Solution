import { React, useEffect, useRef } from "react";
import Script from "next/script";
import Head from "next/head";
import TopNav from "@components/Navbar/TopNav";
import Navbar from "@components/Navbar/index";
import navbarScrollEffect from "@common/navbarScrollEffect";
import Footer from "@components/Footer/Footer";
import "../styles/globals.css";
import "../styles/preloader.css";

export default function App({ Component, pageProps }) {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Top Managed IT Services Macomb &#8211; Best IT Company in Macomb -Exult it Solution</title>
        <meta name="DESCRIPTION" content="Exult it Solution is leading company provides IT services and solutions, we expert in web design and development, software development, cloud computing and SEO services." />
        <meta name="DESCRIPTION" content="Website Development in Macomb" />
        <meta name="DESCRIPTION" content="Website Development in Michigan" />
        <meta name="DESCRIPTION" content="Mobile App Development in Macomb" />
        <meta name="DESCRIPTION" content="Mobile App Development in Michigan" />
        <meta name="DESCRIPTION" content="e commerce web Development in Macomb" />
        <meta name="DESCRIPTION" content="e commerce web Development in Michigan" />
        <meta name="DESCRIPTION" content="Search Engine Optimization in Macomb" />
        <meta name="DESCRIPTION" content="Search Engine Optimization in Michigan" />
        <meta name="DESCRIPTION" content="Cloud Computing Services in Macomb" />
        <meta name="DESCRIPTION" content="Cloud Computing Services in Michigan" />
        <meta name="DESCRIPTION" content="CRM Development Company in Macomb" />
        <meta name="DESCRIPTION" content="CRM Development Company in Michigan" />
        <meta name="DESCRIPTION" content="Customer Relation Management in Macomb" />
        <meta name="DESCRIPTION" content="Customer Relation Management in Michigan" />
        <meta name="DESCRIPTION" content="Website Developer in Macomb" />
        <meta name="DESCRIPTION" content="Website Developer in Michigan" />
        <meta name="DESCRIPTION" content="best Website Developer in Macomb" />
        <meta name="DESCRIPTION" content="best Website Developer in Michigan" />
        <meta name="DESCRIPTION" content="top Website Developer in Macomb" />
        <meta name="DESCRIPTION" content="top Website Developer in Michigan" />
        <meta name="DESCRIPTION" content="Mobile App Developer in Macomb" />
        <meta name="DESCRIPTION" content="Mobile App Developer in Michigan" />
        <meta name="DESCRIPTION" content="best Mobile App Developer in Macomb" />
        <meta name="DESCRIPTION" content="best Mobile App Developer in Michigan" />
        <meta name="DESCRIPTION" content="top Mobile App Developer in Macomb" />
        <meta name="DESCRIPTION" content="top Mobile App Developer in Michigan" />
      </Head>



      <TopNav style="5" />
      <Navbar navbarRef={navbarRef} />
      <Component {...pageProps} />
      <Footer noWave />
      <Script strategy="beforeInteractive" src="/assets/js/lib/pace.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/bootstrap.bundle.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/mixitup.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/html5shiv.min.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/main.js"></Script>
    </>
  );
}
