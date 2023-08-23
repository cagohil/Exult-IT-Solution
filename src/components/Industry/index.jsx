import { useState, useEffect } from 'react';
import Link from 'next/link';
import demos from '@data/Industry/industry.json';

const Demos = () => {
  const [demosRows, setDemosRows] = useState([]);

  useEffect(() => {
    let demosInRow = 3;
    let rowIndex = 0;
    let rowsItems = [[]];

    demos.forEach((demo, i) => {
      if (i > 0 && i % demosInRow === 0) {
        rowIndex++;
        rowsItems[rowIndex] = [];
      }

      rowsItems[rowIndex].push(demo);
    });

    setDemosRows(rowsItems);
  }, []);

  return (
    <section className="demos section-padding bg-light" id="demos">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-40">
              <h2 className="num"><span className="color-grd">INDUSTRIES<span className="thin"></span></span></h2>
              {/* <h3 className="text-capitalize">Execute Imperative & Unique Solution for Different Industries</h3> */}
              <p className="color-777">Execute Imperative & Unique Solution for Different Industries</p>
            </div>
          </div>
        </div>
        {
          demosRows.map((demos, r) => (
            <div className="row" key={r}>
              {
                demos.map((demo, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className={`item`}>
                      <Link legacyBehavior href={demo.link}>
                        <a >
                          <div className={demo.isUpcoming ? 'img blur_img' : 'img'}>
                            <img src={demo.img} alt="" />
                          </div>
                          <div className="info">
                            <h6 className='text-center'>{ demo.title }</h6>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Demos