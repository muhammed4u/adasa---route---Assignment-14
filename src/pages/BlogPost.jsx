import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './assets/blogPost.module.css';

const BlogPost = ({ data }) => {
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const currentSlug = pathSegments[pathSegments.length - 1];

    if (data && data.posts) {
      const foundPost = data.posts.find(p => p.slug === currentSlug);
      
      if (foundPost) {
        setPost(foundPost);
        
        const related = data.posts
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
  }, [data, location.pathname]);

  if (!post) return <div className="text-white text-center py-20">جاري التحميل...</div>;

  const renderContent = (content) => {
    return content.split('\n\n').map((block, index) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={index} id={`section-${index}`} className={styles.contentHeading}>
            <span className={styles.headingIconBox}>
              <i className="fa-solid fa-camera"></i>
            </span>
            {block.replace('## ', '')}
          </h2>
        );
      }
      return <p key={index} className={styles.contentText}>{block}</p>;
    });
  };

  return (
    <main className={styles.mainWrapper}>
      <article className={styles.articleContainer}>
        
        <div className={styles.heroSection}>
          <img src={post.image} alt={post.title} className={styles.heroImage} />
          <div className={styles.heroOverlayBottom}></div>
          <div className={styles.heroOverlayLeft}></div>
          
          <div className={styles.breadcrumbWrapper}>
            <nav className={styles.breadcrumbNav}>
              <Link to="/" className={styles.breadcrumbLink}><i className="fa-solid fa-home"></i></Link>
              <i className="fa-solid fa-chevron-left text-white/30 text-xs mx-2" style={{fontSize: '10px', opacity: 0.5}}></i>
              <Link to="/blog" className={styles.breadcrumbLink}>المدونة</Link>
              <i className="fa-solid fa-chevron-left text-white/30 text-xs mx-2" style={{fontSize: '10px', opacity: 0.5}}></i>
              <span className={styles.breadcrumbActive}>{post.category}</span>
            </nav>
          </div>

          <div className={styles.heroContentContainer}>
            <div className="container">
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <Link to={`/blog?category=${post.category}`} className={styles.heroCategoryBadge}>
                  {post.category}
                </Link>
                <div className={styles.heroMeta}>
                  <span><i className="fa-regular fa-calendar ms-2"></i>{post.date}</span>
                  <span className={styles.metaDivider}></span>
                  <span><i className="fa-regular fa-clock ms-2"></i>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className={styles.heroTitle}>{post.title}</h1>
              
              <div className={styles.authorBadge}>
                <img src={post.author.avatar} alt={post.author.name} className={styles.authorBadgeImg} />
                <div>
                  <p className={styles.authorBadgeName}>{post.author.name}</p>
                  <p className={styles.authorBadgeRole}>{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className={styles.contentGrid}>
            
            <div className={styles.articleColumn}>
              <div className={styles.quoteBox}>
                <p>"{post.excerpt}"</p>
              </div>

              <div className={styles.proseContent}>
                {renderContent(post.content)}
              </div>

              <div className={styles.tagsSection}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className={styles.iconBoxSmall}>
                    <i className="fa-solid fa-tags"></i>
                  </div>
                  <h3 className="fw-bold text-white m-0">الوسوم</h3>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {post.tags && post.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagItem}>#{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.shareSection}>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className={styles.iconBoxSmall}>
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <h3 className="fw-bold text-white m-0">شارك المقال</h3>
                  </div>
                  <div className="d-flex gap-2">
                    <button className={styles.socialBtn}><i className="fa-brands fa-x-twitter"></i></button>
                    <button className={styles.socialBtn}><i className="fa-brands fa-linkedin-in"></i></button>
                    <button className={styles.socialBtn}><i className="fa-brands fa-whatsapp"></i></button>
                    <button className={styles.socialBtn}><i className="fa-solid fa-link"></i></button>
                  </div>
                </div>
              </div>

              <div className={styles.authorBox}>
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
                  <img src={post.author.avatar} alt={post.author.name} className={styles.authorBoxImg} />
                  <div className="text-center text-sm-end flex-grow-1">
                    <span className={styles.authorLabel}>كاتب المقال</span>
                    <h3 className={styles.authorBoxName}>{post.author.name}</h3>
                    <p className={styles.authorBoxRole}>{post.author.role}</p>
                    <p className={styles.authorBoxBio}>
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className={styles.sidebarColumn}>
              <div className={styles.stickySidebar}>
                
                <div className={styles.sidebarCard}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className={styles.iconBoxSmall}>
                      <i className="fa-solid fa-list"></i>
                    </div>
                    <h3 className="fw-bold text-white m-0">محتويات المقال</h3>
                  </div>
                  <nav className={styles.tocNav}>
                    {post.content.split('\n\n').map((block, idx) => {
                      if (block.startsWith('## ')) {
                        return (
                          <a key={idx} href={`#section-${idx}`} className={styles.tocLink}>
                            <span className={styles.tocNumber}>{(idx + 1)}</span>
                            <span>{block.replace('## ', '')}</span>
                          </a>
                        );
                      }
                      return null;
                    })}
                  </nav>
                </div>

                <div className={styles.sidebarCard}>
                  <div className="row g-3">
                    <div className="col-6 text-center">
                      <div className={styles.infoItem}>
                        <i className="fa-regular fa-clock text-orange mb-2 fs-5"></i>
                        <p className="text-white fw-bold mb-0">{post.readTime}</p>
                        <p className="text-secondary small mb-0">وقت القراءة</p>
                      </div>
                    </div>
                    <div className="col-6 text-center">
                      <div className={styles.infoItem}>
                        <i className="fa-regular fa-calendar text-orange mb-2 fs-5"></i>
                        <p className="text-white fw-bold mb-0">{post.date}</p>
                        <p className="text-secondary small mb-0">تاريخ النشر</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.newsletterCard}>
                  <div className="text-center">
                    <div className={styles.newsletterIcon}>
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <h3 className="fw-bold text-white mb-2">لا تفوّت جديدنا</h3>
                    <p className="text-secondary small mb-4">اشترك للحصول على أحدث المقالات</p>
                    <Link to="/blog" className={styles.newsletterBtn}>تصفح المزيد</Link>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

        <div className={styles.relatedSection}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="d-flex align-items-center gap-3">
                <span className={styles.iconBoxMedium}>
                  <i className="fa-solid fa-images"></i>
                </span>
                <div>
                  <h2 className="fw-bold text-white m-0">مقالات قد تعجبك</h2>
                  <p className="text-secondary m-0 small">استكشف المزيد من المحتوى المميز</p>
                </div>
              </div>
              <Link to="/blog" className={styles.viewAllLink}>
                عرض الكل <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>

            <div className="row g-4">
              {relatedPosts.map((rPost) => (
                <div key={rPost.id} className="col-md-6 col-lg-4">
                  <Link to={`/blog/${rPost.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedImageWrapper}>
                      <img src={rPost.image} alt={rPost.title} className={styles.relatedImage} />
                      <div className={styles.relatedOverlay}></div>
                      <span className={styles.relatedBadge}>{rPost.category}</span>
                    </div>
                    <div className={styles.relatedContent}>
                      <h3 className={styles.relatedTitle}>{rPost.title}</h3>
                      <div className={styles.relatedMeta}>
                        <span className="d-flex align-items-center gap-2">
                          <img src={rPost.author.avatar} alt="" className={styles.relatedAvatar} />
                          {rPost.author.name}
                        </span>
                        <span>{rPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      </article>
    </main>
  );
}

export default BlogPost;