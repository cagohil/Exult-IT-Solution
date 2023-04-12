import { useEffect } from 'react';
import Link from 'next/link';
import services from '@data/Home/Services.json';

const ServicesComponent = ({ style = "4", rtl }) => {
  const servicesData = services;



  return (
    <div className="portfolio-page style-1">
      <section className={`portfolio-projects pb-50 pt-50 style-1`}>
        <div className="container">
          <div className={`section-head text-center style-${style} ${style === '5' ? 'mb-60' : 'mb-40'}`}>
            <h2 className="mb-20"> Our <span>Services </span> </h2>
            <p>{'We have an experienced team of production and inspection personnel to ensure quality.'}</p>
          </div>

          <section className="portfolio style-1">
            <div className="content">
              <div className="row mix-container">
                {
                  servicesData.services.map((service, i) => (
                    <div className={`col-lg-4 mix ${service.filter}`} key={i}>
                      <Link href={service.link} legacyBehavior>
                        <div className={`portfolio-card hover-4 ${i !== services.services.length - 1 ? 'mb-50' : ''}`}>
                          <div className="img">
                            <img src={service.image} alt="" />
                          </div>
                          <div className="info">
                            <h5>
                              <Link href={service.link} legacyBehavior>
                                <a>{service.title}</a>
                              </Link>
                            </h5>
                            <div className="text">
                              {service.details}
                            </div>
                          </div>
                        </div>
                      </Link>

                    </div>
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>

  )
}

export default ServicesComponent