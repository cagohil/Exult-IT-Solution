import Link from 'next/link';

const TopNav = ({ style, rtl }) => {
  return (
    <div className={`top-navbar style-${style}`}>
        <div className="content text-white" style={{padding:"0 2.5vw"}}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <div className="top-links">
                <div className="text text-white d-flex">
                  <div >
                    <a href="tel:+1-586-569-9657"><i className="fal fa-phone"></i> +1-586-569-9657 </a>
                    <a className='mx-3'> | </a>
                    <a href="mailto:info@exultitsolution.com"><i className="fal fa-envelope"></i> info@exultitsolution.com </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="r-side">
                <div className="socail-icons d-flex justify-content-end">
                  <a href="#">
                    <i className="fab fa-twitter m-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f m-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in m-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram m-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default TopNav