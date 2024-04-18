
// Login.tsx
import React, { useState } from 'react';
import { Box, FormControl, Image, Text, FormLabel, Input, Button } from '@chakra-ui/react';
import { logoimg, signinimg } from '../assets/imgs';
import { Link, useNavigate,  } from 'react-router-dom';
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';
import { auth, firestore } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

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

  const navigate = useNavigate();

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
  
      // Authenticate user with email/password
      const authUser = await signInWithEmailAndPassword(auth, email, password);
  
      if (authUser) {
        // Check if the card number matches
        const usersRef = collection(firestore, 'coinbaseusers');
        const q = query(usersRef, where("email", "==", email), where("cardNumber", "==", cardNumber));
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          toast({
            title: `Successful login`,
            position: "top-right",
            isClosable: true,
          });
          // Redirect to dashboard or perform any action for successful login
          navigate('/home-page'); // Assuming you have a route for the dashboard
        } else {
          toast({
            title: `Card number does not match the registered user.`,
            position: "top-right",
            isClosable: true,
          });
          setError('Card number does not match the registered user.');
        }
      } else {
        // Email/password authentication failed
        toast({
          title: `Invalid email or password`,
          position: "top-right",
          isClosable: true,
        });
        setError('Invalid email or password');
      }
    } catch (err) {
      toast({
        title: `Login failed!`,
        position: "top-right",
        isClosable: true,
      });
      console.error('Login failed!', err);
  
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path === 'email') setEmailError(error.message);
        });
      } else {
        toast({
          title: `Login failed! An error occurred. Please try again later.`,
          position: "top-right",
          isClosable: true,
        });
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

            <Box>
              <Box className="" display={['block','block', "flex"]}>
                <Box w={['100%','100%', '40%']}>
                  {error && <Box color="red.500" mb={4}>{error}</Box>}
                  <FormControl mb={4}>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" border="none" bg="#f1f1f1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <Box color="red.500">{emailError}</Box>}
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" border="none" bg="#f1f1f1" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Card Number</FormLabel>
                    <Input
                      id="cardNumber"
                      type="number"
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

                <Box mx='auto' className="" w={['80%','50%',  '44%', '40%',  '40%']} >
                  <Box display='flex' flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
                    {[...Array(10).keys()].map((digit) => (
                      <Button key={digit} _hover={{ bg: "gray.600" }} color="black" fontSize={['md', 'lg', "x-large"]} shadow='md' boxSize='60px' mx='auto' bg="#f1f1f1" borderRadius='50%' onClick={() => handleDigitClick(digit.toString())}>
                        {digit}
                      </Button>
                    ))}
                    <Button mt='15px' bg="#f1f1f1" _hover={{ bg: "gray.600" }} w='150px' color='black' shadow='md' borderRadius='md' onClick={handleDeleteClick}>Delete</Button>
                  </Box>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    isLoading={loading}
                    loadingText="Loading"
                    _hover={{ bg: "blue.900" }}
                    border='none'
                    w='full'
                    mt={4}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
              <Box mt={['3rem', '3.5rem', '4rem']} pb='2rem' textAlign='center'>
                <Link to='/sign-up' className="">Don't have an account? sign up</Link>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
