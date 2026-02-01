import React from 'react';
import footerCss from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={footerCss.footerSection} dir="rtl">
      <div className="container position-relative">
        <div className={footerCss.blob1}></div>
        <div className={footerCss.blob2}></div>
        <div className="row gy-5">
          
          
          <div className="col-lg-4 col-md-6">
            <div className={footerCss.brandContainer}>
               <div className={footerCss.logoBox}>ع</div>
               <span className={footerCss.brandName}>عدسة</span>
            </div>
            <p className={footerCss.brandDesc}>
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className={footerCss.socialIcons}>
              <a target="_blank" href="https://twitter.com/adasah" className={footerCss.iconBtn}>
                <i className='fa-brands fa-x-twitter'></i>
                </a>
              <a target="_blank" href="https://github.com/adasah" className={footerCss.iconBtn}>
                <i className='fa-brands fa-github'></i>
                </a>
              <a target="_blank" href="https://linkedin.com/company/adasah" className={footerCss.iconBtn}>
                <i className='fa-brands fa-linkedin-in'></i>
                </a>
              <a target="_blank" href="https://youtube.com/@adasah" className={footerCss.iconBtn}>
                <i className='fa-brands fa-youtube'></i>
                </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className={footerCss.columnTitle}>استكشف</h5>
            <ul className={footerCss.linksList}>
              <li><Link to="/home"  className={footerCss.footerLink}>الرئيسية</Link></li>
              <li><Link to="/blog"  className={footerCss.footerLink}>المدونة</Link></li>
              <li><Link to="/about" className={footerCss.footerLink}>من نحن</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className={footerCss.columnTitle}>التصنيفات</h5>
            <ul className={footerCss.linksList}>
              <li><Link to="/blog?category=إضاءة" className={footerCss.footerLink}>إضاءة</Link></li>
              <li><Link to="/blog?category=بورتريه" className={footerCss.footerLink}>بورتريه</Link></li>
              <li><Link to="/blog?category=مناظر طبيعية" className={footerCss.footerLink}>مناظر طبيعية</Link></li>
              <li><Link to="/blog?category=تقنيات" className={footerCss.footerLink}>تقنيات</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className={footerCss.columnTitle}>ابقى على اطلاع</h5>
            <p className="mb-3">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <form>
              <input type="email" className={footerCss.newsletterInput} placeholder="أدخل بريدك الإلكتروني" />
              <button type="button" className={footerCss.subscribeBtn}>اشترك</button>
            </form>
          </div>

        </div>

        <div className={`row ${footerCss.bottomBar} mt-4 pt-3`}>
          <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">
             &copy; 2026 عدسة. صنع بكل <span className={footerCss.heartIcon}><i className="fa-solid fa-heart"/></span> جميع الحقوق محفوظة.
          </div>
          <div className="col-md-6 text-center text-md-start">
            <div className={footerCss.bottomLinks}>
               <Link to="/privacy" className={footerCss.footerLink}>سياسة الخصوصية</Link>
               <Link to="/terms" className={footerCss.footerLink}>شروط الخدمة</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;