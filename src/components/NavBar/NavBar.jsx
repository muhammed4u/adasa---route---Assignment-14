import React from 'react';
import navBarCss from './NavBar.module.css';
import img from '../../assets/image.png'; 
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${navBarCss.navbarCustom} sticky-top`} dir="rtl">
      <div className="container-fluid max-w-7xl px-4 position-relative d-flex justify-content-between align-items-center">
        <NavLink className={`navbar-brand ${navBarCss.brandContainer}`} to="/">
          <div className={navBarCss.logoWrapper}>
            <img src={img} alt="Logo" className={navBarCss.brandLogo} />
          </div>
          <div className="d-flex flex-column">
            <span className={navBarCss.brandTitle}>عدسة</span>
            <span className={`d-none d-sm-block ${navBarCss.brandSubtitle}`}>عالم التصوير الفوتوغرافي</span>
          </div>
        </NavLink>
        <div className={`d-none d-lg-flex ${navBarCss.desktopNavCentered}`}>
          <div className={navBarCss.desktopPillsWrapper}>
            <NavLink 
              to="/home" 
              className={({ isActive }) => `${navBarCss.desktopLink} ${(isActive || location.pathname === '/') ? navBarCss.desktopLinkActive : ''}`}
            >
              الرئيسية
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => `${navBarCss.desktopLink} ${isActive ? navBarCss.desktopLinkActive : ''}`}
            >
              المدونة
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `${navBarCss.desktopLink} ${isActive ? navBarCss.desktopLinkActive : ''}`}
            >
              من نحن
            </NavLink>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 gap-md-3">
            <div className="d-none d-lg-flex align-items-center gap-3">
                <button className={navBarCss.iconBtn}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <NavLink to="/blog" className={navBarCss.ctaButtonDesktop}>
                  ابدأ القراءة
                </NavLink>
            </div>
            <button 
                className={`navbar-toggler d-lg-none ${navBarCss.mobileToggler}`} 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#mobileMenu" 
                aria-controls="mobileMenu" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>

      </div>
      <div className="container-fluid px-4 d-lg-none">
        <div className="collapse navbar-collapse mt-3" id="mobileMenu">
          <div className={navBarCss.mobileMenuBox}>
            <div className="d-flex flex-column gap-1">
              <NavLink 
                to="/home" 
                className={({ isActive }) => `${navBarCss.mobileLink} ${isActive ? navBarCss.mobileLinkActive : ''}`}
              >
                الرئيسية
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => `${navBarCss.mobileLink} ${isActive ? navBarCss.mobileLinkActive : ''}`}
              >
                المدونة
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `${navBarCss.mobileLink} ${isActive ? navBarCss.mobileLinkActive : ''}`}
              >
                من نحن
              </NavLink>
              
              <NavLink to="/start" className={`${navBarCss.ctaButtonMobile} mt-2`}>
                ابدأ القراءة
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;