import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';
import './QuizApp.css'; // Import file CSS

class QuizApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    question: "What is the capital of France?",
                    options: ["Paris", "London", "Berlin", "Madrid"],
                    answer: "Paris"
                },
                {
                    id: 2,
                    question: "What is the largest planet in our solar system?",
                    options: ["Jupiter", "Saturn", "Mars", "Earth"],
                    answer: "Jupiter"
                }
            ],
            currentQuestion: 0,
            score: 0,
            quizEnd: false
        };
    }

    // Hàm xử lý khi người dùng chọn đáp án
    handleAnswerSubmit = (selectedOption) => {
        const { questions, currentQuestion, score } = this.state;
        
        // Kiểm tra đúng hay sai
        let newScore = score;
        if (selectedOption === questions[currentQuestion].answer) {
            newScore = score + 1;
        }

        // Chuyển sang câu tiếp theo hoặc kết thúc
        if (currentQuestion + 1 < questions.length) {
            this.setState({
                score: newScore,
                currentQuestion: currentQuestion + 1
            });
        } else {
            this.setState({
                score: newScore,
                quizEnd: true
            });
        }
    };

    // Hàm chơi lại
    handleRestart = () => {
        this.setState({
            currentQuestion: 0,
            score: 0,
            quizEnd: false
        });
    };

    render() {
        const { questions, currentQuestion, score, quizEnd } = this.state;

        return (
            <div className="app-container">
                {quizEnd ? (
                    <Score score={score} onRestart={this.handleRestart} />
                ) : (
                    <Question 
                        questionData={questions[currentQuestion]} 
                        onAnswerSubmit={this.handleAnswerSubmit} 
                    />
                )}
            </div>
        );
    }
}

export default QuizApp;