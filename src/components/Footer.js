// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to creating innovative solutions and delivering exceptional user experiences.
          </p>
        </div>
        <div className="footer-center">
          <h2>Connect With Us</h2>
          <div className="social-icons">
            <Link to="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
            <Link to="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
            <Link to="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
            <Link to="#" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
          </div>
        </div>
        <div className="footer-right">
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
