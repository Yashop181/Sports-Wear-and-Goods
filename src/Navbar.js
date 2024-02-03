import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import mylogo from "../src/public/images/logo2.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={mylogo} alt='logo' />
        </Link>
      </div>

      {/* Input with Search Icon */}
      <div className="search-container">
        <div className="input-group">
          <input type="text" placeholder="Search..." />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kid">Kid's</Link>
        <Link to="/mycart">Cart</Link>
        <Link to="/account">Account</Link>
        <Link to="/adminPage">Admin</Link>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
