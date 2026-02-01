import React from "react";
import heroCss from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={heroCss.heroSection}>
      <div className={heroCss.glowEffect}></div>
      <div className={heroCss.glowEffect2}></div>
      <div className={heroCss.glowEffect3}></div>

      <div className="container position-relative z-2">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-8">
            <div
              className={`d-inline-flex align-items-center ${heroCss.badge}`}
            >
              <span className={heroCss.badgeDot}></span>
              <span className={heroCss.badgeDotMain}></span>
              <span>مرحباً بك في عدسة</span>
            </div>

            <h1 className={heroCss.mainTitle}>
              اكتشف <span className={heroCss.highlightText}>فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className={heroCss.subtitle}>
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <button className={heroCss.btnPrimary}>
                استكشف المقالات
                <i
                  className={`fa-solid fa-arrow-left me-2 ${heroCss.arrow}`}
                ></i>
              </button>

              <button className={heroCss.btnSecondary}>
                <i className="fa-regular fa-circle-question ms-2"></i>
                اعرف المزيد
              </button>
            </div>

            <div className="row mt-5 g-3 justify-content-center">
              <div className="col-6 col-md-3">
                <div className={heroCss.statCard}>
                  <i
                    className={`fa-regular fa-newspaper ${heroCss.statIcon}`}
                  ></i>
                  <h3 className={heroCss.statNumber}>50+</h3>
                  <span className={heroCss.statLabel}>مقالة</span>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className={heroCss.statCard}>
                  <i className={`fa-solid fa-users ${heroCss.statIcon}`}></i>
                  <h3 className={heroCss.statNumber}>+10ألف</h3>
                  <span className={heroCss.statLabel}>قارئ</span>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className={heroCss.statCard}>
                  <i
                    className={`fa-regular fa-folder-open ${heroCss.statIcon}`}
                  ></i>
                  <h3 className={heroCss.statNumber}>4</h3>
                  <span className={heroCss.statLabel}>تصنيفات</span>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className={heroCss.statCard}>
                  <i className={`fa-solid fa-pen-nib ${heroCss.statIcon}`}></i>
                  <h3 className={heroCss.statNumber}>6</h3>
                  <span className={heroCss.statLabel}>كاتب</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
