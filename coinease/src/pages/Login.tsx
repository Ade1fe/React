

import React, { useState } from 'react';
import { Box, FormControl, Image, Text, FormLabel, Input, Button } from '@chakra-ui/react';
import { logoimg, signinimg } from '../assets/imgs';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
// import {  signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
import { useToast } from '@chakra-ui/react'
import { firestore } from '../firebase'; 
import { collection, query, where, getDocs } from 'firebase/firestore';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [activeInputField, setActiveInputField] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, ] = useState('');



 const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(4, 'Password should be at least 4 characters').required('Password is required'),
});

  const handleDigitClick = (digit: string) => {
    if (activeInputField === 'cardNumber') {
      setCardNumber(prevCardNumber => prevCardNumber + digit);
    } else if (activeInputField === 'pin') {
      setPin(prevPin => prevPin + digit);
    }
  };

  const handleDeleteClick = () => {
    if (activeInputField === 'cardNumber') {
      setCardNumber(prevCardNumber => prevCardNumber.slice(0, -1));
    } else if (activeInputField === 'pin') {
      setPin(prevPin => prevPin.slice(0, -1));
    }
  };

  const handleInputFocus = (inputId: string) => {
    setActiveInputField(inputId);
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };


  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await schema.validate({ email, password }, { abortEarly: false });
  
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const userCredential = await signInWithEmailAndPassword(auth, email!, password!);
  
      const usersRef = collection(firestore, 'coinbaseusers'); 
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.cardNumber === cardNumber && userData.pin === pin) {
          console.log('Card number and PIN are valid.');
          toast({
            title: `Card number and PIN are valid.`,
            position: "top-right",
            isClosable: true,
          });
          // Redirect or do whatever you want after successful login and validation
        } else {
          console.error('Invalid card number or PIN.');
          setError('Invalid card number or PIN.');
          toast({
            title: `Invalid card number or PIN.`,
            position: "top-right",
            isClosable: true,
          });
        }
      });
  
      // Clear form fields and error state on successful login
      setEmail('');
      setPassword('');
      setCardNumber('');
      setPin('');
      setEmailError('');
      setError('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Login failed!', err);
  
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path === 'email') setEmailError(error.message);
        });
      } else {
        setError('Login failed! An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Box className='texts' mx='auto' maxW={'1340px'} px='20px' color="black" pos='relative'>
      <Box display='flex' alignItems='center' gap='1' pos={['static', 'static', 'absolute']} zIndex='5' top='20px' mt={['1rem', '2.5rem', '0']} mb={['3rem', '5rem', 0]} right='40px'>
        <Image boxSize='50px' src={logoimg} alt="Logo" />
        <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
      </Box>

      <Box mx="auto" color='black'>
        <form onSubmit={handleSubmit}>
          <Box display={['block', "block", 'flex']} w='full' gap={['20px', "30px", "40px"]} justifyContent='space-between' alignItems={"center"}>
            <Box display={['none', 'none', "block"]} w={["100%", "35%", "40%"]} h={["30vh", '100vh']} pos='relative'>
              <Box className="" pos='absolute' top="0" left="0" bg='rgba(0, 0, 0, 0.7)' w="full" h='100%'></Box>
              <Image src={signinimg} w='full' h='full' objectFit='cover' />
            </Box>

            <Box w={['100%', '100%', "50", "40%", "30%"]}>
            {error && <Box color="red.500" mb={4}>{error}</Box>}
              <FormControl mb={4}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" border="none" bg="#f1f1f1" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <Box color="red.500">{emailError}</Box>}
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" border="none" bg="#f1f1f1" value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <Box color="red.500">{passwordError}</Box>}
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Card Number</FormLabel>
                <Input
                  id="cardNumber"
                  type="text"
                  border="none"
                  bg="#f1f1f1"
                  required
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
                  required
                  bg="#f1f1f1"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  onFocus={() => handleInputFocus('pin')}
                />
              </FormControl>
            </Box>

            <Box w={['80%', '60%', "60%", "40%", "20%"]} mx='auto' className="">
              <Box display='flex' flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
                {[...Array(10).keys()].map((digit) => (
                  <Button key={digit} _hover={{ bg: "gray.600" }} color="black" fontSize={['md', 'lg', "x-large"]} shadow='md' boxSize='60px' mx='auto' bg="#f1f1f1" borderRadius='50%' onClick={() => handleDigitClick(digit.toString())}>
                    {digit}
                  </Button>
                ))}
                <Button mt='20px' bg="#f1f1f1" _hover={{ bg: "gray.600" }} w='150px' color='black' shadow='md' borderRadius='md' onClick={handleDeleteClick}>Delete</Button>
              </Box>
              <Button
          type="submit"
          colorScheme="blue"
          isLoading={loading}
          loadingText="Loading"
          _hover={{ bg: "blue.600" }}
          border='none'
          w='full'
          mt={4}
        >
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


