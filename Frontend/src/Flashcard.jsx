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
          <div className="flashcard-question">{question}</div>
        </div>
        <div className="back">
          <div className="flashcard-answer">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
