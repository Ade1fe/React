import React, { useState, useEffect } from 'react';

const WordSearchGame = () => {
    const [grid, setGrid] = useState<string[][]>(newGrid);

  // Function to generate a random grid of letters
  const generateGrid = () => {
    // Sample grid - Replace this with your own logic to generate a random grid
    const newGrid : string[][] = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'J'],
      ['K', 'L', 'M', 'N', 'O'],
      ['P', 'Q', 'R', 'S', 'T'],
      ['U', 'V', 'W', 'X', 'Y'],
    ];
    setGrid(newGrid);
  };

  useEffect(() => {
    generateGrid(); // Generate the grid when the component mounts
  }, []);

  return (
    <div>
      <h1>Word Search Game</h1>
      <div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((letter, columnIndex) => (
              <span key={columnIndex} style={{ margin: '5px', fontSize: '20px' }}>
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordSearchGame;
