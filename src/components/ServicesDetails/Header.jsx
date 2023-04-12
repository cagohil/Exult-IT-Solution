import React from 'react'
import Link from 'next/link';

const Header = ({ page, title, path }) => {
  return (
    <section className="inner-header style-5">
      <div className="container">
        <div className="content">
          <div className="links">
            <Link href="/"> Home </Link>
            <Link href="#" className="ms-1"> { page } </Link>
          </div>
          <h2> { title } </h2>
          <p className="mb-10" > Your idea, our expert hands makes the product success. We have expert hand in multiple technology.
          </p>
          <img src="/assets/img/header/head7_rock.png" alt="" className="side-img slide_up_down" />
        </div>
      </div>
    </section>
  )
}

export default Header