import React from 'react';
import styles from './Categories.module.css';
import { Link } from 'react-router-dom';

const Categories = ({ data }) => {
  if (!data || !data.categories) return null;
  const categoriesList = data.categories;
  const getIcon = (catName) => {
    switch (catName) {
      case 'إضاءة': return 'fa-solid fa-lightbulb';
      case 'بورتريه': return 'fa-solid fa-user';
      case 'مناظر طبيعية': return 'fa-solid fa-image';
      case 'تقنيات': return 'fa-solid fa-sliders';
      case 'معدات': return 'fa-solid fa-camera-retro';
      default: return 'fa-solid fa-layer-group';
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <div className="container">
        
        <div className="text-center mb-5">
          <div
            className={`d-inline-flex align-items-center ${styles.badge}`}
          >
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeDotMain}></span> 
            <span>التصنيفات</span>
          </div>
          <h2 className={styles.sectionTitle}>استكشف حسب الموضوع</h2>
          <p className={styles.sectionSubtitle}>اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="row g-4 justify-content-start">
          {categoriesList.map((cat, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <Link to={`/blog?category=${cat.name}`} className={styles.cardLink}>
                <div className={styles.catCard}>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.iconBox}>
                       <i className={getIcon(cat.name)}></i>
                    </div>

                    <div className="mt-4">
                      <h3 className={styles.catName}>{cat.name}</h3>
                      <span className={styles.catCount}>{cat.count} مقالة</span>
                    </div>
                  </div>

                  <div className={styles.arrowIcon}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default Categories;
