import React from 'react';
import styles from './assets/terms.module.css';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className={styles.pageWrapper} dir="rtl">
      
      <header className={styles.header}>
        <div className={styles.gridBackground}></div>
        <div className={styles.glowEffect}></div>

        <div className="container position-relative z-2 text-center">
          
          
          <nav className="d-flex justify-content-center align-items-center gap-2 mb-4 text-sm">
            <Link href="/home" className={styles.breadcrumbLink}>الرئيسية</Link>
            <i className={`fa-solid fa-angle-left ${styles.breadcrumbSeparator}`}></i>
            <span className={styles.breadcrumbActive}>شروط الخدمة</span>
          </nav>

          
          <div className={styles.headerIconBox}>
            <i className={`fa-solid fa-file-contract ${styles.headerIcon}`}></i>
          </div>

          <h1 className={styles.mainTitle}>شروط الخدمة</h1>
          <p className={styles.subTitle}>آخر تحديث: 15 يناير 2026</p>
        </div>
      </header>

      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            
            <div className={styles.warningBox}>
              <div className="d-flex gap-3 align-items-start">
                <div className="flex-shrink-0">
                  <i className={`fa-solid fa-triangle-exclamation ${styles.warningIcon}`}></i>
                </div>
                <div>
                  <h3 className={styles.warningTitle}>إشعار مهم</h3>
                  <p className={styles.warningText}>
                    يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-5">
              
              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>1</span>
                  الموافقة على الشروط
                </h2>
                <div className={styles.sectionContent}>
                  <p className={styles.textGray}>
                    بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.
                  </p>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>2</span>
                  رخصة الاستخدام
                </h2>
                <div className={styles.sectionContent}>
                  <p className={`${styles.textGray} mb-3`}>
                    يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
                  </p>
                  <p className={styles.subHeadingText}>بموجب هذا الترخيص لا يجوز لك:</p>
                  
                  <ul className={styles.restrictionList}>
                    <li>
                      <i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i>
                      <span>تعديل أو نسخ المواد</span>
                    </li>
                    <li>
                      <i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i>
                      <span>استخدام المواد لأي غرض تجاري أو للعرض العام</span>
                    </li>
                    <li>
                      <i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i>
                      <span>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
                    </li>
                    <li>
                      <i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i>
                      <span>إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
                    </li>
                    <li>
                      <i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i>
                      <span>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>3</span>
                  إخلاء المسؤولية
                </h2>
                <div className={styles.sectionContent}>
                  <p className={styles.textGray}>
                    المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.
                  </p>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>4</span>
                  القيود
                </h2>
                <div className={styles.sectionContent}>
                  <p className={styles.textGray}>
                    في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.
                  </p>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>5</span>
                  محتوى المستخدم
                </h2>
                <div className={styles.sectionContent}>
                  <p className={`${styles.textGray} mb-3`}>
                    إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتوزيعه.
                  </p>
                  <p className={styles.subHeadingText}>يجب ألا يكون محتواك:</p>
                  <ul className={styles.restrictionList}>
                    <li><i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i><span>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span></li>
                    <li><i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i><span>انتهاك حقوق الملكية الفكرية للآخرين</span></li>
                    <li><i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i><span>احتواء فيروسات أو أكواد ضارة</span></li>
                    <li><i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i><span>انتهاك أي قوانين أو لوائح معمول بها</span></li>
                    <li><i className={`fa-solid fa-xmark ${styles.crossIcon}`}></i><span>الإعلان عن منتجات أو خدمات غير مصرح بها</span></li>
                  </ul>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>6</span>
                  التعديلات
                </h2>
                <div className={styles.sectionContent}>
                  <p className={styles.textGray}>
                    قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
                  </p>
                </div>
              </section>

              <section className={styles.sectionGroup}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.numberBadge}>7</span>
                  معلومات الاتصال
                </h2>
                <div className={styles.sectionContent}>
                  <p className={`${styles.textGray} mb-3`}>
                    إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
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
                باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً <Link to="/privacy" className={styles.linkHighlight}>سياسة الخصوصية</Link>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;