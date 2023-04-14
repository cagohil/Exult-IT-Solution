import { useState } from 'react';
import Link from 'next/link';
import clients from '@data/RemoteStaff/RemoteStaff.json';


const RemoteStaffIndex = ({ paddingTop }) => {


  return (
    <>
      <header className={`about-page-sec style-5 pb-0 ${paddingTop ? 'pt-100' : ''}`}>
        <div className="content border-0 p-0">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-12 order-lg-0 text-center">
                <p className='m-0'>
                  {'Are you struggling to find the right talent for the job?'} <br /> {'Finding it difficult to grow your business?'}
                </p>
                <div className="section-head mb-30 mt-4 style-5">
                  <h2>Exult IT is the<span>Solution.</span> </h2>
                </div>
                <p className='mb-2'>
                  Our dedicated team of experts makes it easy for you to cherry-pick the finest of talents from across the globe so that you can stay carefree of all the daily tasks of your business and focus on increasing your ROI.
                </p>
                <p className='mb-2'>
                  We offer Remote Staffing services which can help you grow your business and compete with the best of them.
                </p>
                <p className='mb-5'>
                  Get access to dedicated remote staff at an affordable price that’s been evaluated by us so you don’t have to do it yourself.
                </p>
                <h3>Pick The Best In Any Domain</h3>
                <p className='mb-4 mt-1'>
                  We’ll get you the perfect team, on time and within your budget.
                </p>
                <section className="clients style-5 mb-5" data-scroll-index="6">
                  <div className="content d-flex flex-wrap">
                    {
                      clients.map((client, index) => (
                        <div className="img img-card" style={{ border: "2px solid #157efb" }} key={index}>
                          <h5>{client}</h5>
                        </div>
                      ))
                    }
                  </div>
                </section>
              </div>
              <div>
                <p className='mb-2'>
                  <strong>
                    And a lot more…
                  </strong>
                </p>
                <p className='mb-3'>
                  <strong>
                    A Remote Team- WHY?
                  </strong>
                </p>


                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Access to a wider pool of talent- </strong></p>
                <p className="mb-10">
                  As you get access to a global workforce, there is no limit to talent and diversity you can achieve in your team
                </p>

                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Reduced office costs- </strong></p>
                <p className="mb-10">
                  You won’t need to increase your office space to accommodate your employees. Hence, you can say goodbye to ever-increasing office/ rental space costs.
                </p>

                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Saves time- </strong></p>
                <p className="mb-10">
                  No need to travel, no unnecessary office gossips. Pure focus on getting the work done.
                </p>


                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Fewer employee costs- </strong></p>
                <p className="mb-10">
                  Depending on your company’s norms, you can save a lot on payroll expenditures, documentation, employee assistances, various taxes, insurances, etc. to name a few.
                </p>

                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Increased flexibility & scalability- </strong></p>
                <p className="mb-40">
                  You can easily hire a remote employee as per your needs, any time. Hourly or project-based, the choice is yours to make. It also becomes easier to scale your operations across a wider geographic region/market.
                </p>


                <p className='mb-10'>
                  <strong>
                    WE, Exult IT Solutions, FOR YOU-
                  </strong>
                </p>
                <p className="mb-40">
                  Whether you are an upcoming next-door small business or a tech start-up with several rounds of funding, remote staffing is the best way to stay ahead of all the daily problems the business throws at you.
                  With over 10 years of experience in providing expert business solutions, we know what it takes to build a successful remote staffing team. Our services are tailored to your needs and designed for long-term success.
                  Hire the best people to do the job for you so you can fully focus on your business going forward.
                </p>


                <p className='mb-3'>
                  <strong>
                    START HIRING in these simple STEPS-
                  </strong>
                </p>


                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> What do you NEED? </strong></p>
                <p className="mb-10">
                  We offer a variety of remote staffing services, including project-based staff augmentation and dedicated teams.
                </p>

                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Choose your SERVICE TYPE </strong></p>
                <p className="mb-10">
                  Get the best cost-effective solution for your needs with one of our flexible options.
                </p>

                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> Select your TEAM SIZE </strong></p>
                <p className="mb-10">
                  Project-based or full-time? Our experts will find the perfect match for you in no time!
                </p>

                <p className="mt-20"> <i className="fas fa-check-circle color-blue5 me-2"></i> <strong className="color-000"> CONNECT with us to GET GOING </strong></p>
                <p className="mb-50">
                  Simply reach out to us and get started today!
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="chat-banner style-7">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-3 col-sm-6 d-none d-lg-block">
                <div className="img img1">
                  <img src="/assets/img/vector1.png" alt="" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="info">
                  <h4> HIRE AN <span>EMPLOYEE</span> WITH US and become a part of our long list of happy clients that have <span>grown</span> their <span>business</span> with us!!</h4>
                  <div className="btns mt-30">
                    <Link href="/about-us/" className="btn btn-icon-circle rounded-pill bg-black fw-bold text-white me-4 mb-3 mb-lg-0">
                      <small> About Us <i className="fas fa-long-arrow-alt-right"></i> </small>
                    </Link>
                    <Link href="contact-us" className="btn btn-icon-circle rounded-pill fw-bold me-4 brd-light text-white">
                      <small> Contact Us <i className="fas fa-long-arrow-alt-right bg-light"></i> </small>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img img2">
                  <img src="/assets/img/vector2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <img src="/assets/img/about/about_s6_bubbles.png" alt="" className="bubbles rotate-center pt-50 top-0 position-absolute" />
      </header>
    </>
  )
}

export default RemoteStaffIndex