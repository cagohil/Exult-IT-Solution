import React from 'react';
import { useEffect } from 'react';
import TechnologiesData from '@data/Technologies/TechDetails.json';

function Technologies(style = "4") {
  const techData =  TechnologiesData;

  useEffect(() => {
    setTimeout(() => {
      if (!mixitup) return;
      mixitup('.portfolio-projects')
    }, 0);
  }, []);

  const whiteColor = {
    color:"white"
  }


  return (
    <header className="pt-50">
      <section className={`portfolio-projects pb-50 style-1 style-5`}>
        <div className="container">
          <div className={`section-head text-center style-${style} ${style === '5' ? 'mb-60' : 'mb-40'}`}>
            <h1 className="mb-20" style={{ ...whiteColor }}>Our <span style={{ ...whiteColor }}>Technologies</span> </h1>
            <p style={{ ...whiteColor, maxWidth: "700px", margin: "auto", fontSize:"17px" }}>Your idea, our expert hands makes the product success. We have expert hand in multiple technology.</p>
          </div>
          <div className="controls bg-white rounded ">
            {
              techData.filters.map((filter, i) => (<button key={i} type="button" className="control" data-filter={filter.filter}>{filter.title}</button>))
            }
          </div>
          <section className="portfolio style-1">
            <div className="content">
              <div className="row mix-container">
                {
                  techData.techs.map((tech, i) => (
                    <div className={`col-lg-2 col-md-3 col-sm-4 col-6 mix ${tech.filter}`} key={i} >
                        <div className={`tech-card mb-50`}>
                          <div className="img">
                            <img src={tech.image} alt="" />
                          </div>
                          <div className="info">
                            <h5 className='text-center'>
                              {tech.name}
                            </h5>
                          </div>
                        </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      </section>
    </header>
  )
}

export default Technologies
