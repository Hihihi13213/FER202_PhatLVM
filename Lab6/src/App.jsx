// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Review from './pages/Review';

// Simple placeholder components for other routes
const About = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>About Us</h2>
    <p>This is the About page for the JavaScript Quiz application.</p>
  </div>
);

const News = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>News</h2>
    <p>Read the latest updates about JavaScript and React.</p>
  </div>
);

const Contact = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Contact Us</h2>
    <p>Get in touch with the Quiz Team!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar hiển thị cố định ở đầu trang */}
        <Navbar />
        
        {/* Khu vực nội dung chính của ứng dụng */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quizzes" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/review" element={<Review />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
