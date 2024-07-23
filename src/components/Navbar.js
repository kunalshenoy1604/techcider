// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import techciderLogo from '../images/techcider.png';

const TechciderNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`techcider-navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={techciderLogo} alt="Techcider Logo" className="logo-image" />
        </Link>
        <div className="navbar-links">
          {['Home', 'Resources', 'Team', 'Contact Us'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className={`nav-link ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`) ? 'active' : ''}`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default TechciderNavbar;