// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../redux/quizThunk';
import { resetQuiz } from '../redux/quizSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartQuiz = () => {
    // Reset quiz state
    dispatch(resetQuiz());
    // Fetch questions
    dispatch(fetchQuestions());
    // Navigate to quizzes
    navigate('/quizzes');
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">JavaScript Quiz Application</h1>
        <p className="home-subtitle">
          Welcome to the JavaScript Quiz! Test your knowledge by answering 10 questions.
        </p>
        <button className="start-btn" onClick={handleStartQuiz}>
          Start Quiz Now
        </button>
      </div>
    </div>
  );
};

export default Home;
