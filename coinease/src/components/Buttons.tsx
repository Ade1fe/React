
import { Box, Button, Image, Input, Text } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';

interface ButtonsProps {
  placeholder: string;
  inputId: string;
  onDigitClick: (digit: string) => void;
  onDeleteClick?: () => void;
  onWithdrawClick?: () => void;
  title?: string;
  imageText?: string;
  value?: string;
  buttonText?: string;

}

const Buttons: React.FC<ButtonsProps> = ({ placeholder, inputId, onDigitClick, onDeleteClick, title, imageText, value , onWithdrawClick, buttonText}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeInputField, setActiveInputField] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputFocus = (inputId: string) => {
    setActiveInputField(inputId);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDigitClick = (digit: string) => {
    onDigitClick(digit);
    setActiveInputField(inputId);
    if (inputRef.current) {
      const currentInputValue = inputRef.current.value;
      inputRef.current.value = currentInputValue + digit;
      inputRef.current.focus();
    }
  };

  const handleDeleteClick = () => {
    if (inputRef.current) {
      const currentInputValue = inputRef.current.value;
      inputRef.current.value = currentInputValue.slice(0, -1);
      inputRef.current.focus();
      if (onDeleteClick) {
        onDeleteClick();
      }
    }
  };

  const handleWithdrawClick = () => {
    setIsLoading(true); // Set loading state to true
    // Perform withdrawal logic
    // Once completed, set isLoading back to false
    if (onWithdrawClick) {
      onWithdrawClick();
      setIsLoading(false);
    }
  };


  return (
    <Box display={['block', 'block', 'flex']} justifyContent='space-between' gap='4'>
      <Box className="" w={['100%', '100%', '40%', '50%']} >
        <Box w={['full']} h={['150px']} >
          <Image src={imageText} w='full' h='full' objectFit='contain' />
        </Box>
        <Text textAlign='center' textTransform='capitalize' fontSize={['md', 'lg', '18px', '20px',]} mb={['10px']}> {title} </Text>
        <Input
          ref={inputRef}
          id={inputId}
          placeholder={placeholder}
          onFocus={() => handleInputFocus(inputId)}
          type="number"
          required
          value={value}
          onChange={(e) => onDigitClick(e.target.value)}
        />
         <Box display='flex' w='100%' justifyContent='center' mb={['2rem', '2.5rem','0']}>
          <Button mt='20px' isLoading={isLoading}  loadingText="Processing" bg="#f1f1f1" _hover={{ bg: 'gray.600', color: "white" }} w='150px' color='black' borderRadius='md' onClick={handleWithdrawClick} >
            {buttonText}
          </Button>
        </Box>
      </Box>

     
      <Box display='flex' w={['80%', '55%', '50%', "60%", "30%"]} mx='auto' mt={['1rem', '1rem', '0']} flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
        {[...Array(10).keys()].map((digit) => (
          <Button
            key={digit}
            _hover={{ bg: 'gray.600', color: "white" }}
            color='black'
            fontSize={['md', 'lg', 'x-large']}
            shadow='base'
            boxSize='60px'
            mx='auto'
            bg={activeInputField === inputId ? '#f1f1f1' : '#f1f1f1'}
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

export default Buttons;


