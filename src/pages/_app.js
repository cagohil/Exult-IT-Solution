import { React, useEffect, useRef } from "react";
import Script from "next/script";
import Head from "next/head";
import TopNav from "@components/Navbar/TopNav";
import Navbar from "@components/Navbar/index";
import navbarScrollEffect from "@common/navbarScrollEffect";
import Footer from "@components/Saas/Footer";
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
        <title>Exult It Solution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
