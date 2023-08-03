import Link from 'next/link';


const AboutComponent = () => {
  return (
    <section className="codei mt-50 mb-50 AboutComponentPadding">
      <div className="section-head text-center px-2 mb-40 style-5">
        <h2 className="mb-20 ">{'About'}<span>{'Exult IT Solution'}</span></h2>
        <strong><p className='pb-2'>{'Exult IT Solution had professional experience in providing IT solutions for over two decades.'}</p></strong>
      </div>

      <div className="container-xxl box px-4">
        <div className="row align-items-center">
          <div className="col-lg-5 ">
            <div className="img">
              <img src="/assets/img/home/about/about.png" alt="" />
            </div>
          </div>
          <div className=" col-lg-6 offset-lg-1">
            <div className="cont mb-5 mt-3 mb-lg-0">
              <p className="color-777 lh-6 fs-16px">Our team of tech experts has constantly engaged with clients to offer a variety of innovative solutions across various verticals. We provide our proficient services for IT Services in website development and designing, along with other services which include extensive technology development, artificial intelligence, augmentation intelligence, custom CRM software development, and mobile applications. We carefully analyze the needs of our clients and offer solutions that are tech-oriented and feature-driven. Along with the functionality-focused approach and innovative implementation, we try to deliver and maintain a healthy and thriving collaboration with you. Our proven track record over the years make us a reliable option for IT Services and IT Solutions. We promise you a very delightful experience and a full customer commitment throughout our relationship.</p>
              
              <div className="d-flex align-items-center mt-30">
                <Link legacyBehavior href="/about-us">
                  <a className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn ">
                    <span>Read More<i className="bi bi-arrow-right ms-1"></i> </span>
                  </a>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent