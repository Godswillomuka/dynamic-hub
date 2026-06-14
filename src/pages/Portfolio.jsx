import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

// Import your images
import designImg from '../assets/service-design.png';
import vehicleImg from '../assets/service-vehicle.png';
import apparelImg from '../assets/service-apparel.png';
import identityImg from '../assets/service-identity.png';
import codingImg from '../assets/service-coding.png';
import brandingImg from '../assets/service-branding.png';
import largeFormatImg from '../assets/service-largeformat.png';
import packagingImg from '../assets/service-packaging.png';
import promoImg from '../assets/service-promo.png';
import businessCard from '../assets/bussinescard.png';
import flyer from '../assets/flyer.png';
// import tshirts from '../assets/t-shirts.png';
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
  { id: 1, title: 'Corporate Logo Design', category: 'graphic-design', categoryLabel: 'Graphic Design', description: 'Modern logo and brand identity for a tech startup.', image: designImg, client: 'TechStart Kenya', year: '2025' },
  { id: 2, title: 'Marketing Collateral', category: 'graphic-design', categoryLabel: 'Graphic Design', description: 'Complete marketing materials including brochures.', image: promoImg, client: 'GreenLeaf Co.', year: '2025' },
  { id: 3, title: 'Vehicle Fleet Branding', category: 'branding', categoryLabel: 'Branding', description: 'Full wrap design for a delivery fleet of 15 vehicles.', image: vehicleImg, client: 'Swift Logistics', year: '2025' },
  { id: 4, title: 'Corporate Identity System', category: 'branding', categoryLabel: 'Branding', description: 'Complete brand guidelines and stationery design.', image: identityImg, client: 'Nairobi Finance', year: '2024' },
  { id: 5, title: 'Brand Strategy & Identity', category: 'branding', categoryLabel: 'Branding', description: 'Strategic rebranding for an established retail chain.', image: brandingImg, client: 'StyleHub Retail', year: '2025' },
  { id: 6, title: 'Custom Apparel Collection', category: 'merchandise', categoryLabel: 'Merchandise', description: 'Branded t-shirts and caps for a corporate event.', image: apparelImg, client: 'InnovateKE', year: '2025' },
  { id: 7, title: 'Premium Business Cards', category: 'merchandise', categoryLabel: 'Merchandise', description: 'Luxury foil-stamped business cards on premium stock.', image: businessCard, client: 'Executive Partners', year: '2025' },
  { id: 8, title: 'Branded Drinkware', category: 'merchandise', categoryLabel: 'Merchandise', description: 'Custom mugs and tumblers for a promotional campaign.', image: customMugs, client: 'Cafe Mocha', year: '2024' },
  { id: 9, title: 'Event Merchandise Pack', category: 'merchandise', categoryLabel: 'Merchandise', description: 'Complete merchandise package for an annual conference.', image: bagImg, client: 'Tech Summit 2025', year: '2025' },
  { id: 10, title: 'Promotional Caps', category: 'merchandise', categoryLabel: 'Merchandise', description: 'Embroidered caps for staff and promotional events.', image: capImg, client: 'BuildRight Kenya', year: '2024' },
  { id: 11, title: 'Event Flyers & Posters', category: 'printing', categoryLabel: 'Printing', description: 'High-impact flyers for a music festival campaign.', image: flyer, client: 'Nairobi Beats', year: '2025' },
  { id: 12, title: 'Product Packaging Design', category: 'printing', categoryLabel: 'Printing', description: 'Custom packaging for an organic skincare line.', image: packagingImg, client: 'PureGlow Naturals', year: '2025' },
  { id: 13, title: 'Large Format Signage', category: 'printing', categoryLabel: 'Printing', description: 'Billboards and storefront signage for a retail chain.', image: largeFormatImg, client: 'MegaMart', year: '2024' },
  { id: 14, title: 'Custom Stickers & Labels', category: 'printing', categoryLabel: 'Printing', description: 'Die-cut stickers for product packaging.', image: stickerImg, client: 'Artisan Crafts', year: '2025' },
  { id: 15, title: 'Branded Notebooks', category: 'printing', categoryLabel: 'Printing', description: 'Premium notebooks for corporate gifting.', image: notebookImg, client: 'Law Associates', year: '2024' },
  { id: 16, title: 'Custom Lanyards', category: 'printing', categoryLabel: 'Printing', description: 'Event lanyards with custom badge holders.', image: lanyardImg, client: 'DevConf 2025', year: '2025' },
  { id: 17, title: 'Desk Calendars', category: 'printing', categoryLabel: 'Printing', description: 'Branded desk calendars for client appreciation.', image: deskcalender, client: 'Insurance Plus', year: '2024' },
  { id: 18, title: 'Gift Vouchers', category: 'printing', categoryLabel: 'Printing', description: 'Premium gift vouchers for a retail loyalty program.', image: giftvoucher, client: 'ShopEasy', year: '2025' },
  { id: 19, title: 'Promotional Pens', category: 'printing', categoryLabel: 'Printing', description: 'Custom engraved pens for corporate events.', image: penImg, client: 'BankFirst', year: '2024' },
  { id: 20, title: 'E-commerce Website', category: 'digital', categoryLabel: 'Digital', description: 'Full-stack e-commerce platform with payment integration.', image: codingImg, client: 'FashionHub KE', year: '2025' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Dark Navy Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-overlay"></div>
        <div className="container">
          <div className="portfolio-hero-content">
            <span className="portfolio-eyebrow">Selected Works</span>
            <h1 className="portfolio-hero-title">
              Our Portfolio
            </h1>
            <p className="portfolio-hero-subtitle">
              A curated collection of our recent projects. From brand identities to custom merchandise, 
              every piece reflects our commitment to quality and precision.
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
          </div>
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid with Card Overlays */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div 
                className="portfolio-card" 
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="portfolio-card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
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
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="portfolio-empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;