import React from 'react';
import styles from './Subscribe.module.css';

const Subscribe = ({ data }) => {
  const avatars = data && data.posts 
    ? [...new Set(data.posts.map(post => post.author.avatar))].slice(0, 3) 
    : [];

  return (
    <section className={styles.sectionContainer}>
        <div className={styles.glowEffect}></div>
      <div className="container">
        <div className={styles.subscribeCard}>
          
          <div className={styles.iconWrapper}>
            <i className="fa-regular fa-envelope"></i>
          </div>

          <h2 className={styles.title}>اشترك في نشرتنا الإخبارية</h2>
          <p className={styles.description}>
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <div className={styles.formWrapper}>
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني" 
              className={styles.emailInput} 
            />
            <button className={styles.subscribeBtn}>
              اشترك الآن
            </button>
          </div>

          <div className={styles.footerInfo}>
            
            {avatars.length > 0 && (
              <div className={styles.avatarsGroup}>
                {avatars.map((avatarUrl, index) => (
                  <img 
                    key={index} 
                    src={avatarUrl} 
                    alt={`Subscriber ${index + 1}`} 
                    className={styles.avatar} 
                  />
                ))}
              </div>
            )}

            <div className={styles.footerTexts}>
              <span>انضم لـ <span className="fw-bold text-white">10,000+ مصور</span></span>
              <span className={styles.dotSeparator}>•</span>
              <span>بدون إزعاج</span>
              <span className={styles.dotSeparator}>•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


export default Subscribe;
