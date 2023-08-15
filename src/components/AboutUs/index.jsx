import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutHeader = ({ rtl, paddingTop }) => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <>
    <header className={`about-page-sec style-5 ${paddingTop ? 'pt-100':''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="info">
              <h1>About 
                <span className="ms-2">
                  { 'Us' }
                  <img src="/assets/img/header/head5_line.png" alt="" className="head-line" />
                  <img src="/assets/img/header/head5_pen.png" alt="" className="head-pen" />
                </span>
              </h1>
              <p>
                { 'Your idea, our expert hands makes the product success.' } { 'We have expert hand in multiple technology.' }
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/assets/img/header/head6_rating.png" alt="" className="head6-rating scale_up_down" />
      <img src="/assets/img/header/header5_linechart.png" alt="" className="head6-charts scale_up_down" /> */}
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      }
            <div className="content border-0 p-0 pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 order-2 order-lg-0">
              <div className="section-head mb-30 mt-4 style-5">
                <h2>Why<span>Choose Us?</span> </h2>
              </div>
              <p className='mb-2'>
              Exult IT Solution is a software development and IT-services based company which provides a range of services such as IT consulting, Application and Software development and customizations, Application Maintenance, and AWS server set up and configuration. We also have experience in delivering our facilities in verticals like API’s Development, Mobile and Web apps development, and Remote Database Administration services.
              </p>
              <p className='mb-2'>
              We have a team of professionals with expertise in their respective fields that provide highly satisfactory and quality services according to your needs.
              </p>
              <p>
              Our multi-level approach along with the world-class standards makes us a perfect choice for your growth-oriented business.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/about/about-img-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        <section className="choose-us style-6">
        <div className="container">
          <div className="row justify-content-between gx-0">
            <div className="col-lg-6">
              <div className="img p-0">
                <img src="/assets/img/about/about-img-2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info">
                <div className="section-head mb-20 style-5">
                  <h2>Our<span>Goal</span> </h2>
                </div>
                <p className='mb-2'>
                To maintain a user-friendly and healthy professional relationship by analyzing the current as well as the future needs of your business in this globalized world.
              </p>
              <div className="section-head mb-20 style-5 mt-4">
                  <h2>Philo<span className='p-0 m-0'>sophy</span></h2>
              </div>
              <p className='mb-2'>
              We believe in creating a thriving and interactive relationship with the client and help them out whenever they need us. Our efficient work ethics ensures that business solutions are delivered at the earliest possible.
              </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/about/about_s6_bubbles.png" alt="" className="bubbles rotate-center" />
      </section>
      </>
  )
}

export default AboutHeader