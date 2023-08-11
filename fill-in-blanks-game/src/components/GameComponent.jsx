import React, { useState } from 'react';
import Questions from './../components/Ouestions';
import Modal from '../components/Modal';


import correctSound from '../sounds/Correct Sound Effect _ Bgm & Sound Effect.mp3';
import wrongSound from '../sounds/Wrong answer sound effect.mp3';
import selectSound from '../sounds/Item equip sound effect__ Gaming sound effect__(HD).mp3';
import modalSound from '../sounds/Box Opening Sound Effect.mp3';



const GameComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [clickedAnswerIndex, setClickedAnswerIndex] = useState(null);

  const currentQuestion = {
    ...Questions[currentQuestionIndex],
    question: Questions[currentQuestionIndex].question.replace('{answer}', selectedAnswer),
  };

  const handleAnswerSelect = (answer, index) => {
    setSelectedAnswer(answer);
    setClickedAnswerIndex(index);
    setIsAnswerCorrect(false); // Reset the answer correctness
    new Audio(selectSound).play();
  };

  const handleCorrectAnswer = () => {
    setModalMessage("Congratulations! You won!");
    setIsAnswerCorrect(true);
    setIsModalOpen(true);
    new Audio(correctSound).play();
  };

  const handleWrongAnswer = () => {
    setModalMessage("Oops! You lost!.");
    setIsAnswerCorrect(false);
    setIsModalOpen(true);
    new Audio(wrongSound).play();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    handleNextQuestion();
    new Audio(modalSound).play();
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setShowWinMessage(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setClickedAnswerIndex(null);
  };

  return (
   
      <div className="">
        <h1>Quiz App</h1>
        <p >{currentQuestion.question}</p>
        <ul className='flex'>
        {Object.values(currentQuestion).slice(1).map((answer, index) => (
          <li key={index} >
            <button
              className={`button ${
                clickedAnswerIndex === index ? 'clicked' : ''
              } ${
                clickedAnswerIndex === index
                  ? isAnswerCorrect
                    ? 'button-correct'
                    : 'button-wrong'
                  : ''
              }`}
              onClick={() => handleAnswerSelect(answer, index)}
              disabled={showWinMessage}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
        {showWinMessage && (
          <div>
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        )}
        {!showWinMessage && (
          <button
            onClick={() => {
              if (selectedAnswer === currentQuestion.correctAnswer) {
                handleCorrectAnswer();
              } else {
                handleWrongAnswer();
              }
            }}
            disabled={!selectedAnswer}
          >
            Submit
          </button>
        )}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} message={modalMessage} />
      </div>
   
  );
};

export default GameComponent;
