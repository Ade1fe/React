import React, { useState } from 'react';

const sentences = [
  {
    sentence: 'The _uick _rown _ox',
    answer: 'quick brown fox',
  },
  // Add more sentences here
];

function FillInTheBlanksGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);

  const currentSentence = sentences[currentIndex].sentence;
  const correctAnswer = sentences[currentIndex].answer;

  const handleGuessSubmit = (event) => {
    event.preventDefault();

    if (userGuess.toLowerCase() === correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next sentence
    setCurrentIndex(currentIndex + 1);
    setUserGuess('');
  };

  return (
    <div>
      <h1>Fill in the Blanks Game</h1>
      <p>Score: {score}</p>
      <p>Fill in the missing letters:</p>
      <p>{currentSentence}</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button type="submit">Submit Guess</button>
      </form>
    </div>
  );
}

export default FillInTheBlanksGame;
