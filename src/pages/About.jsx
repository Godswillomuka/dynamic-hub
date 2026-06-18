import { Link } from 'react-router-dom';
import './About.css';

// Import hero image
import heroAboutImg from '../assets/home/about-team.png';

const values = [
  {
    title: 'Uncompromising Quality',
    description: 'We use premium materials and state-of-the-art equipment to ensure every print and design meets the highest standards.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    title: 'Creative Innovation',
    description: 'We stay ahead of design trends and printing technologies to deliver fresh, modern solutions for your brand.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    )
  },
  {
    title: 'Client-Centric Focus',
    description: 'Your vision is our priority. We work closely with you at every step to ensure the final result exceeds expectations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: 'Reliable Delivery',
    description: 'We understand deadlines. Our efficient processes ensure your projects are delivered on time, every time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  }
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '98%', label: 'Client Satisfaction' }
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We start by understanding your brand, goals, and specific requirements through a detailed discussion.'
  },
  {
    number: '02',
    title: 'Design & Concept',
    description: 'Our creative team develops initial concepts and designs, refining them based on your feedback.'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Once approved, we move to production using high-quality materials and advanced printing technology.'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'We conduct strict quality checks before delivering your finished products on time and in perfect condition.'
  }
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section - Text Left, Image Right */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Side - Text Content */}
            <div className="about-hero-content">
              {/* <span className="about-eyebrow">About Us</span> */}
              <h1 className="about-hero-title">
                Crafting Brands,<br />Building Legacies
              </h1>
              <p className="about-hero-subtitle">
                We are a passionate team of designers, printers, and branding experts dedicated to helping businesses stand out and succeed.
              </p>
              
              <div className="about-hero-buttons">
                <Link to="/contact" className="about-btn-primary">Contact Us</Link>
                <Link to="/services" className="about-btn-secondary">Our Services</Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="about-hero-image">
              <img src={heroAboutImg} alt="About Dynamic Freelance Hub" />
              <div className="about-hero-image-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="Our team collaborating" 
                loading="lazy"
              />
            </div>
            <div className="story-content">
              {/* <span className="section-eyebrow">Our Story</span> */}
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text">
                Dynamic Freelance Hub was founded with a simple mission: to provide businesses with accessible, high-quality printing and branding solutions. 
              </p>
              <p className="section-text">
                What started as a small design studio has grown into a comprehensive creative hub. We combine artistic creativity with technical precision to deliver products that not only look great but also drive real business results. From business cards to vehicle wraps, we treat every project with the same level of care and attention to detail.
              </p>
              <div className="story-signature">
                <p className="signature-name">The Dynamic Team</p>
                <p className="signature-role">Creative Directors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To empower businesses of all sizes with exceptional design and printing services that enhance their brand identity and drive growth.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To be the leading creative and printing hub in the region, recognized for our innovation, quality, and unwavering commitment to client success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <div className="container">
          <div className="values-header">
            {/* <span className="section-eyebrow">What Drives Us</span> */}
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide our work and define our relationship with every client.</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="about-process">
        <div className="container">
          <div className="process-header">
            {/* <span className="section-eyebrow">How We Work</span> */}
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">A streamlined approach to delivering exceptional results, from concept to completion.</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;