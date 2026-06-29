import React from 'react';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container className="py-5">
      <h1 className="page-title mb-4">About Us</h1>
      
      <div className="about-content">
        <h3 className="mb-3">Welcome to Our Quiz Application!</h3>
        
        <p>
          This is an interactive quiz application built with React and React Router. 
          Our mission is to provide engaging and educational content through interactive quizzes 
          about food, cooking, and culinary traditions.
        </p>

        <h4 className="mt-4 mb-3">Our Features:</h4>
        <ul>
          <li>🏠 Interactive home page with carousel slides</li>
          <li>📰 Comprehensive news section with latest updates</li>
          <li>❓ Engaging quiz questions to test your knowledge</li>
          <li>📧 Easy contact form to reach us</li>
          <li>💻 Modern and responsive design using Bootstrap</li>
        </ul>

        <h4 className="mt-4 mb-3">Technology Stack:</h4>
        <ul>
          <li><strong>React:</strong> Frontend library for building user interfaces</li>
          <li><strong>React Router:</strong> Client-side routing for single page application</li>
          <li><strong>React Bootstrap:</strong> Bootstrap components as React components</li>
          <li><strong>Bootstrap:</strong> CSS framework for responsive design</li>
        </ul>

        <h4 className="mt-4 mb-3">Our Team:</h4>
        <p>
          We are a dedicated team of developers committed to creating engaging educational 
          content and interactive learning experiences. Our focus is on making learning fun 
          and accessible to everyone.
        </p>

        <h4 className="mt-4 mb-3">Contact Information:</h4>
        <p>
          Have questions or suggestions? Feel free to reach out to us through the 
          <strong> Contact page</strong> or email us at <strong>info@quizapp.com</strong>
        </p>
      </div>
    </Container>
  );
}

export default About;
