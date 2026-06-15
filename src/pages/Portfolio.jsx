import { useState } from 'react';
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
import customMugs from '../assets/mug.png';
import capImg from '../assets/product-cap.png';
import penImg from '../assets/product-pen.png';
import bagImg from '../assets/product-bag.png';
import stickerImg from '../assets/product-sticker.png';
import notebookImg from '../assets/product-notebook.png';
import lanyardImg from '../assets/product-lanyard.png';
import deskcalender from '../assets/deskcalender.png';
import giftvoucher from '../assets/giftvoucher.png';
import tshirts from '../assets/t-shirts.png';

// Hero image (right side)
import heroPortfolioImg from '../assets/service-largeformat.png';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'large-format-printing', label: 'Large Format Printing' },
  { id: 'vehicle-graphics', label: 'Vehicle Graphics' },
  { id: 'office-corporate', label: 'Office & Corporate' },
  { id: 'promotional-items', label: 'Promotional Items' },
  { id: 'web-services', label: 'Web Services' },
];

const portfolioItems = [
  // Graphic Design
  { id: 1, title: 'Corporate Logo Design', category: 'graphic-design', categoryLabel: 'Graphic Design', description: 'Modern logo and brand identity for a tech startup.', image: designImg, client: 'TechStart Kenya', year: '2025' },
  { id: 2, title: 'Marketing Collateral', category: 'graphic-design', categoryLabel: 'Graphic Design', description: 'Complete marketing materials including brochures.', image: promoImg, client: 'GreenLeaf Co.', year: '2025' },
  { id: 3, title: 'Product Packaging Design', category: 'graphic-design', categoryLabel: 'Graphic Design', description: 'Custom packaging for an organic skincare line.', image: packagingImg, client: 'PureGlow Naturals', year: '2025' },
  { id: 4, title: 'Brand Identity System', category: 'graphic-design', categoryLabel: 'Graphic Design', description: 'Complete brand guidelines and stationery design.', image: identityImg, client: 'Nairobi Finance', year: '2024' },
  
  // Large Format Printing
  { id: 5, title: 'Billboard Campaign', category: 'large-format-printing', categoryLabel: 'Large Format Printing', description: 'High-impact billboards for a national campaign.', image: largeFormatImg, client: 'MegaMart', year: '2024' },
  { id: 6, title: 'Roll Up Banners', category: 'large-format-printing', categoryLabel: 'Large Format Printing', description: 'Portable display banners for trade shows.', image: largeFormatImg, client: 'Tech Summit 2025', year: '2025' },
  { id: 7, title: 'Shop Signage', category: 'large-format-printing', categoryLabel: 'Large Format Printing', description: 'Storefront signage and window graphics.', image: largeFormatImg, client: 'StyleHub Retail', year: '2025' },
  { id: 8, title: 'Wall Murals', category: 'large-format-printing', categoryLabel: 'Large Format Printing', description: 'Custom office wall murals and branding.', image: largeFormatImg, client: 'Creative Spaces', year: '2025' },
  
  // Vehicle Graphics
  { id: 9, title: 'Fleet Vehicle Wraps', category: 'vehicle-graphics', categoryLabel: 'Vehicle Graphics', description: 'Full wrap design for a delivery fleet of 15 vehicles.', image: vehicleImg, client: 'Swift Logistics', year: '2025' },
  { id: 10, title: 'Delivery Van Branding', category: 'vehicle-graphics', categoryLabel: 'Vehicle Graphics', description: 'Partial wraps for a food delivery service.', image: vehicleImg, client: 'FoodDash KE', year: '2025' },
  { id: 11, title: 'Motorcycle Branding', category: 'vehicle-graphics', categoryLabel: 'Vehicle Graphics', description: 'Reflective decals for boda boda fleet.', image: vehicleImg, client: 'Sendy Riders', year: '2024' },
  
  // Office & Corporate Branding
  { id: 12, title: 'Office Signage System', category: 'office-corporate', categoryLabel: 'Office & Corporate', description: 'Complete office signage including reception and wayfinding.', image: identityImg, client: 'Executive Towers', year: '2025' },
  { id: 13, title: 'Staff ID Cards', category: 'office-corporate', categoryLabel: 'Office & Corporate', description: 'Custom PVC ID cards with access control features.', image: identityImg, client: 'BankFirst', year: '2025' },
  { id: 14, title: 'Company Profile', category: 'office-corporate', categoryLabel: 'Office & Corporate', description: 'Premium company profile booklet design and print.', image: brandingImg, client: 'Nairobi Law Associates', year: '2024' },
  { id: 15, title: 'Presentation Folders', category: 'office-corporate', categoryLabel: 'Office & Corporate', description: 'Custom presentation folders with foil stamping.', image: identityImg, client: 'Investment Group', year: '2025' },
  
  // Promotional Items
  { id: 16, title: 'Custom Apparel Collection', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Branded t-shirts and caps for a corporate event.', image: apparelImg, client: 'InnovateKE', year: '2025' },
  { id: 17, title: 'Premium Business Cards', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Luxury foil-stamped business cards on premium stock.', image: businessCard, client: 'Executive Partners', year: '2025' },
  { id: 18, title: 'Branded Drinkware', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Custom mugs and tumblers for a promotional campaign.', image: customMugs, client: 'Cafe Mocha', year: '2024' },
  { id: 19, title: 'Event Merchandise Pack', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Complete merchandise package for an annual conference.', image: bagImg, client: 'Tech Summit 2025', year: '2025' },
  { id: 20, title: 'Promotional Caps', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Embroidered caps for staff and promotional events.', image: capImg, client: 'BuildRight Kenya', year: '2024' },
  { id: 21, title: 'Branded T-Shirts', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Custom screen printed t-shirts for team events.', image: tshirts, client: 'Sports Club', year: '2025' },
  { id: 22, title: 'Custom Stickers', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Die-cut stickers for product packaging and giveaways.', image: stickerImg, client: 'Artisan Crafts', year: '2025' },
  { id: 23, title: 'Branded Notebooks', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Premium notebooks for corporate gifting.', image: notebookImg, client: 'Law Associates', year: '2024' },
  { id: 24, title: 'Custom Lanyards', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Event lanyards with custom badge holders.', image: lanyardImg, client: 'DevConf 2025', year: '2025' },
  { id: 25, title: 'Desk Calendars', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Branded desk calendars for client appreciation.', image: deskcalender, client: 'Insurance Plus', year: '2024' },
  { id: 26, title: 'Gift Vouchers', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Premium gift vouchers for a retail loyalty program.', image: giftvoucher, client: 'ShopEasy', year: '2025' },
  { id: 27, title: 'Promotional Pens', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'Custom engraved pens for corporate events.', image: penImg, client: 'BankFirst', year: '2024' },
  { id: 28, title: 'Event Flyers & Posters', category: 'promotional-items', categoryLabel: 'Promotional Items', description: 'High-impact flyers for a music festival campaign.', image: flyer, client: 'Nairobi Beats', year: '2025' },
  
  // Web Services
  { id: 29, title: 'E-commerce Website', category: 'web-services', categoryLabel: 'Web Services', description: 'Full-stack e-commerce platform with payment integration.', image: codingImg, client: 'FashionHub KE', year: '2025' },
  { id: 30, title: 'Corporate Website', category: 'web-services', categoryLabel: 'Web Services', description: 'Responsive website for a financial services firm.', image: codingImg, client: 'Wealth Advisors', year: '2025' },
  { id: 31, title: 'Web Application', category: 'web-services', categoryLabel: 'Web Services', description: 'Custom dashboard and inventory management system.', image: codingImg, client: 'Logistics Plus', year: '2024' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Hero Section - Text Left, Image Right */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-grid">
            {/* Left Side - Text Content */}
            <div className="portfolio-hero-content">
              <h1 className="portfolio-hero-title">
                Creating <span className="highlight">Exceptional</span> Brand Experiences
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

            {/* Right Side - Image */}
            <div className="portfolio-hero-image">
              <img src={heroPortfolioImg} alt="Portfolio showcase" />
              <div className="portfolio-hero-image-glow"></div>
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

      {/* Portfolio Grid */}
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