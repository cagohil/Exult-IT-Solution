import { useEffect } from 'react';
import technologiesData from '@data/technologies.json';

const Header = () => {



  return (
    <header >
      <div className="container">
        <div className="row justify-content-start m-auto">
          {
            technologiesData.technologies.map((tech, i) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 headerBox" key={i}>
                <a href="#" className="img m-auto">
                  <img src={tech} alt="" />
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </header>
  )
}

export default Header