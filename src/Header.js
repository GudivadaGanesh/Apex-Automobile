// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <div className="icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-envelope"></i>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="nav">
        <ul className={menuOpen ? "show-menu" : ""}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#what-we-do" onClick={() => scrollToSection('what-we-do')}>About Us</a></li>
          <li><Link to="/our-business">Our Business</Link></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
