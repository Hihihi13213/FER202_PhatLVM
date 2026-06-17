import React, { Component } from 'react';

class Question extends Component {
    render() {
        const { questionData, onAnswerSubmit } = this.props;

        return (
            <div className="question-container">
                <h2>Question {questionData.id}</h2>
                <p className="question-text">{questionData.question}</p>
                <div className="options-list">
                    {questionData.options.map((option, index) => (
                        <button 
                            key={index} 
                            className="option-button"
                            onClick={() => onAnswerSubmit(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Question;