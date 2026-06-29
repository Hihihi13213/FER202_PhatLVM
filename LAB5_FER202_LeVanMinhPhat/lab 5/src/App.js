import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';

import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Container className="mt-3">
        <nav className="navbar-simple">
          <Link to="/" className="nav-link-simple">Home</Link>
          <Link to="/about" className="nav-link-simple">About</Link>
          <Link to="/news" className="nav-link-simple">News</Link>
          <Link to="/quizzes" className="nav-link-simple">Quiz</Link>
          <Link to="/contact" className="nav-link-simple">Contact</Link>
        </nav>

        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quizzes" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;
