

import React from 'react';
import { Box, Button, Input, Select, Text } from '@chakra-ui/react';

interface TwoFieldsButtonsProps {
    placeholder: string;
    inputIds: string[];
    titles: string[];
    amount: string;
    bankOptions: { value: string; label: string }[]; 
    selectedBank: string; 
    onBankChange: (selectedBank: string) => void; 
    accountNumber: string;
    onDigitClick: (digit: string, inputId: string) => void;
    onDeleteClick?: (inputId: string) => void;
    onNextClick: () => void;
    activeIndex: number;
    nextButtonText: string; 
  }
  

const TwoFieldsButtons: React.FC<TwoFieldsButtonsProps> = ({
  placeholder,
  inputIds,
  titles,
  amount,
  bankOptions,
  selectedBank,
  onBankChange,
  accountNumber,
  onDigitClick,
  onDeleteClick,
  onNextClick,
  activeIndex,
  nextButtonText,
}) => {
  const handleNextClick = () => {
    onNextClick();
  };

  const handleDigitClick = (digit: string) => {
    onDigitClick(digit, inputIds[activeIndex]);
  };

  const handleDeleteClick = () => {
    onDeleteClick && onDeleteClick(inputIds[activeIndex]);
  };

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Box className="" w={['100%', '100%', '40%', '50%']}>
        <Text textAlign='center' textTransform='capitalize' fontSize={['md', 'lg', '20px']} mb={['10px']}> {titles[activeIndex]} </Text>
        {activeIndex === 0 ? (
          <Input
            id={inputIds[activeIndex]}
            placeholder={placeholder}
            value={amount}
            onChange={(e) => onDigitClick(e.target.value, inputIds[activeIndex])}
          />
        ) : activeIndex === 1 ? (
          <Input
            id={inputIds[activeIndex]}
            placeholder={placeholder}
            value={accountNumber}
            onChange={(e) => onDigitClick(e.target.value, inputIds[activeIndex])}
          />
        ) : activeIndex === 2 ? (
          <Select
            placeholder='Select bank'
            value={selectedBank}
            onChange={(e) => onBankChange(e.target.value)}
          >
            {bankOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </Select>
        ) : null}
        
        <Box display='flex' w='100%' justifyContent='center'>

<Button mt='20px' bg="#f1f1f1" _hover={{ bg: 'gray.600', color: "white" }} w='150px' color='black' borderRadius='md' onClick={handleNextClick}>
  {nextButtonText}
</Button>

        </Box>
      </Box>
      <Box display='flex' w={['100%', '100%', '40%', "30%", "30%"]} flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
        {[...Array(10).keys()].map((digit) => (
          <Button
            key={digit}
            _hover={{ bg: 'gray.600', color: "white" }}
            color='black'
            fontSize={['md', 'lg', 'x-large']}
            shadow='base'
            boxSize='60px'
            mx='auto'
            bg='#f1f1f1'
            borderRadius='50%'
            onClick={() => handleDigitClick(digit.toString())}
          >
            {digit}
          </Button>
        ))}
        <Button mt='20px' bg="#f1f1f1" _hover={{ bg: 'gray.600', color: "white" }} w='150px' color='black' borderRadius='md' onClick={handleDeleteClick}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default TwoFieldsButtons;