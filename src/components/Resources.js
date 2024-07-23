// src/components/Resources.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaVideo, FaCode, FaRocket } from 'react-icons/fa';
import reactCourseImage from '../images/react-js.png';
import webDevImage from '../images/webdev.png';
import dsaImage from '../images/dsa.png';
import gamedevImage from '../images/gamedev.png';
import NextJSImg from '../images/nextjs.png';

const ResourcesWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #f8f9fa;
`;

const Title = styled.h1`
  color: #F47216;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(244, 114, 22, 0.5);
`;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 0 20px rgba(244, 114, 22, 0.3);
`;

const SearchInput = styled.input`
  flex-grow: 1;
  background: transparent;
  border: none;
  color: #f8f9fa;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #F47216;
  font-size: 1.5rem;
  margin: auto 1rem;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ResourceCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(244, 114, 22, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 30px rgba(244, 114, 22, 0.5);
  }
`;

const ResourceImage = styled.div`
  height: 160px;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;

const ResourceInfo = styled.div`
  padding: 1rem;
`;

const ResourceTitle = styled.h3`
  color: #F47216;
  margin-bottom: 0.5rem;
`;

const ResourceDescription = styled.p`
  color: #cccccc;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ResourceMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 0.8rem;
`;

const ResourceType = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Resources = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const resources = [
      { id: 1, title: 'ReactJS Crash Course', type: 'Video Tutorial', icon: FaVideo, image: reactCourseImage, description: 'Learn ReactJS basics in this comprehensive crash course.', link: 'https://youtu.be/b9eMGE7QtTk?si=m3pCGKs1B53lJweQ' },
      { id: 2, title: 'Web Development Bootcamp', type: 'Video Series', icon: FaVideo, image: webDevImage, description: 'Comprehensive guide to modern web development.', link: 'https://youtu.be/zJSY8tbf_ys?si=pB5YhRZtPnaqe-di' },
      { id: 3, title: 'Data Structures & Algorithms', type: 'Video Series', icon: FaCode, image: dsaImage, description: 'Master DSA with Dr. Abdul Bari.', link: 'https://youtube.com/playlist?list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr&si=qrsfpVelynPKoIRN' },
      { id: 4, title: 'Game Development Roadmap', type: 'Project Guide', icon: FaRocket, image: gamedevImage, description: 'Understand the roadmap for Game Development in 2024', link: 'https://youtu.be/Y3BaqWrgP04?si=bSQ9-CuHZ5NwnH9H' },
      { id: 5, title: 'NextJS Full Course', type: 'Video Tutorial', icon: FaRocket, image: NextJSImg, description: 'Understand the roadmap for Game Development in 2024', link: 'https://youtu.be/wm5gMKuwSYk?si=RS_cORUf5W67bfb6' }
      // Add more resources as needed
    ];
  
    const filteredResources = resources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleResourceClick = (link) => {
      window.open(link, '_blank');
    };
  
    return (
      <ResourcesWrapper>
        <Title>Tech Learning Resources</Title>
        <SearchBar>
          <SearchInput 
            type="text" 
            placeholder="Search resources..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon />
        </SearchBar>
        <ResourceGrid>
          {filteredResources.map((resource) => (
            <ResourceCard 
              key={resource.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleResourceClick(resource.link)}
            >
              <ResourceImage src={resource.image} />
              <ResourceInfo>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <ResourceMeta>
                  <ResourceType>
                    {React.createElement(resource.icon)} {resource.type}
                  </ResourceType>
                  <span>4.5 ★</span>
                </ResourceMeta>
              </ResourceInfo>
            </ResourceCard>
          ))}
        </ResourceGrid>
      </ResourcesWrapper>
    );
  };
  
  export default Resources;