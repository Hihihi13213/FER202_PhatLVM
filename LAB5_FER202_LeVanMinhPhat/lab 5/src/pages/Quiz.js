import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import QuestionItem from '../components/QuestionItem';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: 'What is the main ingredient in pizza?',
      options: ['A) Cheese', 'B) Bread', 'C) Tomato', 'D) All of the above'],
      correct: 3
    },
    {
      id: 2,
      question: 'Which country is famous for pasta?',
      options: ['A) France', 'B) Italy', 'C) Spain', 'D) Germany'],
      correct: 1
    },
    {
      id: 3,
      question: 'What is sushi made from?',
      options: ['A) Raw vegetables', 'B) Cooked meat', 'C) Rice and fish', 'D) Noodles'],
      correct: 2
    },
    {
      id: 4,
      question: 'Which spice is used in Indian curries?',
      options: ['A) Pepper', 'B) Turmeric', 'C) Cinnamon', 'D) Nutmeg'],
      correct: 1
    },
    {
      id: 5,
      question: 'What is the national dish of India?',
      options: ['A) Biryani', 'B) Butter chicken', 'C) No single dish', 'D) Samosa'],
      correct: 2
    }
  ];

  const handleAnswerChange = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <Container className="py-5">
      <h1 className="page-title text-center mb-4">Quiz Time!</h1>

      {submitted ? (
        <div className="quiz-container">
          <Alert variant="info" className="text-center">
            <h4>Quiz Completed!</h4>
            <p className="mb-0">
              You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
            </p>
            <p className="mt-2 mb-0">
              Percentage: <strong>{Math.round((score / questions.length) * 100)}%</strong>
            </p>
          </Alert>

          <div className="mb-4">
            {questions.map((question, index) => {
              const isCorrect = answers[question.id] === question.correct;
              return (
                <div key={question.id} className="question-item">
                  <div className="question-number">
                    Question {index + 1}: {question.question}
                  </div>
                  <div className="mb-2">
                    <strong>Your answer:</strong> {question.options[answers[question.id]] || 'Not answered'}
                  </div>
                  <div className="mb-2">
                    <strong>Correct answer:</strong> {question.options[question.correct]}
                  </div>
                  <div>
                    <span className={isCorrect ? 'badge bg-success' : 'badge bg-danger'}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleReset}
              className="btn-submit"
            >
              Try Again
            </Button>
          </div>
        </div>
      ) : (
        <div className="quiz-container">
          {questions.map((question, index) => (
            <QuestionItem
              key={question.id}
              question={question}
              questionNumber={index + 1}
              selectedAnswer={answers[question.id]}
              onAnswerChange={handleAnswerChange}
            />
          ))}

          <div className="text-center mt-4">
            <Button 
              variant="success" 
              size="lg"
              onClick={handleSubmit}
              className="btn-submit"
            >
              Submit Quiz
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Quiz;
