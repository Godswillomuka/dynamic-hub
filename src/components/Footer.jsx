import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/dripkid.zilla/', label: 'Facebook' },
    { icon: FaXTwitter, href: '#', label: 'X' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@_kidzilla', label: 'TikTok' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_kidzilla/', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/god-swil-omuka-275708381/', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-text">
                  <span className="logo-accent">DYNAMIC</span>
                </span>
              </Link>
              <p className="footer-tagline">freelance hub</p>
              <p className="footer-description">
                Your trusted partner for premium printing and branding solutions. 
                We bring your vision to life with exceptional quality and service.
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div className="footer-col">
              <h4>OUR SERVICES</h4>
              <ul className="footer-links">
                <li><Link to="/services#graphic-design">Graphic Design</Link></li>
                <li><Link to="/services#branding">Branding Solutions</Link></li>
                <li><Link to="/services#printing">Printing Services</Link></li>
                <li><Link to="/services#signage">Signage & Displays</Link></li>
                <li><Link to="/services#merchandise">Custom Merchandise</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>QUICK LINKS</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Why Choose Us - NO ICONS */}
            <div className="footer-col">
              <h4>WHY CHOOSE US</h4>
              <ul className="footer-links">
                <li>Premium Quality</li>
                <li>Fast Turnaround</li>
                <li>Expert Designers</li>
                <li>Competitive Pricing</li>
                <li>24/7 Support</li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer-col">
              <h4>SUPPORT</h4>
              <ul className="footer-links">
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {currentYear} Dynamic Freelance Hub. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/cookies">Cookies</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}