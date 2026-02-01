import React from 'react';
import { Link } from 'react-router-dom';
import styles from './assets/notFound.module.css';

const NotFound = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.pageWrapper}>
        
        <div className={styles.gridBackground}></div>
        
        <div className={styles.blobsContainer}>
          <div className={`${styles.blob} ${styles.blobOrange}`}></div>
          <div className={`${styles.blob} ${styles.blobYellow}`}></div>
        </div>

        <div className="container position-relative z-2 text-center px-4" style={{ maxWidth: '600px' }}>
          
          <div className={styles.titleWrapper}>
            <h1 className={styles.titleText}>404</h1>
            <div className={styles.titleGlow}>404</div>
          </div>

          <div className={styles.iconBoxWrapper}>
            <div className={styles.iconCircle}>
              <div className={styles.iconBg}></div>
              <i className={` fa-regular fa-face-frown ${styles.mainIcon}`}>
              </i>
            </div>
            
            <div className={styles.decoSquare}></div>
            <div className={styles.decoDot}></div>
          </div>

          
          <h2 className={styles.headingText}>عفواً! الصفحة غير موجودة</h2>
          <p className={styles.descriptionText}>
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
          </p>

          
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <Link to="/" className={styles.btnPrimary}>
              <i class="fa-solid fa-house ms-2"></i>
              الذهاب للرئيسية
            </Link>
            
            <Link to="/blog" className={styles.btnSecondary}>
              <i class="fa-solid fa-blog ms-2"></i>
              تصفح المقالات
            </Link>
          </div>

          
          <div className={styles.footerLinks}>
            <p className="text-secondary mb-3 small">قد تجد هذه مفيدة:</p>
            <div className="d-flex justify-content-center flex-wrap gap-3 text-sm">
              <Link to="/blog" className={styles.footerLink}>المدونة</Link>
              <span className="text-secondary">•</span>
              <Link to="/about" className={styles.footerLink}>من نحن</Link>
              <span className="text-secondary">•</span>
              <Link to="/privacy" className={styles.footerLink}>الخصوصية</Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default NotFound;