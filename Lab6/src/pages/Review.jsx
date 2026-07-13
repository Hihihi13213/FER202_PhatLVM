// src/pages/Review.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import { resetQuiz } from '../redux/quizSlice';

const Review = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { questions, selectedAnswers, score, isSubmitted } = useSelector((state) => state.quiz);

  // Khóa điều hướng nếu chưa submit bài làm
  if (!isSubmitted) {
    return (
      <div className="home-container">
        <div className="card text-center">
          <h2>No quiz details to review!</h2>
          <p>Please complete the quiz first before reviewing.</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const handleRestart = () => {
    dispatch(resetQuiz());
    navigate('/');
  };

  return (
    <div className="review-layout-container">
      <div className="review-header-card card">
        <div className="review-header-flex">
          <div>
            <h1 className="review-title">Detailed Quiz Review</h1>
            <p className="review-subtitle">
              Review your answers below. Correct choices are highlighted in green, while incorrect choices are in red.
            </p>
          </div>
          <div className="review-score-badge">
            <span className="badge-label">Score</span>
            <span className="badge-value">{score} / {questions.length}</span>
          </div>
        </div>
        <div className="review-actions-header">
          <button className="btn btn-secondary" onClick={() => navigate('/result')}>
            ← Back to Result
          </button>
          <button className="btn btn-primary" onClick={handleRestart}>
            Try Again / Restart Quiz
          </button>
        </div>
      </div>

      <div className="review-questions-list">
        {questions.map((q, index) => {
          const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
          
          return (
            <div key={q.id} className={`review-question-wrapper ${isCorrect ? 'border-success' : 'border-danger'}`}>
              <div className="review-question-status-header">
                <span className="question-index-tag">Question {index + 1}</span>
                <span className={`status-tag ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                  {isCorrect ? "✓ Correct" : "✗ Incorrect / Skipped"}
                </span>
              </div>
              <QuestionCard
                question={q}
                selectedAnswer={selectedAnswers[q.id]}
                reviewMode={true}
              />
            </div>
          );
        })}
      </div>

      <div className="review-footer">
        <button className="btn btn-primary btn-lg" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Review;
