import Link from 'next/link';
import footerData from '@data/Footer/footer.json';

const Footer = () => {
  return (
    <footer className="style-5 border-top brd-gray">
      <div className="container-fluid px-5" style={{maxWidth:"1400px"}}>
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-2 col-sm-6">
            <div className="items">
              <div className="title">
                U.S.A
              </div>
              <small className="text mb-2 d-block">
                {footerData.address.address1} <br /> {footerData.address.address2}
              </small>
              <small className="text mb-2 d-block">
                <a href="mailto:info@exultitsolution.com">{footerData.email1}</a>
              </small>
              <small className="text mb-2 d-block">
                <a href="tel:+1-586-569-9657">{footerData.phone1}</a>
              </small>
              <a href="tel:+1-586-569-9657" className="title mb-0" style={{color:"#157efb", cursor:"pointer"}}>
               Call us now
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="items">
              <div className="title">
                Canada
              </div>
              <small className="text mb-2 d-block">
                {footerData.address.address5} <br /> {footerData.address.address6}
              </small>
              <small className="text mb-2 d-block">
                <a href="mailto:sales@exultitsolution.com">{footerData.email2}</a>
              </small>
              <small className="text mb-2 d-block">
                <a href="tel:248-894-4428">{footerData.phone2}</a>
              </small>
              <a href="tel:248-894-4428" className="title mb-0" style={{color:"#157efb", cursor:"pointer"}}>
               Call us now
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="items">
              <div className="title">
                India
              </div>
              <small className="text mb-2 d-block">
                {footerData.address.address3} <br /> {footerData.address.address4}
              </small>
              <small className="text mb-2 d-block">
                <a href="mailto:info@exultitsolution.com">{footerData.email1}</a>
              </small>
              <small className="text mb-2 d-block">
                <a href="tel:+1-586-569-9657">{footerData.phone1}</a>
              </small>
              <a href="tel:+1-586-569-9657" className="title mb-0" style={{color:"#157efb", cursor:"pointer"}}>
               Call us now
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="items">
              <div className="title">
                Useful Links
              </div>
              <ul>
                {
                  footerData.usefulLinks.map((link, index) => (
                    <li key={index}>
                      <Link legacyBehavior href={link.link}><a>{link.title}</a></Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="items">
              <div className="title">
                Helpful Services
              </div>
              <ul>
                {
                  footerData.helpfulServices.map((link, index) => (
                    <li key={index}>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="">
                <div className="socail-icons">
                  <a href="https://twitter.com/exultitsolution" rel="noreferrer" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/exultitsolution" rel="noreferrer" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/exultit-solutions/" rel="noreferrer" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/exultitsolution/" rel="noreferrer" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6  text-center text-align-center">
              <small className="small mt-3">
                <a href="https://exultitsolution.com" rel="noreferrer" className="fw-bold text-decoration-underline" target="_blank"> Exult IT Solution </a> © Copyrights 2023 - 2024. All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer