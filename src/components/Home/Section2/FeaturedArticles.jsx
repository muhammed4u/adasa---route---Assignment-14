import React from 'react';
import styles from './featuredArticles.module.css';
import { Link } from 'react-router-dom';

const FeaturedArticles = ({ data }) => {
  if (!data || !data.posts) return null;

  const featuredPosts = data.posts.filter(post => post.featured === true);
  return (
    <section className={styles.sectionContainer}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <Link to="/blog" className={styles.viewAllBtn}>
            <i className="fa-solid fa-arrow-left me-2"></i>
            عرض الكل
          </Link>

          <div className="text-end">
            <div className={styles.headerBadgeWrapper}>
              <div className={`d-inline-flex align-items-center ${styles.badge}`}>
                <span>مميز</span>
                <span className={styles.badgeDotMain}></span>
                <span className={styles.badgeDot}></span>
              </div>
            </div>
            <h2 className={styles.sectionTitle}>مقالات مختارة</h2>
            <p className={styles.sectionSubtitle}>محتوى منتقى ليبدأ رحلة تعلمك</p>
          </div>
        </div>

        <div className="d-flex flex-column gap-4">
          {featuredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className={`text-decoration-none ${styles.articleCard}`}>
              <div className="row g-0 align-items-stretch">

                <div className="col-lg-7 col-md-6 order-1">
                  <div className={styles.imageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.cardImage} />

                    <span className={styles.featuredBadge}>
                      <i className="fa-solid fa-star ms-1"></i> مميز
                    </span>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 order-2">
                  <div className={styles.cardContent}>

                    <div className="d-flex  align-items-center mb-3">

                      <span className={`ms-2 ${styles.categoryBadge} ${styles[post.category] || ''}`}>
                        {post.category}
                      </span>

                      <span className={styles.readTime}>
                        <i className="fa-regular fa-clock ms-1"></i>
                        {post.readTime}
                      </span>
                    </div>

                    <div className="mb-4">
                      <Link to={`/blog/${post.slug}`} className={styles.titleLink}>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                      </Link>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-end mt-auto">
                      <div className="d-flex align-items-center gap-2">
                        <div className="d-flex flex-column text-end">
                          <span className={styles.authorName}>{post.author.name}</span>
                          <span className={styles.postDate}>{post.date}</span>
                        </div>
                        <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatar} />
                      </div>

                      <Link to={`/blog/${post.slug}`} className={styles.readLink}>
                        اقرأ المقال
                        <i className="fa-solid fa-arrow-left me-2"></i>
                      </Link>



                    </div>

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

export default FeaturedArticles;