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
        <Link className="navbar-brand" href="/">
          <img src="/assets/img/logo_home5.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <Link className="nav-link active dropdown-toggle" href="/" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Homes
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link href="/" legacyBehavior><a className="dropdown-item"> Landing Preview </a></Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link href="/" legacyBehavior><a className="dropdown-item">about</a></Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link">
                  portfolio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link">
                  blog
                  <small className="fs-10px icon-20 rounded-pill bg-blue5 text-white fw-bold px-3 ms-2 d-inline-flex justify-content-center align-items-center">3</small>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link">
                  contact us
                </a>
              </Link>
            </li>

          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <span className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link">
                    <i className="bi bi-person fs-5 me-2"></i>
                    sign in
                  </a>
                </Link>
              </span>
              <Link href="/" legacyBehavior>
                <a className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                  <span>Start Free Trial <i className="bi bi-arrow-right ms-1"></i> </span>
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