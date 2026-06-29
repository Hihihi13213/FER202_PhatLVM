import React from 'react';
import Form from 'react-bootstrap/Form';

function QuestionItem({ question, questionNumber, selectedAnswer, onAnswerChange }) {
  return (
    <div className="question-item">
      <div className="question-number">
        Question {questionNumber}: {question.question}
      </div>

      <Form>
        {question.options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            id={`question${question.id}_option${index}`}
            label={option}
            name={`question${question.id}`}
            value={index}
            checked={selectedAnswer === index}
            onChange={() => onAnswerChange(question.id, index)}
            className="option mb-2"
          />
        ))}
      </Form>
    </div>
  );
}

export default QuestionItem;
