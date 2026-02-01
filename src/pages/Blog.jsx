import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './assets/blog.module.css';

const Blog = ({ data }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory('الكل');
    }
    setCurrentPage(1);
  }, [location.search]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategory('الكل');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const filteredPosts = data && data.posts ? data.posts.filter((post) => {
    const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) : [];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const categories = data && data.categories ? ['الكل', ...data.categories.map(cat => cat.name)] : ['الكل'];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.gridBackground}></div>
        <div className={styles.glowEffect}></div>
        <div className={styles.glowEffect2}></div>
        <div className={styles.headerContent}>
          <div className={styles.labelWrapper}>
            <span className={styles.badgeDot}></span>
            <i className="fa-solid fa-pen-nib ms-2"></i>
            مدونتنا
          </div>
          <h1 className={styles.mainTitle}>
            استكشف <span className={styles.gradientText}>مقالاتنا</span>
          </h1>
          <p className={styles.subTitle}>
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <div className={styles.stickyBar}>
        <div className="container">
          <div className={styles.controlsWrapper}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
            </div>

            <div className={styles.filterButtons}>
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className={`${styles.filterBtn} ${selectedCategory === cat ? styles.activeFilter : ''}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <p className={styles.resultsCount}>
            عرض <span className="fw-bold text-white">{filteredPosts.length}</span> مقالات
            {selectedCategory !== 'الكل' && (
              <> في <span className={styles.categoryHighlight}>{selectedCategory}</span></>
            )}
          </p>

          <div className="d-flex align-items-center gap-3">
            {selectedCategory !== 'الكل' && (
              <button onClick={handleClearFilters} className={styles.clearFilterBtn}>
                <i className="fa-solid fa-xmark ms-1"></i>
                مسح الفلاتر
              </button>
            )}

            <div className={styles.viewToggle}>
              <button
                className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.activeView : ''}`}
                onClick={() => setViewMode('grid')}
                title="عرض شبكي"
              >
                <i className="fa-solid fa-border-all"></i>
              </button>
              <button
                className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.activeView : ''}`}
                onClick={() => setViewMode('list')}
                title="عرض قائمة"
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'row g-4' : 'd-flex flex-column gap-4'}>
          {currentPosts.map((post) => (
            <div key={post.id} className={viewMode === 'grid' ? 'col-md-6 col-lg-4' : 'col-12'}>
              <article className={`${styles.articleCard} ${viewMode === 'list' ? styles.cardList : ''}`}>
                <Link to={`/blog/${post.slug}`} className={styles.cardLink}>
                  <div className={viewMode === 'list' ? styles.imageWrapperList : styles.imageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.postImage} />
                    <div className={styles.imageOverlay}></div>
                    <span className={styles.categoryBadge}>{post.category}</span>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.metaInfo}>
                      <span><i className="fa-regular fa-clock ms-1"></i>{post.readTime}</span>
                      <span className={styles.dotSeparator}></span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <div className="d-flex align-items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatar} />
                        <div className="d-flex flex-column">
                          <span className={styles.authorName}>{post.author.name}</span>
                          <span className={styles.authorRole}>{post.author.role}</span>
                        </div>
                      </div>
                      <div className={styles.arrowIcon}>
                        <i className="fa-solid fa-arrow-left"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.activePage : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        )}

        <p className="text-center text-secondary mt-3 small">
          صفحة {currentPage} من {totalPages}
        </p>
      </div>
    </main>
  );
}

export default Blog;