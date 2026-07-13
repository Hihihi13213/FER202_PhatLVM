// src/pages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../redux/quizThunk';
import {
  setCurrentQuestion,
  selectAnswer,
  submitQuiz,
  resetQuiz
} from '../redux/quizSlice';

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    questions,
    currentQuestion,
    selectedAnswers,
    isSubmitted,
    loading
  } = useSelector((state) => state.quiz);

  // Active tab: 'quiz' or 'review'
  const [activeTab, setActiveTab] = useState('quiz');

  // Fetch questions if page is loaded directly and questions list is empty
  useEffect(() => {
    if (questions.length === 0 && !loading) {
      dispatch(fetchQuestions());
    }
  }, [dispatch, questions.length, loading]);

  if (loading || questions.length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading Questions...</h2>
      </div>
    );
  }

  const currentQObj = questions[currentQuestion];

  const handleSelectAnswer = (answer) => {
    if (isSubmitted) return; // Cannot change answer after submission
    dispatch(selectAnswer({ questionId: currentQObj.id, answer }));
  };

  // Navigation handlers
  const handleFirst = () => dispatch(setCurrentQuestion(0));
  const handlePrev = () => {
    if (currentQuestion > 0) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
    }
  };
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
  };
  const handleLast = () => dispatch(setCurrentQuestion(questions.length - 1));

  // Submit Handler
  const handleSubmit = () => {
    if (isSubmitted) {
      alert("You have already submitted this quiz.");
      return;
    }

    const answeredCount = Object.keys(selectedAnswers).length;
    const unansweredCount = questions.length - answeredCount;
    
    let confirmMsg = "Are you sure you want to submit your quiz?";
    if (unansweredCount > 0) {
      confirmMsg = `You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`;
    }

    if (window.confirm(confirmMsg)) {
      dispatch(submitQuiz());
      setActiveTab('review'); // Automatically jump to detailed review after submit
    }
  };

  // Click handler for progress grid boxes
  const handleJumpToQuestion = (index) => {
    dispatch(setCurrentQuestion(index));
    setActiveTab('quiz'); // Go back to single question view
  };

  return (
    <div className="quiz-container-custom">
      {/* Banner Header */}
      <div className="quiz-dark-banner">
        <h1>{activeTab === 'quiz' ? 'JavaScript Quiz' : 'Quiz Review'}</h1>
      </div>

      {/* Main Content Area */}
      <div className="quiz-content-area">
        {activeTab === 'quiz' ? (
          /* SINGLE QUESTION VIEW (Image 1) */
          <div className="quiz-question-view">
            <h2 className="question-title-text">
              Q.{currentQuestion + 1} {currentQObj.question}
            </h2>

            <div className="options-grid-2x2">
              {currentQObj.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQObj.id] === option;
                return (
                  <div
                    key={index}
                    className={`option-box-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectAnswer(option)}
                  >
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name={`question-${currentQObj.id}`}
                      checked={isSelected}
                      readOnly
                      disabled={isSubmitted}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </div>
                );
              })}
            </div>

            {/* Navigation row inside lines */}
            <div className="navigation-divider-wrapper">
              <hr className="nav-line" />
              <div className="nav-buttons-center">
                <button onClick={handleFirst} disabled={currentQuestion === 0}>
                  First
                </button>
                <button onClick={handlePrev} disabled={currentQuestion === 0}>
                  Prev
                </button>
                <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
                  Next
                </button>
                <button onClick={handleLast} disabled={currentQuestion === questions.length - 1}>
                  Last
                </button>
              </div>
              <hr className="nav-line" />
            </div>
          </div>
        ) : (
          /* REVIEW VIEW (Image 2 or Image 3 depending on submission status) */
          <div className="quiz-review-view">
            {!isSubmitted ? (
              /* PROGRESS GRID BEFORE SUBMIT (Image 3) */
              <div className="progress-grid-10">
                {questions.map((q, index) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  return (
                    <div
                      key={q.id}
                      className={`progress-box-card ${isAnswered ? 'answered' : 'unanswered'}`}
                      onClick={() => handleJumpToQuestion(index)}
                    >
                      <span className="q-no-link">Question No {index + 1}</span>
                      <span className="status-link font-bold">
                        {isAnswered ? 'Answered' : 'Not Answered'}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* DETAILED VERTICAL REVIEW AFTER SUBMIT (Image 2) */
              <div className="detailed-review-list">
                {questions.map((q, index) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;
                  
                  return (
                    <div
                      key={q.id}
                      className={`detailed-question-card ${isCorrect ? 'correct' : 'incorrect'}`}
                    >
                      <h3 className="detailed-q-title">
                        Q{index + 1}. {q.question}
                      </h3>
                      
                      <div className="detailed-options-stack">
                        {q.options.map((option, optIdx) => {
                          const isUserSelected = userAnswer === option;
                          return (
                            <div key={optIdx} className="detailed-option-item">
                              <input
                                type="radio"
                                name={`review-q-${q.id}`}
                                checked={isUserSelected}
                                readOnly
                                disabled
                              />
                              <span className={`option-label-text ${isUserSelected ? 'selected-text' : ''}`}>
                                {option}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="correct-answer-banner">
                        Right answer is: <strong>{q.correctAnswer}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Tabs / Action buttons */}
      <div className="quiz-bottom-actions">
        <button
          className={`tab-action-btn ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          Quiz
        </button>
        <button
          className={`tab-action-btn ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => setActiveTab('review')}
        >
          Quiz Review
        </button>
        <button
          className="tab-action-btn submit"
          onClick={handleSubmit}
          disabled={isSubmitted}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
