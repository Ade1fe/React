// import React, { useState } from 'react';
// import { Flex, Box, Heading } from '@chakra-ui/react'; // Chakra UI components

// function WordFormationGame() {
//   const initialLetters: string[][] = [
//     ['A', 'B', 'C', 'D', 'E'],
//     ['F', 'G', 'H', 'I', 'J'],
//     ['K', 'L', 'M', 'N', 'O'],
//     ['P', 'Q', 'R', 'S', 'T'],
//     ['U', 'V', 'W', 'X', 'Y'],
//   ];

//   const [board, setBoard] = useState<string[][]>(initialLetters);
//   const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
//   const [isDrawing, setIsDrawing] = useState(false);

//   const handleMouseDown = () => {
//     setSelectedPositions([]);
//     setIsDrawing(true);
//   };

//   const handleMouseUp = () => {
//     setIsDrawing(false);
//     const selectedWord = selectedPositions.join('');
//     console.log('Selected Word:', selectedWord);
//   };

//   const handleMouseEnter = (rowIndex: number, columnIndex: number) => {
//     if (isDrawing) {
//       const letter = board[rowIndex][columnIndex];
//       setSelectedPositions((prevPositions) => [...prevPositions, letter]);
//     }
//   };

//   return (
//     <Flex direction="column" align="center" mt="20px">
//       <Heading as="h2" size="md" mb="10px">
//         Word Formation Game
//       </Heading>
//       <Flex
//         direction="column"
//         align="center"
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//       >
//         {board.map((row, rowIndex) => (
//           <Flex key={rowIndex}>
//             {row.map((letter, columnIndex) => (
//               <Box
//                 key={columnIndex}
//                 w="40px"
//                 h="40px"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 bg={
//                   selectedPositions.some(
//                     (pos) => pos === letter
//                   )
//                     ? 'blue.200'
//                     : 'gray.200'
//                 }
//                 fontSize="24px"
//                 color={
//                   selectedPositions.some(
//                     (pos) => pos === letter
//                   )
//                     ? 'blue.700'
//                     : 'gray.700'
//                 }
//                 onMouseEnter={() => handleMouseEnter(rowIndex, columnIndex)}
//                 _hover={{ cursor: 'pointer' }}
//               >
//                 {letter}
//               </Box>
//             ))}
//           </Flex>
//         ))}
//       </Flex>
//       <Flex mt="10px" justify="center">
//         <Heading as="h3" size="md">
//           Selected Word: {selectedPositions.join('')}
//         </Heading>
//       </Flex>
//     </Flex>
//   );
// }

// export default WordFormationGame;










import React, { useState } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react'; // Chakra UI components

function WordFormationGame() {
  const initialLetters: string[][] = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y'],
  ];

  const [board, setBoard] = useState<string[][]>(initialLetters);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<string>('');

  const handleMouseDown = (): void => {
    setSelectedPositions([]);
    setIsDrawing(true);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    const word = selectedPositions.join('');
    setSelectedWord(word);
  };

  const handleMouseEnter = (rowIndex: number, columnIndex: number): void => {
    if (isDrawing) {
      const letter: string = board[rowIndex][columnIndex];
      setSelectedPositions((prevPositions: string[]) => [...prevPositions, letter]);
    }
  };

  return (
    <Flex direction="column" align="center" mt="20px">
      <Heading as="h2" size="md" mb="10px">
        Word Formation Game
      </Heading>
      <Flex
      direction="column"
      align="center"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {board.map((row, rowIndex) => (
        <Flex key={rowIndex}>
          {row.map((letter, columnIndex) => (
            <Box
              key={columnIndex}
              w="40px"
              h="40px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg={
                selectedPositions.some(
                  (pos) => pos === letter
                )
                  ? 'blue.200'
                  : 'gray.200'
              }
              fontSize="24px"
              color={
                selectedPositions.some(
                  (pos) => pos === letter
                )
                  ? 'blue.700'
                  : 'gray.700'
              }
              onMouseEnter={() => handleMouseEnter(rowIndex, columnIndex)}
              _hover={{ cursor: 'pointer' }}
            >
              {letter}
            </Box>
          ))}
        </Flex>
        ))}
      </Flex>
      <Flex mt="10px" justify="center">
        <Heading as="h3" size="md">
          Selected Word: {selectedWord}
        </Heading>
      </Flex>
    </Flex>
  );
}

export default WordFormationGame;
