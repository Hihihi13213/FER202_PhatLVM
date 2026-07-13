// src/pages/Result.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetQuiz } from '../redux/quizSlice';

const Result = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { score, questions, selectedAnswers, isSubmitted } = useSelector((state) => state.quiz);

  // Nếu người dùng truy cập trực tiếp trang này mà chưa làm bài, quay về Home
  if (!isSubmitted) {
    return (
      <div className="home-container">
        <div className="card text-center">
          <h2>No quiz submission found!</h2>
          <p>Please start the quiz first.</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const percent = Math.round((score / totalQuestions) * 100);

  // Tạo thông điệp động tùy thuộc vào kết quả
  let feedbackMessage = "";
  let feedbackIcon = "";
  if (percent === 100) {
    feedbackMessage = "Perfect score! You are a master.";
    feedbackIcon = "🏆";
  } else if (percent >= 80) {
    feedbackMessage = "Excellent work! You really know your stuff.";
    feedbackIcon = "🌟";
  } else if (percent >= 50) {
    feedbackMessage = "Good job! You passed, but there's room for improvement.";
    feedbackIcon = "👍";
  } else {
    feedbackMessage = "Keep practicing! You can do better next time.";
    feedbackIcon = "📚";
  }

  const handleRestart = () => {
    dispatch(resetQuiz());
    navigate('/');
  };

  return (
    <div className="result-container">
      <div className="card result-card">
        <div className="result-icon">{feedbackIcon}</div>
        <h1 className="result-title">Quiz Completed!</h1>
        <p className="result-feedback">{feedbackMessage}</p>

        <div className="score-ring">
          <div className="score-number">{score}</div>
          <div className="score-total">out of {totalQuestions}</div>
        </div>

        <div className="stats-box">
          <div className="stat-item">
            <span className="stat-label">Percentage:</span>
            <span className="stat-value">{percent}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Questions Answered:</span>
            <span className="stat-value">{answeredCount} / {totalQuestions}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Correct Answers:</span>
            <span className="stat-value text-success">{score}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Incorrect/Skipped:</span>
            <span className="stat-value text-danger">{totalQuestions - score}</span>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn btn-success btn-lg" onClick={() => navigate('/review')}>
            Review Answers
          </button>
          <button className="btn btn-secondary btn-lg" onClick={handleRestart}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
