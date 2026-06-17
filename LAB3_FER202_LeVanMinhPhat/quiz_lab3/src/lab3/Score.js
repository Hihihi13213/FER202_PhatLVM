import React, { Component } from 'react';

class Score extends Component {
    render() {
        const { score, onRestart } = this.props;
        return (
            <div className="score-container">
                <h1>Quiz Ended</h1>
                <h2 className="final-score">Your Score: {score}</h2>
                <button className="restart-button" onClick={onRestart}>
                    Try Again
                </button>
            </div>
        );
    }
}

export default Score;