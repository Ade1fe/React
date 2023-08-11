import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import Questions from './../components/Ouestions';
import Modal from '../components/Modal';


const GamePage = () => {
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
  };

  const handleCorrectAnswer = () => {
    setModalMessage("Congratulations! You won!");
    setIsAnswerCorrect(true);
    setIsModalOpen(true);
  };

  const handleWrongAnswer = () => {
    setModalMessage("Oops! Try again.");
    setIsAnswerCorrect(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setShowWinMessage(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setClickedAnswerIndex(null);
  };

  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default GamePage;
