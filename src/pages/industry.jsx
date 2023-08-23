import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import PreviewLayout from '@layouts/Preview';
//= Components
import Industries from '@components/Industry/index';

const RemoteStaff = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Industries - Exult It Solution</title>
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

      <PreviewLayout>
        <Industries />
      </PreviewLayout>
    </>
  )
}

export default RemoteStaff;