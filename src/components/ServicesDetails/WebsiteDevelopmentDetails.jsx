import React from 'react'
import Link from 'next/link'

const Details = () => {
  return (
    <section className="ser-details pt-3 pb-4 overflow-hidden">
      <div className="container">
        <div className="content">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div className="main-info">
                <div className="main-img img-cover" >
                <img src="/assets/img/services/website-development-image.png" style={{width:"auto"}} alt="" />
                </div>
                <h3 className="text-capitalize mb-20"> Website Development </h3>
                <p className="mb-10">
                Every business requires a clean and responsive website to succeed in the digital world. The way your website performs is an indication of the efforts you put in for the comfort of your customers. A good website should be effortless to use and pleasing to the eyes.
                </p>
                <p className="mb-10">
                Website development is what encapsulates everything related to getting your website up and running. At Exult It Solutions, we focus on understanding your business and creating a more engaging user experience. A well-made website can become the difference between an unrecognized brand and an innovative market leader.
                </p>
                <p className="pb-30">
                Being the best in the business, we ensure that our clients get the most delightful web development services. We believe in offering a comprehensive package that includes everything your business will need and brings out the essence of it through its online home- the website.
                </p>


                <h3 className="text-capitalize mb-20"> Our Services </h3>
                <p className="mb-10">
                From ideating that little plan to finally launching your website, our experienced team does it all.
                </p>
                <p className="mb-10">
                Is that it?
                </p>
                <p className="mb-10">
                Not really.
                </p>
                <p className="mb-10">
                Website development comprises a series of tasks that require expert skills and knowledge to turn even the smallest of the ideas into reality.
                </p>
                <p className="mb-10">
                And we don’t just know it all, we truly excel at it.
                </p>
                <p className="mb-10">
                The whole process of creation falls into two major categories- <strong>front-end</strong> and <strong>back-end</strong> development.
                </p>
                <p className="mt-10"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Front-end Development: </strong> It is what you see when you interact with a website. Front-end development allows users to interact efficiently with the website through text, images, videos, and much more. A compact front-end helps in providing a great user experience and generating improved results for your product. Take advantage of the expert services we offer which are customer-centric and focused on creating the perfect website for your users. Utilizing cutting-edge technology and the latest trends, we ensure that your customers are not only satisfied but delighted. </p>
                <p className="mt-10"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Back-end Development: </strong> This part of the website is not visible to the users. These are the building blocks of a website- the digits, the letters, and the symbols. Developing the back-end is a highly complex process which comprises of several programming languages and databases. Unlike front-end, the back-end development is multi-layered and supports everything your website offers. With expertise in various development procedures, we ensure that your website is proficient and interactive. </p>
                <p className="mb-30">
                Although it must be clear by now, one can still have a doubt.
                </p>
                <h4 className="text-capitalize mb-20"> Why do you need to focus on Website Development? </h4>
                <p className="mb-10">
                Regardless of who you are- a budding freelancer or a top brand, you need to connect with your customers on the Internet.
                </p>
                <p className="mb-10">
                Remember this. The Internet is not going anywhere soon. It is the go-to place for everything you need, from information and education to buying actual tangible products. Up till 2019, more than 50% of the global population has connected to this new virtual world. It is only going to increase with every passing moment.
                </p>
                <p className="mb-30">
                And what exactly does your business need to be present on the Internet? A platform with all your relevant information, to be precise, a website.
                </p>
                <h4 className="text-capitalize mb-20"> Our wide range of Web Development Services </h4>
                <p className="mt-10"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> E-commerce website development: </strong> Get a cool and responsive website for your e-commerce business to convert your potential leads and skyrocket the sales. </p>
                <p className="mt-10"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> WordPress development services: </strong> With one in every three websites based on WordPress, we sure do know the power of this dynamic platform. We can create websites that are easy-to-use and very efficient. </p>
                <p className="mt-10"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Content Management System (CMS) development: </strong> A robust CMS system is an essential part of managing a website for people with no pre-requisite knowledge. We offer comprehensive and user-friendly CMS so that you stay ahead of what you need. </p>
                <p className="mt-10 mb-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Static website development: </strong> An elemental HTML-coded website is all you need when you just want to be informative. Be precise and flawless with our attractive websites. </p>
                <p className="mb-30">
                Apart from these, our services extend to <strong>dynamic website development, single web-pages, web applications</strong> and much more.
                </p>

                <h4 className="text-capitalize mb-20"> Why choose us? </h4>
                <p className="mb-10">
                If you want high value for every penny you spend and 100% customer satisfaction, make us a part of your amazing journey.
                </p>
                <p className="mt-10"> <i className="fas fa-check-circle color-blue5 me-2"></i> We deliver cost-effective solutions and generate increased conversions for our clients </p>
                <p className="mt-10"> <i className="fas fa-check-circle color-blue5 me-2"></i>  Better Return on Investment (ROI) </p>
                <p className="mt-10 mb-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> We stay updated with the latest industry standards </p>
                <p className="mb-10">
                <strong>For us, nothing is better than a happy and satisfied customer.</strong>
                </p>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-links mt-5 mt-lg-0">
                <div className="links-card mb-40">
                  <h5> Service Category </h5>
                  <ul>
                    <li >
                      <Link  href="/services/website-development"> <i className="far fa-angle-right icon"></i> Website Development </Link>
                    </li>
                    <li>
                      <Link href="/services/cloud-computing-services"> <i className="far fa-angle-right icon"></i> Cloud Services </Link>
                    </li>
                    <li>
                      <Link href="/services/mobile-app-development"> <i className="far fa-angle-right icon"></i> Mobile App Development </Link>
                    </li>
                    <li>
                      <Link href="/services/crm-development-company"> <i className="far fa-angle-right icon"></i> CRM Software Company </Link>
                    </li>
                    <li>
                      <Link href="/services/ecommerce-web-development"> <i className="far fa-angle-right icon"></i> E-commerce Web Development </Link>
                    </li>
                    <li>
                      <Link href="/services/search-engine-optimization"> <i className="far fa-angle-right icon"></i> Search Engine Optimization </Link>
                    </li>
                  </ul>
                </div>
                <div className="banner1">
                  <div className="title">
                    <h6> Call To Action </h6>
                    <h3> Make An Custom Request </h3>
                  </div>
                  <Link href="/contact-us" className="butn bg-white rounded-pill hover-blue5">
                    <span> Get A Quote <i className="far fa-long-arrow-right ms-2"></i> </span>
                  </Link>
                  <img src="/assets/img/mob1.png" alt="" className="mob" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details