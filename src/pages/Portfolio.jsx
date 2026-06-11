import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Portfolio.css';

// Service Images
import designImg from '../assets/service-design.png';
import vehicleImg from '../assets/service-vehicle.png';
import apparelImg from '../assets/service-apparel.png';
import identityImg from '../assets/service-identity.png';
import codingImg from '../assets/service-coding.png';
import brandingImg from '../assets/service-branding.png';
import largeFormatImg from '../assets/service-largeformat.png';
import packagingImg from '../assets/service-packaging.png';
import promoImg from '../assets/service-promo.png';

// Product Images
import businessCard from '../assets/bussinescard.png';
import flyer from '../assets/flyer.png';
import tshirts from '../assets/t-shirts.png';
import customMugs from '../assets/mug.png';
import capImg from '../assets/product-cap.png';
import penImg from '../assets/product-pen.png';
import bagImg from '../assets/product-bag.png';
import stickerImg from '../assets/product-sticker.png';
import notebookImg from '../assets/product-notebook.png';
import lanyardImg from '../assets/product-lanyard.png';
import deskcalender from '../assets/deskcalender.png';
import giftvoucher from '../assets/giftvoucher.png';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'merchandise', label: 'Merchandise' },
  { id: 'printing', label: 'Printing' },
  { id: 'digital', label: 'Digital' },
];

const portfolioItems = [
  // Graphic Design
  {
    id: 1,
    title: 'Corporate Logo Design',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    description: 'Modern logo and brand identity for a tech startup',
    image: designImg,
    client: 'TechStart Kenya',
    year: '2025'
  },
  {
    id: 2,
    title: 'Marketing Collateral Suite',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    description: 'Complete marketing materials including brochures and flyers',
    image: promoImg,
    client: 'GreenLeaf Co.',
    year: '2025'
  },
  // Branding
  {
    id: 3,
    title: 'Vehicle Fleet Branding',
    category: 'branding',
    categoryLabel: 'Branding',
    description: 'Full wrap design for delivery fleet of 15 vehicles',
    image: vehicleImg,
    client: 'Swift Logistics',
    year: '2025'
  },
  {
    id: 4,
    title: 'Corporate Identity System',
    category: 'branding',
    categoryLabel: 'Branding',
    description: 'Complete brand guidelines and stationery design',
    image: identityImg,
    client: 'Nairobi Finance',
    year: '2024'
  },
  {
    id: 5,
    title: 'Brand Strategy & Identity',
    category: 'branding',
    categoryLabel: 'Branding',
    description: 'Strategic rebranding for established retail chain',
    image: brandingImg,
    client: 'StyleHub Retail',
    year: '2025'
  },
  // Merchandise
  {
    id: 6,
    title: 'Custom Apparel Collection',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    description: 'Branded t-shirts and caps for corporate event',
    image: apparelImg,
    client: 'InnovateKE',
    year: '2025'
  },
  {
    id: 7,
    title: 'Premium Business Cards',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    description: 'Luxury foil-stamped business cards on premium stock',
    image: businessCard,
    client: 'Executive Partners',
    year: '2025'
  },
  {
    id: 8,
    title: 'Branded Drinkware',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    description: 'Custom mugs and tumblers for promotional campaign',
    image: customMugs,
    client: 'Cafe Mocha',
    year: '2024'
  },
  {
    id: 9,
    title: 'Event Merchandise Pack',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    description: 'Complete merchandise package for annual conference',
    image: bagImg,
    client: 'Tech Summit 2025',
    year: '2025'
  },
  {
    id: 10,
    title: 'Promotional Caps Collection',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    description: 'Embroidered caps for staff and promotional events',
    image: capImg,
    client: 'BuildRight Kenya',
    year: '2024'
  },
  // Printing
  {
    id: 11,
    title: 'Event Flyers & Posters',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'High-impact flyers for music festival campaign',
    image: flyer,
    client: 'Nairobi Beats',
    year: '2025'
  },
  {
    id: 12,
    title: 'Product Packaging Design',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Custom packaging for organic skincare line',
    image: packagingImg,
    client: 'PureGlow Naturals',
    year: '2025'
  },
  {
    id: 13,
    title: 'Large Format Signage',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Billboards and storefront signage for retail chain',
    image: largeFormatImg,
    client: 'MegaMart',
    year: '2024'
  },
  {
    id: 14,
    title: 'Custom Stickers & Labels',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Die-cut stickers for product packaging',
    image: stickerImg,
    client: 'Artisan Crafts',
    year: '2025'
  },
  {
    id: 15,
    title: 'Branded Notebooks',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Premium notebooks for corporate gifting',
    image: notebookImg,
    client: 'Law Associates',
    year: '2024'
  },
  {
    id: 16,
    title: 'Custom Lanyards',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Event lanyards with custom badge holders',
    image: lanyardImg,
    client: 'DevConf 2025',
    year: '2025'
  },
  {
    id: 17,
    title: 'Desk Calendars',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Branded desk calendars for client appreciation',
    image: deskcalender,
    client: 'Insurance Plus',
    year: '2024'
  },
  {
    id: 18,
    title: 'Gift Vouchers',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Premium gift vouchers for retail loyalty program',
    image: giftvoucher,
    client: 'ShopEasy',
    year: '2025'
  },
  {
    id: 19,
    title: 'Promotional Pens',
    category: 'printing',
    categoryLabel: 'Printing',
    description: 'Custom engraved pens for corporate events',
    image: penImg,
    client: 'BankFirst',
    year: '2024'
  },
  // Digital
  {
    id: 20,
    title: 'E-commerce Website',
    category: 'digital',
    categoryLabel: 'Digital',
    description: 'Full-stack e-commerce platform with payment integration',
    image: codingImg,
    client: 'FashionHub KE',
    year: '2025'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Hero Banner - Classic Design */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg">
          <img src={designImg} alt="" className="portfolio-hero-image" />
        </div>
        <div className="portfolio-hero-overlay"></div>
        
        {/* Decorative Elements */}
        <div className="portfolio-hero-decor portfolio-hero-decor-1"></div>
        <div className="portfolio-hero-decor portfolio-hero-decor-2"></div>
        
        <div className="container">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="portfolio-hero-badge">
              <span className="badge-dot"></span>
              <span>Our Creative Work</span>
            </div>
            
            <h1 className="portfolio-hero-title">
              Crafting Visual<br />
              <span className="highlight">Experiences</span> That Matter
            </h1>
            
            <p className="portfolio-hero-subtitle">
              From brand identities to custom merchandise, every project reflects our commitment 
              to quality, creativity, and client satisfaction.
            </p>
            
            <div className="portfolio-hero-stats">
              <div className="portfolio-stat">
                <span className="portfolio-stat-value">500+</span>
                <span className="portfolio-stat-label">Projects Completed</span>
              </div>
              <div className="portfolio-stat-divider"></div>
              <div className="portfolio-stat">
                <span className="portfolio-stat-value">200+</span>
                <span className="portfolio-stat-label">Happy Clients</span>
              </div>
              <div className="portfolio-stat-divider"></div>
              <div className="portfolio-stat">
                <span className="portfolio-stat-value">5+</span>
                <span className="portfolio-stat-label">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter-section">
        <div className="container">
          <div className="portfolio-filter-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`portfolio-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
                <span className="filter-count">
                  {category.id === 'all' 
                    ? portfolioItems.length 
                    : portfolioItems.filter(item => item.category === category.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <motion.div
            className="portfolio-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            key={activeCategory}
          >
            {filteredItems.map((item) => (
              <motion.div
                className="portfolio-card"
                key={item.id}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="portfolio-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                
                <div className={`portfolio-card-overlay ${hoveredItem === item.id ? 'visible' : ''}`}>
                  <div className="portfolio-card-content">
                    <span className="portfolio-card-category">{item.categoryLabel}</span>
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <p className="portfolio-card-description">{item.description}</p>
                    
                    <div className="portfolio-card-meta">
                      <div className="portfolio-card-meta-item">
                        <span className="meta-label">Client</span>
                        <span className="meta-value">{item.client}</span>
                      </div>
                      <div className="portfolio-card-meta-item">
                        <span className="meta-label">Year</span>
                        <span className="meta-value">{item.year}</span>
                      </div>
                    </div>

                    <Link to="/contact" className="portfolio-card-link">
                      Inquire About This Project
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="portfolio-empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="portfolio-cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>
              Let's create something amazing together. Get in touch to discuss your next project 
              and see how we can bring your vision to life.
            </p>
            <div className="portfolio-cta-buttons">
              <Link to="/get-quote" className="btn btn-primary">Start Your Project</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;