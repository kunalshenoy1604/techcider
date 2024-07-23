import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactWrapper = styled(motion.div)`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #111111;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(244, 114, 22, 0.1);
`;

const Title = styled(motion.h1)`
  color: #F47216;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #F47216;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.8rem;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #F47216;
  }
`;

const Button = styled(motion.button)`
  background-color: #F47216;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d85f11;
  }

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
`;

const ButtonIcon = styled(FaPaperPlane)`
  margin-left: 0.5rem;
`;

const Message = styled(motion.p)`
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.success ? '#4BB543' : '#ff6b6b'};
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://www.formbackend.com/f/3740e8feededc452", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 422) {
        throw new Error("Validation error");
      } else if (!response.ok) {
        throw new Error("Something went wrong");
      }

      // eslint-disable-next-line
      const data = await response.json();
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact Us
      </Title>
      {successMessage ? (
        <Message success>{successMessage}</Message>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <ButtonIcon />
          </Button>
        </Form>
      )}
      {errorMessage && <Message>{errorMessage}</Message>}
    </ContactWrapper>
  );
};

export default ContactUs;