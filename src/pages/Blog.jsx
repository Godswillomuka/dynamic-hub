import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'design', label: 'Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'printing', label: 'Printing' },
  { id: 'business', label: 'Business' },
];

const blogPosts = [
  {
    id: 1,
    title: 'The Psychology of Color in Brand Design',
    excerpt: 'How color choices influence customer perception and brand recognition. Learn the science behind effective color palettes.',
    category: 'design',
    categoryLabel: 'Design',
    author: 'Sarah Mwangi',
    date: 'June 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'Vehicle Branding: Your Mobile Billboard',
    excerpt: 'Transform your fleet into powerful marketing tools. A complete guide to vehicle wraps and fleet branding.',
    category: 'branding',
    categoryLabel: 'Branding',
    author: 'James Ochieng',
    date: 'June 8, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
  },
  {
    id: 3,
    title: 'Print Quality: What Makes the Difference',
    excerpt: 'Understanding paper stocks, finishes, and printing techniques that elevate your materials from good to exceptional.',
    category: 'printing',
    categoryLabel: 'Printing',
    author: 'Amina Hassan',
    date: 'June 5, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80'
  },
  {
    id: 4,
    title: 'Building a Brand Identity from Scratch',
    excerpt: 'Step-by-step guide to creating a cohesive brand identity that resonates with your target audience.',
    category: 'branding',
    categoryLabel: 'Branding',
    author: 'Sarah Mwangi',
    date: 'June 2, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=800&q=80'
  },
  {
    id: 5,
    title: 'Sustainable Printing: Eco-Friendly Options',
    excerpt: 'How to reduce your environmental impact without compromising on quality. Green printing solutions for modern businesses.',
    category: 'printing',
    categoryLabel: 'Printing',
    author: 'James Ochieng',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'
  },
  {
    id: 6,
    title: 'Why Small Businesses Need Professional Branding',
    excerpt: 'Investing in professional branding pays dividends. Here is why your small business needs a strong visual identity.',
    category: 'business',
    categoryLabel: 'Business',
    author: 'Amina Hassan',
    date: 'May 25, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
  },
  {
    id: 7,
    title: 'Typography Trends for 2026',
    excerpt: 'The fonts and typographic styles that are defining modern design. Stay ahead with these emerging trends.',
    category: 'design',
    categoryLabel: 'Design',
    author: 'Sarah Mwangi',
    date: 'May 20, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80'
  },
  {
    id: 8,
    title: 'Packaging Design That Sells',
    excerpt: 'How strategic packaging design can increase sales and create memorable unboxing experiences for customers.',
    category: 'design',
    categoryLabel: 'Design',
    author: 'James Ochieng',
    date: 'May 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory !== 'all');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <div className="blog-page">
      {/* Dark Navy Hero */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <span className="blog-eyebrow">Our Blog</span>
            <h1 className="blog-hero-title">
              Insights & Ideas
            </h1>
            <p className="blog-hero-subtitle">
              Expert insights on design, branding, printing, and growing your business. 
              Stay informed with our latest articles and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-filter-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`blog-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'all' && featuredPost && (
        <section className="blog-featured">
          <div className="container">
            <div className="featured-post">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
              </div>
              <div className="featured-content">
                <span className="featured-category">{featuredPost.categoryLabel}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-meta">
                  <span className="featured-author">{featuredPost.author}</span>
                  <span className="featured-date">{featuredPost.date}</span>
                  <span className="featured-readtime">{featuredPost.readTime}</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="featured-link">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {regularPosts.map((post) => (
              <article className="blog-card" key={post.id}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="blog-card-category">{post.categoryLabel}</span>
                </div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span className="blog-card-author">{post.author}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="blog-card-link">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="blog-empty">
              <p>No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest insights, tips, and industry news delivered to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            <p className="newsletter-note">No spam, unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;