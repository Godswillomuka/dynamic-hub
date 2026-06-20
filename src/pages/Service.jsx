import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceContent } from './ServicesContent';
import Sidebar from '../components/Sidebar';
import './Service.css';

const Service = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      const firstServiceSlug = Object.keys(serviceContent)[0];
      navigate(`/services/${firstServiceSlug}`, { replace: true });
      return;
    }

    const foundService = serviceContent[slug];
    
    if (foundService) {
      setService(foundService);
    } else {
      setService(null);
    }
    
    setLoading(false);
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="service-page">
        <Sidebar />
        <div className="service-loading">
          <div className="loading-spinner"></div>
          <p>Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-page">
        <Sidebar />
        <div className="service-not-found">
          <h1>Service Not Found</h1>
          <p>The service "{slug}" doesn't exist in our system.</p>
          <button 
            onClick={() => navigate('/')}
            className="back-to-services"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={index} className={`service-section text-section image-${section.imagePosition || 'right'}`}>
            <div className="section-content">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
            {section.image && (
              <div className="section-image">
                <img src={section.image} alt={section.imageAlt || section.title} />
              </div>
            )}
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className={`service-section list-section image-${section.imagePosition || 'right'}`}>
            <div className="section-content">
              <h2>{section.title}</h2>
              <ul className="service-list">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {section.image && (
              <div className="section-image">
                <img src={section.image} alt={section.imageAlt || section.title} />
              </div>
            )}
          </div>
        );
      
      case 'info':
        return (
          <div key={index} className="service-section info-section">
            <h2>{section.title}</h2>
            {section.includes && (
              <div className="info-includes">
                <h3>What's Included:</h3>
                <ul>
                  {section.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="service-page">
      <Sidebar />
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-description">{service.metaDescription}</p>
          <button 
            className="cta-button"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
        {service.heroImage && (
          <div className="hero-image">
            <img src={service.heroImage} alt={service.heroAlt || service.title} />
          </div>
        )}
      </section>

      {/* Service Sections */}
      <div className="service-sections">
        {service.sections.map((section, index) => renderSection(section, index))}
      </div>

      {/* FAQ Section
      {service.faq && service.faq.length > 0 && (
        <section className="service-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {service.faq.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* Bottom CTA */}
      {/* <section className="service-bottom-cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your {service.title.toLowerCase()} needs and get a free consultation.</p>
        <div className="cta-buttons">
          <button 
            className="cta-button primary"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/portfolio')}
          >
            View Our Portfolio
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Service;