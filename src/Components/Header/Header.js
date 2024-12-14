import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './images/CAr-logo.avif'; // Replace with your actual logo image path

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="nav-auth-container">
        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button className="auth-btn login-btn">Login</button>
          <button className="auth-btn signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
