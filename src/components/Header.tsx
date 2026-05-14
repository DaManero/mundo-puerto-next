'use client';

import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <div id="Header_wrapper" className="bg-parallax" data-enllax-ratio="0.3">
      <header id="Header">
        <div className="header_placeholder"></div>
        <div id="Top_bar">
          <div className="container">
            <div className="column one">
              <div className="top_bar_left clearfix" style={{ width: '100%' }}>
                <div className="logo">
                  <Link
                    id="logo"
                    href="/"
                    title="Fundación Mundo Puerto"
                    data-height="55"
                    data-padding="30"
                  >
                    <img
                      className="logo-main scale-with-grid"
                      src="/images/mp_img/logoMP.png"
                      alt="Logo Fundación Mundo Puerto"
                      data-retina="/images/mp_img/logoMP.png"
                      data-height="40"
                    />
                    <img
                      className="logo-sticky scale-with-grid"
                      src="/images/mp_img/logoMP.png"
                      alt="Logo Fundación Mundo Puerto"
                      data-retina="/images/mp_img/logoMP.png"
                      data-height="40"
                    />
                    <img
                      className="logo-mobile scale-with-grid"
                      src="/images/mp_img/logoMP.png"
                      alt="Logo Fundación Mundo Puerto"
                      data-retina="/images/mp_img/logoMP.png"
                      data-height="40"
                    />
                    <img
                      className="logo-mobile-sticky scale-with-grid"
                      src="/images/mp_img/logoMP.png"
                      alt="Logo Fundación Mundo Puerto"
                      data-retina="/images/mp_img/logoMP.png"
                      data-height="40"
                    />
                  </Link>
                </div>
                <div className="menu_wrapper">
                  <Navigation />
                  <a className="responsive-menu-toggle" href="#">
                    <i className="icon-menu-fine"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
