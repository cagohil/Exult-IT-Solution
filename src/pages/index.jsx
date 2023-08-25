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
import FacebookMsg from "@components/FacebookMsg";


const LandingPreview = () => {
  useEffect(() => {
    document.body.classList.add('index-main');
    return () => document.body.classList.remove('index-main');
  }, []);

  return (
    <>
      <Head>
        <title>Top Managed IT Services Macomb &#8211; Best IT Company in Macomb -Exult it Solution</title>
        <meta name="description" content="Exult it Solution is leading company provides IT services and solutions, we expert in web design and development, software development, cloud computing and SEO services." />
        <meta name="keywords" content="Website Development, Software Development, Application Development, Mobile App Development, E Commerce Web Development, Search Engine Optimization, CRM Development, Cloud Computing, SEO "/>
        <meta name="author" content="Exult IT Solution"/>
        <meta name="description" content="Website Development in Macomb" />
        <meta name="description" content="Website Development in Michigan" />
        <meta name="description" content="Mobile App Development in Macomb" />
        <meta name="description" content="Mobile App Development in Michigan" />
        <meta name="description" content="e commerce web Development in Macomb" />
        <meta name="description" content="e commerce web Development in Michigan" />
        <meta name="description" content="Search Engine Optimization in Macomb" />
        <meta name="description" content="Search Engine Optimization in Michigan" />
        <meta name="description" content="Cloud Computing Services in Macomb" />
        <meta name="description" content="Cloud Computing Services in Michigan" />
        <meta name="description" content="CRM Development Company in Macomb" />
        <meta name="description" content="CRM Development Company in Michigan" />
        <meta name="description" content="Customer Relation Management in Macomb" />
        <meta name="description" content="Customer Relation Management in Michigan" />
        <meta name="description" content="Website Developer in Macomb" />
        <meta name="description" content="Website Developer in Michigan" />
        <meta name="description" content="best Website Developer in Macomb" />
        <meta name="description" content="best Website Developer in Michigan" />
        <meta name="description" content="top Website Developer in Macomb" />
        <meta name="description" content="top Website Developer in Michigan" />
        <meta name="description" content="Mobile App Developer in Macomb" />
        <meta name="description" content="Mobile App Developer in Michigan" />
        <meta name="description" content="best Mobile App Developer in Macomb" />
        <meta name="description" content="best Mobile App Developer in Michigan" />
        <meta name="description" content="top Mobile App Developer in Macomb" />
        <meta name="description" content="top Mobile App Developer in Michigan" />
      </Head>

      <PreviewLayout>
        <Header />
        <AboutComponent />
        <ServicesComponent style="5" />
        <Clients />
        <Testimonials />
        <FacebookMsg />
      </PreviewLayout>
    </>
  )
}

export default LandingPreview;