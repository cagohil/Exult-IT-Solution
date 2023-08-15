import Link from 'next/link';

const TopNav = ({ style, rtl }) => {
  return (
    <div className={`top-navbar style-${style}`}>
      <div className="content text-white" style={{ padding: "0 2.5vw" }}>
        <div className="row align-items-center ">
          <div className="col-lg-6 col-sm-8 col-6 topBarInfo p-0">
            <div className="top-links">
              <div className="text-white d-flex">
                <div style={{ padding: "0px 0px 0px 10px" }}>
                  <a href="tel:+12488944428"><i className="fa fa-phone"> </i>&nbsp; (248) 894-4428</a>
                  <a className='mx-3 mailHidden'>|</a>
                  <a className='mailHidden' href="mailto:info@exultitsolution.com"><i className="fa fa-envelope"></i>&nbsp; info@exultitsolution.com </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-4 col-6 topSocialIcon">
            <div className="r-side">
              <div className="socail-icons d-flex justify-content-end">
                <a href="https://twitter.com/exultitsolution" rel="noreferrer" target="_blank">
                  <i className="fab fa-twitter m-2"></i>
                </a>
                <a href="https://www.facebook.com/exultitsolution" rel="noreferrer" target="_blank">
                  <i className="fab fa-facebook-f m-2"></i>
                </a>
                <a href="https://www.linkedin.com/company/exultit-solutions/" rel="noreferrer" target="_blank">
                  <i className="fab fa-linkedin-in m-2"></i>
                </a>
                <a href="https://www.instagram.com/exultitsolution/" rel="noreferrer" target="_blank">
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