import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components


function WhyDoesYourBusinessNeedToShiftTo() {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>WhyDoesYourBusinessNeedToShiftTo</title>
      </Head>

      <MainLayout>
        <main className="services-details-page style-5">
          <section className="ser-details pt-5 pb-4 overflow-hidden">
            <div className="container pt-3">
              <div className="main-info">

                <p className="mb-20">
                  E-commerce is buying and selling of products, services, and goods on the internet. The global market is progressing towards digital space; businesses need to begin their trade on the internet. Internet commerce gives small and large-scale companies an extra benefit to reap more revenue on a low-cost investment.                </p>
                <p className="mb-30">
                  <strong>Here are five reasons which show why your business needs to extend to E-commerce now!</strong>
                </p>

                <h3 className="text-capitalize mb-20"> Global Reach </h3>
                <p className="mb-30">
                  E-commerce can take your business from the community of your region to foreign markets on a low-cost investment. An online presence can help you reach every corner of the world. You can also develop a logistic and delivery system if required. An internet business can increase your potential customer base. This will, in return, will enlarge the demand for your product or services.
                </p>


                <h3 className="text-capitalize mb-20"> Track Your Target Audience </h3>
                <p className="mb-30">
                  Electronic commerce gives an upper hand to your enterprise in finding your potential customers. Besides, it also helps in segmenting them from the crowd and reaching out to them when required. With the assistant of web analytics, you can track your customer’s choices and budgeting. You can reach out to possible consumers by targeting them with the advertisements.
                </p>

                <h3 className="text-capitalize mb-20"> Improve Customer Experience </h3>
                <p className="mb-30">
                  An e-commerce platform gives customers the convenience to buy products 24*7. Moreover, it also saves their time to go for in-store shopping. Many people prefer to have an interaction with staff and know the product in-depth. With the help of advanced technology, an online staff help desk and real-time product experience can add to customer benefit.
                </p>

                <h3 className="text-capitalize mb-20"> Better Data Management </h3>
                <p className="mb-30">
                  E-commerce management creates, collects, distributes, and retrieves information from a large customer base. Online data helps to maintain adequate information about people who interact on the platform. Moreover, this data helps in building a relationship and establishing communication with the audience.
                </p>

                <h3 className="text-capitalize mb-20"> Increase in Revenue </h3>
                <p className="mb-20">
                  According to Statista, E-retail incomes are going to increase to 5.4 trillion US dollars in 2022. Also, in 2020, e-commerce sales globally amounted to 4.28 trillion US dollars. With online shopping, the product’s customer base will grow on the internet. With the help of online payment methods, 24*7 income sources increase profits. Thus E-retail will help in creating more revenue in less investment.
                </p>

                <p className="mb-30">
                  So do you want to expand your business globally? Do you want to increase your turnover? Then this is the right time to achieve all these by building an <Link href="" legacyBehavior><a href="https://www.exultitsolution.com/services/ecommerce-web-development/" target='_blank' className='text-primary'> e-commerce </a></Link> platform of your own.
                </p>


              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  )

}

export default WhyDoesYourBusinessNeedToShiftTo