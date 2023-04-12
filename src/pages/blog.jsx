import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import PreviewLayout from '@layouts/Preview';

//= Components
import Blogs from '@components/OurBlogs/Blogs';


function blog() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <PreviewLayout>
        <main className="portfolio-page style-1">
          <header className='pt-60'>
            <Blogs style="5" />
          </header>
        </main>
      </PreviewLayout>
    </>
  )
}

export default blog