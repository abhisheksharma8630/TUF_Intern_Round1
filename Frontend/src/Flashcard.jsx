import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer, flippable }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if (flippable) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div style={{cursor:"pointer"}} className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flashcard">
        <div className="front">
          < div className="flashcard-question">
          <h3>Question</h3>
            <p>{question}</p>
          </div>
        </div>
        <div className="back">
          <div className="flashcard-answer">
          <h3>Answer</h3>
          <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
