import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import slides from '@data/Home/slides.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const HomeSlider = () => {
  const data = slides;

  return (
    <section className="blog-slider style-1">
      <div className="">
        <div className="blog-details-slider">
          <Swiper
            className="swiper-container"
            slidesPerView={1}
            spaceBetween={0}
            effect="fade"
            speed={1000}
            pagination={{
              el: ".blog-details-slider .swiper-pagination",
              clickable: "true"
            }}
            navigation={{
              nextEl: '.blog-details-slider .swiper-button-next',
              prevEl: '.blog-details-slider .swiper-button-prev'
            }}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000
            }}
            loop={true}
          >
            {
              data.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="content-card">
                    <div className="img overlay">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="cont">
                            <small className="date small mb-20">
                              <a href="#" className=" border-end brd-gray pe-3 me-3">{slide.name}</a>
                            </small>
                            <h2 className="title">
                              <a>{slide.title}</a>
                            </h2>
                            <p className="fs-13px mt-10 text-light text-info">
                              {slide.desc} [...]
                            </p>
                            <div className='mt-10 d-flex '>
                                <div className="d-flex align-items-center ">
                                  <Link legacyBehavior href="/about-us">
                                    <a className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn ">
                                      <span>About Us</span>
                                    </a>
                                  </Link>
                                </div>

                                <div className="d-flex align-items-center m-2">
                                  <Link legacyBehavior href="/contact-us">
                                    <a className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn ">
                                      <span>Contact Us<i className="bi bi-arrow-right ms-1"></i> </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  )
}

export default HomeSlider