import React, { useState } from 'react';
import { Box, FormControl,Image,Text, FormLabel, Input, Button,  } from '@chakra-ui/react';
import { logoimg, signinimg } from '../assets/imgs';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [activeInputField, setActiveInputField] = useState<string>('');

  const handleDigitClick = (digit: string) => {
    // Update cardNumber or pin based on the active input field
    if (activeInputField === 'cardNumber') {
      setCardNumber(prevCardNumber => prevCardNumber + digit);
    } else if (activeInputField === 'pin') {
      setPin(prevPin => prevPin + digit);
    }

    // Log the clicked digit
    console.log('Clicked Digit:', digit);
  };

  const handleDeleteClick = () => {
    // Delete last digit from cardNumber or pin based on the active input field
    if (activeInputField === 'cardNumber') {
      setCardNumber(prevCardNumber => prevCardNumber.slice(0, -1));
    } else if (activeInputField === 'pin') {
      setPin(prevPin => prevPin.slice(0, -1));
    }
  };

  const handleInputFocus = (inputId: string) => {
    // Set the active input field ID when it gains focus
    setActiveInputField(inputId);
    // Set focus to the input element
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login submission, you can perform validation here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Card Number:', cardNumber);
    console.log('PIN:', pin);
  };

  return (
  <Box  className='texts' mx='auto' maxW={'1340px'} px='20px' color="white" pos='relative'>
        <Box display='flex' alignItems='center' gap='1' pos={['static','static', 'absolute']} zIndex='9999' top='20px'  mt={['1rem','2.5rem', '0']} mb={['3rem', '5rem', 0]} right='40px'>
          <Image boxSize='50px' src={logoimg} alt="Logo" />
          <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
        </Box>


    <Box  mx="auto"  color='white'>
      <form onSubmit={handleSubmit}>

   <Box display={['block', "block", 'flex']} w='full' gap={['20px', "30px", "40px"]} justifyContent='space-between' alignItems={"center"}> 
   <Box display={['none', 'none', "block"]}  w={["100%", "35%", "40%"]} h={["30vh", '100vh']} pos='relative'>
        <Box className="" pos='absolute' top="0" left="0" bg='rgba(0, 0, 0, 0.7)' w="full" h='100%'></Box>
        <Image src={signinimg} w='full' h='full' objectFit='cover' />
      </Box>

   <Box w={['100%', '100%',  "50", "40%", "30%"]} >
    <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email"  border="none"
            bg="#030b10" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password"  border="none"
            bg="#030b10" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Card Number</FormLabel>
          <Input
            id="cardNumber"
            type="text"
            border="none"
            bg="#030b10"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            onFocus={() => handleInputFocus('cardNumber')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>PIN</FormLabel>
          <Input
            id="pin"
            type="password"
            border="none"
            bg="#030b10"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onFocus={() => handleInputFocus('pin')}
          />
        </FormControl>
</Box>
        
     <Box  w={['80%', '60%',  "60%", "40%", "20%"]} mx='auto' className="" >
     <Box display='flex' flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
          {[...Array(10).keys()].map((digit) => (
            <Button key={digit} _hover={{bg: "gray.600"}} color="white" fontSize={['md', 'lg', "x-large"]} shadow='xl' boxSize='60px' mx='auto'  bg='#081e2b' borderRadius='50%' onClick={() => handleDigitClick(digit.toString())}>
              {digit}
            </Button>
          ))}
          <Button mt='20px' bg="#081e2b" _hover={{bg: "gray.600"}}  w='150px' color='white'  borderRadius='md' onClick={handleDeleteClick}>Delete</Button>
        </Box>
        <Button type="submit" mt='1rem' w='200px' colorScheme="blue">
          Login
        </Button>
     </Box>
   </Box>
      </form>
      <Box className="" mt='2rem' pb='2rem' textAlign='center'> <Link to='/sign-up' className="">Don't have an account? sign up</Link></Box>
    </Box>
  </Box>
  );
};

export default Login;
