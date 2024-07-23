// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import './Carousel.css';

// Import images
import blockchainImage from '../images/blockchain.png';
import ideahub from "../images/ideahub.png";
import ideahub2 from "../images/ideahub2.png";
import ideahub3 from "../images/ideahub3.png";

const TechciderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    dotsClass: "slick-dots custom-dot-class",
    customPaging: i => (
      <div className="custom-dot"></div>
    ),
    lazyLoad: 'ondemand' // Add lazy loading
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 1.2,
      transition: { duration: 0.5 }
    }
  };

  const slides = [
    { image: blockchainImage, title: "Blockchain Session", description: "Futuristic session by Dr. Yogesh Jadhav" },
    { image: ideahub, title: "Project Presentation", description: "" },
    { image: ideahub2, title: "Techcider Mavericks", description: "" },
    { image: ideahub3, title: "Team IdeaHub", description: "TechCider x Infinix collaborative team" }
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechciderCarousel;