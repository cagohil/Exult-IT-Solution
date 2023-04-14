import Link from 'next/link';

const Navbar = ({ navbarRef, bgTransparent }) => {

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light style-5 ${bgTransparent ? 'bg-transparent':''}`} ref={navbarRef}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo_home5.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link legacyBehavior href="/">
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/about-us">
                <a className="nav-link">
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/technologies">
                <a className="nav-link">
                  Our Technologies
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link legacyBehavior href="/services/website-development"><a className="dropdown-item">Website Development</a></Link></li>
                <li><Link legacyBehavior href="/services/cloud-computing-services"><a className="dropdown-item">Cloud Services</a></Link></li>
                <li><Link legacyBehavior href="/services/mobile-app-development"><a className="dropdown-item">Mobile App Development</a></Link></li>
                <li><Link legacyBehavior href="/services/crm-development-company"><a className="dropdown-item">CRM Software Company</a></Link></li>
                <li><Link legacyBehavior href="/services/ecommerce-web-development"><a className="dropdown-item">E-commerce Web Development</a></Link></li>
                <li><Link legacyBehavior href="/services/search-engine-optimization"><a className="dropdown-item">Search Engine Optimization</a></Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/contact-us">
                <a className="nav-link">
                  Contact Us
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/blog">
                <a className="nav-link">
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/remote-staff">
                <a className="nav-link">
                  Remote Staff
                </a>
              </Link>
            </li>


          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <Link legacyBehavior href="/contact-us">
                <a className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                  <span>Get a Quote<i className="bi bi-arrow-right ms-1"></i> </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar