import React, { useState, useEffect } from 'react'; 
import Questions from './../components/Ouestions';
import Modal from '../components/Modal';
import { FaMoneyBill } from 'react-icons/fa';


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
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);



    
  useEffect(() => {
    setCurrentQuestionIndex(Math.floor(Math.random() * Questions.length));
  }, []);

  const [score, setScore] = useState(0);

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
    setScore(score + 30);
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
  setCurrentQuestionNumber(currentQuestionNumber + 1);
    setCurrentQuestionIndex(Math.floor(Math.random() * Questions.length));
    setClickedAnswerIndex(null);
  };



  return (
   
      <div className=" text-center mt-5 ">
<div id='score' className='px-4 py-2 flex justify-between items-center gap-2 text-sm  mb-3 text-right bg-[#fff]'
  style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
  <div className="text-green-500 items-center gap-1 flex"><FaMoneyBill size={25} />  <p className='text-black text-lg'>{score}</p></div>

  <p className=''>
  level {currentQuestionNumber}
</p>
</div>



        <p className='text-lg sm:text-xl px-4  mt-6'>{currentQuestion.question}</p>
        <ul className='flex p-4 flex-wrap justify-center'>
        {Object.values(currentQuestion).slice(1).map((answer, index) => (
          <li key={index} >
            <button
              className={`button  ${
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
          <button className='px-4 py-1 mt-[10px] mb-[30px] w-[80%] mx-auto uppercase font-bold bg-blue-300 rounded-md hover:bg-blue-600'   onClick={() => {
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
