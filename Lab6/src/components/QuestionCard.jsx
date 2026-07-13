// src/components/QuestionCard.jsx
import React from 'react';

/**
 * QuestionCard hiển thị nội dung câu hỏi và các đáp án lựa chọn.
 * Hỗ trợ hai chế độ: Chế độ làm bài (bình thường) và Chế độ xem lại bài (reviewMode).
 * 
 * @param {Object} question Đối tượng câu hỏi { id, question, options, correctAnswer }
 * @param {string} selectedAnswer Đáp án mà người dùng đã chọn cho câu hỏi này
 * @param {function} onSelectAnswer Callback khi người dùng nhấp chọn đáp án
 * @param {boolean} reviewMode Có đang ở chế độ xem lại hay không
 */
const QuestionCard = ({ question, selectedAnswer, onSelectAnswer, reviewMode = false }) => {
  if (!question) return null;

  const { options, correctAnswer } = question;

  return (
    <div className="question-card">
      <h3 className="question-text">
        <span className="question-number">Question {question.id}:</span> {question.question}
      </h3>
      
      <div className="options-list">
        {options.map((option, index) => {
          // Xác định classes styling cho từng đáp án tùy thuộc vào chế độ
          let optionClass = "option-item";
          
          if (reviewMode) {
            // Chế độ Review
            const isUserSelection = selectedAnswer === option;
            const isCorrect = option === correctAnswer;

            if (isCorrect) {
              // Đáp án đúng luôn có màu xanh lá
              optionClass += " option-correct";
            } else if (isUserSelection && !isCorrect) {
              // Đáp án người dùng chọn mà sai thì có màu đỏ
              optionClass += " option-incorrect";
            } else {
              optionClass += " option-disabled";
            }
          } else {
            // Chế độ bình thường (làm bài)
            const isSelected = selectedAnswer === option;
            if (isSelected) {
              optionClass += " option-selected";
            }
          }

          return (
            <button
              key={index}
              type="button"
              className={optionClass}
              onClick={() => !reviewMode && onSelectAnswer(option)}
              disabled={reviewMode}
            >
              <span className="option-prefix">{String.fromCharCode(65 + index)}.</span>
              <span className="option-value">{option}</span>
              
              {/* Hiển thị các icon/badge phụ trợ ở chế độ Review */}
              {reviewMode && (
                <span className="option-status-badge">
                  {option === correctAnswer && " (Correct)"}
                  {selectedAnswer === option && option !== correctAnswer && " (Your Choice - Wrong)"}
                  {selectedAnswer === option && option === correctAnswer && " (Your Choice - Correct)"}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {reviewMode && (
        <div className="review-summary-box">
          <p>
            <strong>Your Answer:</strong>{" "}
            {selectedAnswer ? (
              <span className={selectedAnswer === correctAnswer ? "text-success" : "text-danger"}>
                {selectedAnswer}
              </span>
            ) : (
              <span className="text-warning">Not Answered</span>
            )}
          </p>
          {selectedAnswer !== correctAnswer && (
            <p>
              <strong>Correct Answer:</strong>{" "}
              <span className="text-success">{correctAnswer}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
