import React, { useState, useEffect } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import Modal from './Modal';

const initialBoard = Array(9).fill('');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, Draw: 0 });

  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (currentPlayer === 'O' && gameMode === 'computer' && !winner && gameStarted) {
      setTimeout(() => makeComputerMove(), 500);
    }
  }, [currentPlayer, winner, gameMode, gameStarted]);

  const handleCellClick = (index) => {
    if (board[index] || winner || !gameStarted) return;
  
    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);
    
  
    if (checkWin(updatedBoard, currentPlayer)) {
      setWinner(currentPlayer);
      updateScore(currentPlayer);
    } else if (!updatedBoard.includes('')) {
      setWinner('Draw');
      updateScore('Draw'); // Update the draw count
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };
  

  const makeComputerMove = () => {
    if (winner) return;

    let availableCells = board.reduce((acc, cell, index) => {
      if (cell === '') {
        acc.push(index);
      }
      return acc;
    }, []);

    if (availableCells.length === 0) {
      setWinner('Draw');
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const selectedCell = availableCells[randomIndex];

    const updatedBoard = [...board];
    updatedBoard[selectedCell] = 'O';
    setBoard(updatedBoard);

    if (checkWin(updatedBoard, 'O')) {
      setWinner('O');
      updateScore('O');
      setIsModalOpen(true);
    } else if (!updatedBoard.includes('')) {
      setWinner('Draw');
      setIsModalOpen(true);
    } else {
      setIsModalOpen(true);
      setCurrentPlayer('X');
    }
  };

  const checkWin = (board, player) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }
    return false;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    
  };

  const updateScore = (player) => {
    setScore((prevScore) => ({
      ...prevScore,
      [player]: prevScore[player] + 1,
    }));
  };

  // const renderCell = (index) => {
  //   return (
  //     <div
  //       key={index}
  //       className={`cell bg-gray-300 border border-gray-400 flex items-center justify-center text-3xl font-bold cursor-pointer ${
  //         board[index] === 'X' ? 'text-blue-500' : board[index] === 'O' ? 'text-red-500' : ''
  //       }`}
  //       onClick={() => handleCellClick(index)}
  //     >
  //       {board[index]}
  //     </div>
  //   );
  // };

  const handleModeChange = (mode) => {
    setGameMode(mode);
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
    setGameStarted(true);
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
    setGameStarted(true);
  };

  const refreshGame = () => {
    window.location.reload();
  };



  return (
    <div className="container mx-auto text-center mt-10">
     
      {!gameStarted && (
        <div className="mb-4 h-screen gap-4 px-4 flex justify-center sm:justify-evenly items-start">
          <button
            className={`bg-[#234c35] hover:bg-[#78c499] text-white font-bold py-2 px-4 rounded`}
            onClick={() => handleModeChange('computer')}
          >
            Play with Computer
          </button>
          <button
            className={`bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 ml-4 rounded`}
            onClick={() => handleModeChange('two-players')}
          >
            Play with A Friend
          </button>
        </div>
      )}

      {gameStarted && (
        <div>
          <div id="score" className="px-4 py-2 w-[97%] mb-5 mx-auto flex justify-between items-center gap-2 text-sm  text-right bg-[#fff]" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
          <div className="text-green-500 flex items-center gap-1">
  <div className="text-black text-lg grid">
   <p> <span className="font-bold text-2xl">X</span> {score.X} </p>
  <p>  <span className="font-bold text-2xl">O</span> {score.O}</p>
  </div>
</div>

<p className="text-xl font-semibold">
  Draw: <span className="text-gray-700">{score.Draw}</span>
</p>

          </div>
          <div className="bg-[#3a5a40] p-2 w-[90%] mx-auto md:w-[80%] ">
            <div className="grid w-full gap-1 grid-cols-3 justify-center">
  {Array(9)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        className={`cell h-[100px]  sm:h-[160px]  bg-[#588157] border border-[#344e41] flex items-center justify-center text-3xl font-bold cursor-pointer ${
          board[index] === 'X' ? 'text-[#d8f3dc]' : board[index] === 'O' ? 'text-[#ccd5ae]' : ''
        }`}
        onClick={() => handleCellClick(index)}
        style={{ flexGrow: 1 }} // Add this style to make cells fill the available space
      >
        {board[index]}
      </div>
    ))}
</div>
          </div>


          <div className="mt-4">
            {winner ? (
              <div className=''>
                {winner === 'Draw' ? (
                  <p className="text-xl font-semibold">It's a draw!</p>
                ) : (
                  // <p className="text-xl font-semibold">{`Player ${winner} wins!`}</p>
                  <Modal isOpen={isModalOpen} onClose={handleCloseModal} message={`Player ${winner} wins!`} />
                )}
                <button
                  className="bg-[#2d6a4f]  hover:bg-[#59947a] text-white font-bold py-2 px-4 mt-4 rounded"
                  onClick={handleRestart}
                >
                  Play Again
                </button>

                <button  className="ml-4 bg-[#c44233] hover:bg-[#59947a] text-white font-bold py-2 px-4 mt-4 rounded"
                 onClick={refreshGame}>
                  Restart Game
                </button>
              </div>

              
            ) : (
              <p className="text-xl">{`Current Player: ${currentPlayer}`}</p>
              
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
