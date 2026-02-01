import React from 'react';
import styles from './assets/about.module.css';
import { Link } from 'react-router-dom';

const About = ({ data }) => {
  const uniqueAuthors = [];
  const seenAuthors = new Set();

  if (data && data.posts) {
    data.posts.forEach(post => {
      if (!seenAuthors.has(post.author.name)) {
        seenAuthors.add(post.author.name);
        uniqueAuthors.push(post.author);
      }
    });
  }

  return (
    <div className={styles.pageWrapper} dir="rtl">

      <section className={styles.heroSection}>
        <div className={styles.gridBackground}></div>
        <div className={`${styles.glowEffect} ${styles.glowTopLeft}`}></div>
        <div className={`${styles.glowEffect} ${styles.glowBottomRight}`}></div>

        <div className="container position-relative z-2 text-center">


          <div className={`d-inline-flex align-items-center ${styles.badge}`}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeDotMain}></span>
            <span>من نحن</span>
          </div>

          <h1 className={styles.heroTitle}>
            مهمتنا هي <span className={styles.gradientText}>الإعلام والإلهام</span>
          </h1>

          <p className={styles.heroDesc}>
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="row g-3 justify-content-center mt-5">
            <div className="col-6 col-md-3">
              <div className={styles.glassCard}>
                <i className="fa-solid fa-users text-orange mb-2 fs-4"></i>
                <div className={styles.statNumber}>+2مليون</div>
                <div className={styles.statLabel}>قارئ شهرياً</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.glassCard}>
                <i className="fa-solid fa-newspaper text-orange mb-2 fs-4"></i>
                <div className={styles.statNumber}>+500</div>
                <div className={styles.statLabel}>مقالة منشورة</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.glassCard}>
                <i className="fa-solid fa-pen-nib text-orange mb-2 fs-4"></i>
                <div className={styles.statNumber}>+50</div>
                <div className={styles.statLabel}>كاتب خبير</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.glassCard}>
                <i className="fa-solid fa-book-open text-orange mb-2 fs-4"></i>
                <div className={styles.statNumber}>+15</div>
                <div className={styles.statLabel}>تصنيف</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionHeading}>
              <span className={styles.headingDecorLeft}></span>
              قيمنا
              <span className={styles.headingDecorRight}></span>
            </h2>
            <p className={styles.sectionSubText}>المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className={styles.valueCard}>
                <div className={styles.cardGlow}></div>
                <i className="fa-solid fa-bullseye text-orange fs-1 mb-4 d-block"></i>
                <h3 className={styles.valueTitle}>الجودة أولاً</h3>
                <p className={styles.valueText}>محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className={styles.valueCard}>
                <div className={styles.cardGlowOrange}></div>
                <i className="fa-solid fa-bolt text-orange fs-1 mb-4 d-block"></i>
                <h3 className={styles.valueTitle}>تركيز عملي</h3>
                <p className={styles.valueText}>أمثلة واقعية يمكنك تطبيقها اليوم</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className={styles.valueCard}>
                <div className={styles.cardGlow}></div>
                <i className="fa-solid fa-handshake text-orange fs-1 mb-4 d-block"></i>
                <h3 className={styles.valueTitle}>المجتمع</h3>
                <p className={styles.valueText}>تعلم مع آلاف المصورين</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className={styles.valueCard}>
                <div className={styles.cardGlowOrange}></div>
                <i className="fa-solid fa-arrows-rotate text-orange fs-1 mb-4 d-block"></i>
                <h3 className={styles.valueTitle}>دائماً محدث</h3>
                <p className={styles.valueText}>أحدث الاتجاهات وأفضل الممارسات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <div className="text-center mb-5">
            <span className={styles.sectionLabelSimple}>فريقنا</span>
            <h2 className={styles.teamHeading}>تعرف على كتابنا</h2>
            <p className={styles.sectionSubText}>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
          </div>

          <div className="row g-4">
            {uniqueAuthors.map((author, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
                <div className={styles.teamCard}>
                  <div className="position-relative d-inline-block mb-3">
                    <img src={author.avatar} alt={author.name} className={styles.authorAvatar} />
                    <div className={styles.verifiedBadge}>
                      <i className="fa-solid fa-check text-white" style={{ fontSize: '0.7rem' }}></i>
                    </div>
                  </div>
                  <h3 className={styles.authorName}>{author.name}</h3>
                  <p className={styles.authorRole}>{author.role}</p>

                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#" className={styles.socialBtnOrange}><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" className={styles.socialBtnDark}><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" className={styles.socialBtnBlue}><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow1}></div>
        <div className={styles.ctaGlow2}></div>

        <div className="container position-relative z-2 text-center">
          <h2 className={styles.ctaTitle}>لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className={styles.ctaText}>
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a href="mailto:hello@adasah.com" className={styles.ctaBtnPrimary}>
              <i className="fa-regular fa-envelope me-2"></i>
              تواصل معنا
            </a>
            <Link to="/blog" className={styles.ctaBtnOutline}>
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;