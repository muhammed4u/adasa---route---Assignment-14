import React from 'react';
import styles from './assets/privacy.module.css';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className={styles.pageWrapper} dir="rtl">
      
      <header className={styles.header}>
        
        <div className={styles.gridBackground}></div>
        <div className={styles.glowEffect}></div>
        <div className={styles.navitems}>
            <Link to="/" className={styles.navitem}>الرئيسية</Link>
            <i class="fa-solid fa-angle-left"></i>
            <Link to="/privacy" className={styles.mainnavitem}>سياسة الخصوصية</Link>
        </div>
        <div className="container position-relative z-2 text-center">
          
          <div className={styles.headerIconBox}>
            <i className={`fa-solid fa-shield-halved ${styles.headerIcon}`}></i>
          </div>

          <h1 className={styles.mainTitle}>سياسة الخصوصية</h1>
          <p className={styles.subTitle}>آخر تحديث: 15 يناير 2026</p>
        </div>
      </header>

      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            
           
            <div className={styles.introBox}>
              <div className="d-flex gap-3 align-items-start">
                <div className="flex-shrink-0">
                  <i className={`fa-solid fa-user-shield ${styles.introIcon}`}></i>
                </div>
                <div>
                  <h3 className={styles.introTitle}>خصوصيتك تهمنا</h3>
                  <p className={styles.introText}>نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-5">
              
              
              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>1</span>
                  مقدمة
                </h2>
                <div className={styles.sectionContent}>
                  <p className={styles.textGray}>
                    مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
                  </p>
                </div>
              </section>

              
              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>2</span>
                  المعلومات التي نجمعها
                </h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.customList}>
                    <li>
                      <i className={`fa-solid fa-check ${styles.listIcon}`}></i>
                      <span><strong className="text-white">بيانات الهوية:</strong> تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.</span>
                    </li>
                    <li>
                      <i className={`fa-solid fa-check ${styles.listIcon}`}></i>
                      <span><strong className="text-white">بيانات الاتصال:</strong> تشمل عنوان البريد الإلكتروني.</span>
                    </li>
                    <li>
                      <i className={`fa-solid fa-check ${styles.listIcon}`}></i>
                      <span><strong className="text-white">البيانات التقنية:</strong> تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.</span>
                    </li>
                    <li>
                      <i className={`fa-solid fa-check ${styles.listIcon}`}></i>
                      <span><strong className="text-white">بيانات الاستخدام:</strong> تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>3</span>
                  كيف نستخدم معلوماتك
                </h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.customList}>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>لتقديم خدمتنا والحفاظ عليها</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>لإخطارك بالتغييرات في خدمتنا</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>لتقديم دعم العملاء</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>لمراقبة استخدام خدمتنا</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>لاكتشاف ومنع ومعالجة المشاكل التقنية</span></li>
                  </ul>
                </div>
              </section>

              
              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>4</span>
                  ملفات تعريف الارتباط
                </h2>
                <div className={styles.sectionContent}>
                  <p className={styles.textGray}>
                    نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.
                  </p>
                </div>
              </section>

              
              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>5</span>
                  أمان البيانات
                </h2>
                <div className={styles.sectionContent}>
                  <p className={styles.textGray}>
                    لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.
                  </p>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>6</span>
                  حقوقك
                </h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.customList}>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>طلب الوصول إلى بياناتك الشخصية</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>طلب تصحيح بياناتك الشخصية</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>طلب مسح بياناتك الشخصية</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>الاعتراض على معالجة بياناتك الشخصية</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>طلب تقييد معالجة بياناتك الشخصية</span></li>
                    <li><i className={`fa-solid fa-check ${styles.listIcon}`}></i><span>الحق في سحب الموافقة</span></li>
                  </ul>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>7</span>
                  تواصل معنا
                </h2>
                <div className={styles.sectionContent}>
                  <p className={`${styles.textGray} mb-3`}>
                    إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
                  </p>
                  <a href="mailto:hello@adasah.com" className={styles.contactLink}>
                    <i className={`fa-solid fa-envelope me-2 ${styles.contactIcon}`}></i>
                    hello@adasah.com
                  </a>
                </div>
              </section>

            </div>

            <div className={styles.footerNote}>
              <p className="text-center m-0">
                باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً <Link to="/terms" className={styles.linkHighlight}>شروط الخدمة</Link>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;