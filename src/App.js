import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TechciderNavbar from './components/Navbar';
import TechciderCarousel from './components/Carousel';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import { FaWhatsapp, FaRocket, FaLaptopCode, FaUsers, FaBrain } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Resources from './components/Resources';

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationComplete(true), 2000);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <TechciderNavbar />
        <div className="whatsapp-button">
          <a href="https://chat.whatsapp.com/F8tYocBZgDiEKn1Sx97bLE" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={24} />
          </a>
        </div>
        <Routes>
          <Route exact path="/" element={
            <div className="landing-wrapper">
              <div className="hero-section">
                <motion.h1 
                  className="hero-title"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Welcome to Techcider
                </motion.h1>
                <motion.p 
                  className="hero-subtitle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Empowering the next generation of tech innovators
                </motion.p>
                <motion.button 
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://chat.whatsapp.com/F8tYocBZgDiEKn1Sx97bLE", "_blank")}
                >
                  Join Techcider
                </motion.button>
              </div>

              <TechciderCarousel />

              <div className="stats-section">
                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="stat-number">A+</h2>
                  <p className="stat-label">Club Rating</p>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h2 className="stat-number">15+</h2>
                  <p className="stat-label">Sessions</p>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <h2 className="stat-number">20+</h2>
                  <p className="stat-label">Team Members</p>
                </motion.div>
              </div>

              <div className="join-techcider-section">
                <h2>Why Join Techcider?</h2>
                <div className="reasons-grid">
                  <AnimatePresence>
                    {animationComplete && (
                      <>
                        <motion.div 
                          className="reason-card"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="reason-icon"><FaRocket /></div>
                          <h3>Exciting Projects</h3>
                          <p>Work on cutting-edge technology projects</p>
                        </motion.div>
                        <motion.div 
                          className="reason-card"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="reason-icon"><FaLaptopCode /></div>
                          <h3>Hands-on Experience</h3>
                          <p>Gain practical skills through real-world applications</p>
                        </motion.div>
                        <motion.div 
                          className="reason-card"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <div className="reason-icon"><FaUsers /></div>
                          <h3>Networking</h3>
                          <p>Connect with like-minded tech enthusiasts</p>
                        </motion.div>
                        <motion.div 
                          className="reason-card"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <div className="reason-icon"><FaBrain /></div>
                          <h3>Learn & Grow</h3>
                          <p>Continuous learning opportunities and workshops</p>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          } />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;