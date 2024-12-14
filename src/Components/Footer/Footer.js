import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons for social media

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo or Title */}
        <div className="footer-logo">
          <h1>BrandName</h1>
          <p>Innovating your world with passion.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Phone: <a href="tel:+11234567890">+1 123-456-7890</a></p>
          <p>Email: <a href="mailto:info@brandname.com">info@brandname.com</a></p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit"><FaEnvelope /> Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 BrandName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
