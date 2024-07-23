import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import kunalImage from '../images/kunalpp.jpg';
import shubhanImage from '../images/shubhan.jpeg';
import aaryaImage from '../images/aarya.jpeg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const TeamWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  color: #F47216;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const TeamMember = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${slideUp} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
  width: 280px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  ${props => props.isHead && `
    order: 0;
    width: 100%;
    max-width: 340px;
    margin-top: -20px;
    
    @media (max-width: 991px) {
      order: -1;
      margin-top: 0;
      margin-bottom: 2rem;
    }
  `}
`;

const MemberImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${TeamMember}:hover & {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #F47216;
`;

const MemberRole = styled.h3`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #F47216;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #d85f11;
    transform: scale(1.2);
  }
`;

const Team = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: 'Shubhan Singh', 
      role: 'Co-Head', 
      email: 'shubh.here.since0904@gmail.com', 
      image: shubhanImage,
      linkedin: 'https://www.linkedin.com/in/geeked-out-loud04/',
      github: 'https://github.com/shubhansingh'
    },
    { 
      id: 2, 
      name: 'Kunal Shenoy', 
      role: 'Head', 
      email: 'kunal.shenoy232@nmims.edu.in', 
      image: kunalImage,
      linkedin: 'https://www.linkedin.com/in/kunal-shenoy/',
      github: 'https://github.com/kunalshenoy1604',
      isHead: true
    },
    { 
      id: 3, 
      name: 'Aarya Khabale', 
      role: 'Co-Head', 
      email: 'aaryakhabale@gmail.com', 
      image: aaryaImage,
      linkedin: 'https://www.linkedin.com/in/aarya-khabale/',
      github: 'https://github.com/aaryakhabale'
    },
  ];

  return (
    <TeamWrapper>
      <Title>Meet Our Exceptional Team</Title>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={member.id} 
            index={index}
            isHead={member.isHead}
          >
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <SocialLinks>
                <SocialIcon href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </SocialIcon>
                <SocialIcon href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialIcon>
                <SocialIcon href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialIcon>
              </SocialLinks>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </TeamWrapper>
  );
};

export default Team;