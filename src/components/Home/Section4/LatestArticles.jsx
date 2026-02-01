import React from 'react';
import styles from './LatestArticles.module.css';
import { Link } from 'react-router-dom';

const LatestArticles = ({ data }) => {
  if (!data || !data.posts) return null;

  const sortedPosts = [...data.posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const latestPosts = sortedPosts.slice(0, 3);

  return (
    <section className={styles.sectionContainer}>
      <div className="container">

        <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">


          <div className="text-end ms-auto">
            <div className={`d-inline-flex align-items-center ${styles.badge}`}>
              <span className={styles.badgeDot}></span>
              <span className={styles.badgeDotMain}></span>
              <span>الأحدث</span>
            </div>

            <h2 className={styles.sectionTitle}>أحدث المقالات</h2>
            <p className={styles.sectionSubtitle}>محتوى جديد طازج من المطبعة</p>
          </div>

          <Link to="/blog" className={styles.viewAllBtn}>
            عرض جميع المقالات
            <i className="fa-solid fa-arrow-left me-2"></i>
          </Link>

        </div>

        <div className="row g-4">
          {latestPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="col-12 col-md-6 col-lg-4 text-decoration-none">
              <div className={styles.articleCard}>

                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} className={styles.cardImage} />
                  <span className={styles.categoryBadge}>{post.category}</span>
                </div>

                <div className={styles.cardContent}>

                  <div className="d-flex justify-content-between align-items-center mb-3 text-secondary">
                    <span className={styles.metaText}>
                      <i className="fa-regular fa-clock ms-1"></i> {post.readTime}
                    </span>
                    <span className={styles.metaText}>
                      • {post.date}
                    </span>
                  </div>

                  <div className="mb-4">
                    <Link to={`/blog/${post.slug}`} className={styles.titleLink}>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                    </Link>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary border-opacity-10">
                    <div className="d-flex align-items-center gap-2">
                      <div className="text-end">
                        <span className={styles.authorName}>{post.author.name}</span>
                        <span className={styles.authorRole}>{post.author.role}</span>
                      </div>
                      <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatar} />
                    </div>

                    <Link to={`/blog/${post.slug}`} className={styles.arrowButton}>
                      <i className="fa-solid fa-chevron-left"></i>
                    </Link>

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


export default LatestArticles;
