import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

// Images
import aboutTeam from '../assets/home/about-team.png';
import whyChoose from '../assets/home/whyChoose.jpeg';

// services images
import designImg from '../assets/GraphicDesign/graphic-design.png';
import largeFormatImg from '../assets/LargeFormat/large-format.png';
import vehicleImg from '../assets/VehicleGrapics/vehicle-graphics.png';
import officeBrandingImg from '../assets/OfficeBranding/officeBranding.png'; 
import promoItemsImg from '../assets/PromotionalItems/promo.png'; 
import webServicesImg from '../assets/WebServices/service-coding.png'; 

// best sells images
import businessCard from '../assets/PromotionalItems/bussinessCard.png';
import flyer from '../assets/PromotionalItems/flyer.png';
import tshirts from '../assets/PromotionalItems/t-shirts.png';
import customMugs from '../assets/PromotionalItems/mug.png';
import capImg from '../assets/PromotionalItems/cap.png';
import penImg from '../assets/PromotionalItems/pen.png';
import bagImg from '../assets/PromotionalItems/bag.png';
import stickerImg from '../assets/PromotionalItems/sticker.png';


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const HeroClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  const timeString = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = time.toLocaleDateString('en-US', options);
  const romanNumerals = ['XII','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

  return (
    <div className="home-hero-clock-container">
      <div className="home-hero-clock">
        <div className="home-hero-clock-face">
          {romanNumerals.map((numeral, index) => {
            const angle = (index * 30) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.sin(angle);
            const y = 50 - radius * Math.cos(angle);
            return (
              <div
                className="home-hero-clock-numeral"
                key={index}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {numeral}
              </div>
            );
          })}
          <div className="home-hero-clock-hand home-hero-clock-hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }}></div>
          <div className="home-hero-clock-hand home-hero-clock-minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
          <div className="home-hero-clock-hand home-hero-clock-second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
          <div className="home-hero-clock-center"></div>
        </div>
      </div>
      <div className="home-hero-clock-time-date">
        <div className="home-hero-clock-time">{timeString}</div>
        <div className="home-hero-clock-date">{dateString}</div>
      </div>
    </div>
  );
};

const services = [
  { 
    title: "Graphic Design", 
    desc: "Professional logo design, brand identity, packaging design, and marketing materials that capture your brand's essence and engage your audience.", 
    img: designImg, 
    link: "services/logo-design" 
  },
  { 
    title: "Large Format Printing", 
    desc: "High-quality banners, billboards, shop signage, window graphics, wall murals, and exhibition stands for maximum visibility and impact.", 
    img: largeFormatImg, 
    link: "services/pvc-flex-banners" 
  },
  { 
    title: "Vehicle Graphics", 
    desc: "Full and partial vehicle wraps, delivery van branding, motorcycle branding, and reflective stickers that turn your fleet into mobile billboards.", 
    img: vehicleImg, 
    link: "services/full-vehicle-wraps" 
  },
  { 
    title: "Office & Corporate Branding", 
    desc: "Office signage, wayfinding, staff ID cards, company profiles, and corporate communication materials that professionalize your workspace.", 
    img: officeBrandingImg, 
    link: "services/office-signage" 
  },
  { 
    title: "Promotional Items", 
    desc: "Branded umbrellas, t-shirts, hoodies, caps, corporate gifts, tote bags, mugs, and notebooks that keep your brand top-of-mind.", 
    img: promoItemsImg, 
    link: "services/branded-umbrellas" 
  },
  { 
    title: "Web Services", 
    desc: "Custom website design, web applications, UI/UX design, SEO, and software development that establish your digital presence.", 
    img: webServicesImg, 
    link: "services/web-applications" 
  },
];

const products = [
  { title: "Business Cards", desc: "Premium custom cards to make a strong first impression.", img: businessCard, link: "/portfolio" },
  { title: "Event Flyers", desc: "Vibrant, eye-catching flyers designed to promote your events.", img: flyer, link: "/portfolio" },
  { title: "Branded Shirts", desc: "Quality custom shirts for your team or event.", img: tshirts, link: "/portfolio" },
  { title: "Custom Mugs", desc: "Personalized mugs for your brand, perfect for gifts.", img: customMugs, link: "/portfolio" },
  { title: "Branded Caps", desc: "Stylish logo caps for staff, events, or giveaways.", img: capImg, link: "/portfolio" },
  { title: "Custom Pens", desc: "Affordable branded pens for promotion and business use.", img: penImg, link: "/portfolio" },
  { title: "Branded Bags", desc: "Tote and event bags with your logo for conferences.", img: bagImg, link: "/portfolio" },
  { title: "Stickers & Labels", desc: "Custom stickers and labels for packaging and branding.", img: stickerImg, link: "/portfolio" },
];

const reviews = [
  {
    name: "Sarah M.",
    role: "CEO, TechStart Kenya",
    text: "Dynamic Freelance Hub transformed our brand identity completely. The quality of their printing and attention to detail is unmatched. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    name: "James O.",
    role: "Marketing Director, GreenLeaf",
    text: "Fast turnaround, professional service, and exceptional quality. Our vehicle branding looks amazing and has significantly increased our visibility.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    name: "Amina K.",
    role: "Founder, StyleHub",
    text: "The custom merchandise they produced for our event was outstanding. Great communication throughout the process and delivered on time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-content-container">
          <motion.div
            className="home-hero-content-text"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1 className="home-hero-title" variants={fadeInUp}>
              Transform Your Brand with Premium Design & Print
            </motion.h1>
            <motion.p className="home-hero-subtitle" variants={fadeInUp}>
              From Dynamic Freelance Hub, we are a passionate team of designers, creators, and branding experts committed to helping businesses grow.
            </motion.p>
            <motion.div className="home-hero-ctas" variants={fadeInUp}>
              <Link to="/get-quote" className="home-btn home-btn-primary-alt">
                Get Started
              </Link>
              <a
                href="/dynamic company profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="home-btn home-btn-secondary-alt"
                download="dynamic_company_profile.pdf"
              >
                Download Company Profile
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-hero-clock-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <HeroClock />
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <div className="about-layout">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={aboutTeam} alt="Our creative team collaborating" />
              <div className="about-stats-card">
                <div className="stats-card-number">98%</div>
                <div className="stats-card-label">Client Satisfaction Rate</div>
              </div>
            </motion.div>

            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Who We Are</h2>
              <p className="section-subtitle">
                <strong>Dynamic Freelance Hub</strong> is more than a printing service. We craft compelling visual identities and produce high-quality printed materials that help businesses grow.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Grow Visibility</h4>
                    <p>Stand out in competitive markets with professional branding</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Enhance Credibility</h4>
                    <p>Professional, polished designs that build trust</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Consistent Branding</h4>
                    <p>Maintain strong identity across all platforms</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Comprehensive printing and branding solutions for your business</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <motion.div 
                className="service-card"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-image">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-number">0{idx + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="service-link">Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="products-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Best Sellers</h2>
            <p className="section-subtitle">High-quality products that make a lasting impression</p>
          </motion.div>

          <div className="products-grid">
            {products.map((product, idx) => (
              <motion.div 
                className="product-card"
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <img src={product.img} alt={product.title} />
                <div className="product-overlay">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/portfolio" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-layout">
            <motion.div 
              className="why-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Built for Quality, Speed & Trust</h2>
              <p className="section-subtitle">We use top-tier materials and advanced technology to deliver exceptional results that build trust and support business growth.</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Premium Quality Guarantee</h4>
                    <p>Top-tier materials and state-of-the-art equipment for every product</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Fast & Reliable Turnaround</h4>
                    <p>Efficient processes deliver your projects quickly without compromising quality</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  </div>
                  <div className="feature-text">
                    <h4>Expert Consultation</h4>
                    <p>Expert guidance tailored to your specific needs and brand goals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="why-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={whyChoose} alt="Quality work" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by businesses across Kenya for quality printing and branding</p>
          </motion.div>

          <div className="reviews-grid">
            {reviews.map((review, idx) => (
              <motion.div 
                className="review-card"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <img src={review.avatar} alt={review.name} className="review-avatar" />
                  <div className="review-info">
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Home;