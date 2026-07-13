// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/news" className="navbar-item">News</Link>
          <Link to="/quizzes" className="navbar-item">Quiz</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
