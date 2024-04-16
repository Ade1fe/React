
import React, { useState } from 'react';
import { Box, Image } from "@chakra-ui/react";
import { TwoFieldsButtons } from "../../components";
import { atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';

const InternalTransfer = () => {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountNumberName, setAccountNumberName] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputIds = ['amountInput', 'accountInput'];
  const inputTitles = ['Enter Amount', 'Enter Account Number', 'Account Name']; 


  const handleDigitClick = (digit: string, inputId: string) => {
    if (inputId === 'amountInput') {
      setAmount(prevAmount => prevAmount + digit);
    } else if (inputId === 'accountInput') {
      setAccountNumber(prevAccountNumber => prevAccountNumber + digit);
    }
  };

  const handleDeleteClick = (inputId: string) => {
    if (inputId === 'amountInput') {
      setAmount(prevAmount => prevAmount.slice(0, -1));
    } else if (inputId === 'accountInput') {
      setAccountNumber(prevAccountNumber => prevAccountNumber.slice(0, -1));
    }
  };

  const handleNextClick = () => {
    const nextIndex = (activeIndex + 1) % (inputIds.length + 1); 
    setActiveIndex(nextIndex);
  };


  const nextButtonText = activeIndex === inputIds.length ? 'Send' : 'Next';

  return (
    <LayoutComp desc='Enter the amount you want to send'>
      <Box display={['block', 'flex']} >
        <Box className="" w={['full', 'full', '35%']}>
          <Image src={atmimg} />
        </Box>
        <Box className="" w={['full', 'full', '65%']} pos='relative'>
        <TwoFieldsButtons
  placeholder="Enter something"
  inputIds={inputIds}
  titles={inputTitles}
  amount={amount}
  accountNumber={accountNumber}
  accountNumberName={accountNumberName}
  onDigitClick={(digit, inputId) => handleDigitClick(digit, inputId)}
  onDeleteClick={(inputId) => handleDeleteClick(inputId)}
  onNextClick={() => handleNextClick()}
  activeIndex={activeIndex}
  nextButtonText={nextButtonText} 
/>

<Link to='/home-page'>
        <Box  mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={[ 'static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
      </Link>
        </Box>
      </Box>
    </LayoutComp>
  );
};


export default InternalTransfer
