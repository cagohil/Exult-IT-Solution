import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components


function WhyShouldExultITSolutions() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Why Should ‘Exult IT Solutions’ Be Your Digital Media Partner…</title>
        <meta name="DESCRIPTION" content="WHY SHOULD ‘EXULTIT SOLUTION’ BE YOUR DIGITAL MEDIA PARTNER FOR THE ULTIMATE BUSINESS GROWTH? Donec quam est, suscipit vel ligula ut, aliquet maximus libero. Pellentesque finibus tellus vitae dolor lacinia eleifend. Vivamus convallis nunc ante, ac placerat turpis imperdiet in. Aenean posuere tortor vitae mi mollis tempus." />
      </Head>

      <MainLayout>
        <main className="services-details-page style-5">
          <section className="ser-details pt-5 pb-4 overflow-hidden">
            <div className="container pt-3">
              <div className="main-info">


                <h3 className="text-capitalize mb-30"> WHY SHOULD ‘EXULTIT SOLUTION’ BE YOUR DIGITAL MEDIA PARTNER FOR THE ULTIMATE BUSINESS GROWTH? </h3>
                <p className="mb-30 ">
                Donec quam est, suscipit vel ligula ut, aliquet maximus libero. Pellentesque finibus tellus vitae dolor lacinia eleifend. Vivamus convallis nunc ante, ac placerat turpis imperdiet in. Aenean posuere tortor vitae mi mollis tempus.
                </p>
                <p className="mb-30">
                Suspendisse eu lectus tempus, feugiat enim in, lacinia augue. Cras scelerisque risus vel nulla dictum vehicula. Phasellus vel massa massa. Curabitur a turpis vitae ipsum tempor varius. Etiam iaculis purus vitae velit blandit posuere. Cras scelerisque volutpat bibendum. Donec a justo sapien. Phasellus condimentum volutpat ex eget consectetur. Mauris vulputate aliquet commodo. Aliquam dictum tristique risus vel cursus.
                </p>
                <p className="mb-30">
                Nulla sit amet nunc massa. Praesent sed est pellentesque, varius tellus non, efficitur nisi. Sed sit amet purus in odio varius tincidunt. Mauris ut ante lobortis, elementum orci efficitur, bibendum leo. Nulla fringilla porttitor congue. Nunc ac semper sapien, a lobortis augue. Morbi ullamcorper erat vel nunc euismod, at condimentum turpis iaculis. Aliquam pretium blandit ultrices.
                </p>
                <p className="mb-40">
                Ut porttitor bibendum velit. Vivamus urna lorem, dapibus in odio nec, dapibus maximus risus. Vivamus eleifend vulputate egestas. Curabitur in diam eget lorem vehicula scelerisque. Mauris neque nibh, scelerisque ac malesuada at, feugiat a nisl. Etiam pulvinar nibh eget ullamcorper rutrum. Duis nec lobortis ex.
                </p>

              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  )

}

export default WhyShouldExultITSolutions