import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <section className="topbar-one">
        <div className="container">
          <ul className="topbar-one__contact">
            <li className="topbar-one__contact-item">
              <a href="mailto:help@example.com">
                <i className="material-icons">email</i>help@example.com
              </a>
            </li>
            <li className="topbar-one__contact-item">
              <a href="tel:123456789101">
                <i className="material-icons">local_phone</i>1234 5678 9101
              </a>
            </li>
          </ul>
          <div className="topbar-one__buttons">
            <select className="selectpicker topbar-one__language">
              <option>En</option>
              <option>Bn</option>
              <option>Du</option>
            </select>
            <Link href="/appointment" className="topbar-one__btn">
              Get Appointment
            </Link>
          </div>
        </div>
      </section>
      <header className="site-header header-one">
        <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/resources/logo-1-1.png"
                  className="main-logo"
                  alt="Logo"
                />
              </Link>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className="navigation-box">
                <li className="current">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/symptoms">Disease Symptoms</Link>
                </li>
                <li>
                  <Link href="/disease">Multi-disease</Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/kideny">Kidney</Link>
                    </li>
                    <li>
                      <Link href="/heart">Heart</Link>
                    </li>
                    <li>
                      <Link href="/liver">Liver</Link>
                    </li>
                    <li>
                      <Link href="/pancrease">Pancreas</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/disease">Drugs</Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/kideny">Alternative Drug</Link>
                    </li>
                    <li>
                      <Link href="/heart">Drug Response</Link>
                    </li>
                  </ul>
                </li>
                {/* Add more navigation items as needed */}
              </ul>
            </div>
            <div className="right-side-box">
              <Link href="/login" className="header-one__login">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
