import  { useState } from 'react';
import { Box, Image } from "@chakra-ui/react";
import { Buttons } from "../../components";
import { atmcardimg, atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';

const MoneyDeposit = () => {
  const [, setAmount] = useState('');

  const handleDigitClick = (digit: string) => {
    setAmount(prevAmount => prevAmount + digit);
  };

  const handleDeleteClick = () => {
    setAmount(prevAmount => prevAmount.slice(0, -1));
  };

  return (
    <LayoutComp desc='Enter the amount you want to desposit'>
    <Box display={['block', 'flex']} >
    <Box className="" w={['full', 'full', '40%']}>
      <Image src={atmimg} />
    </Box>
    <Box className="" w={['full', 'full', '60%']} pos='relative'>
      <Buttons imageText={atmcardimg} title="Enter amount to desposit" placeholder="1.000" inputId="amount" onDigitClick={handleDigitClick} onDeleteClick={handleDeleteClick} />
      <Link to='/home-page'>
        <Box className="" pos='absolute' bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['30%']} left='20px'> Cancel</Box>
      </Link>
    </Box>
    </Box>
  </LayoutComp>
  
  );
};


export default MoneyDeposit
