import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, Image, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { logoimg, signupimg } from '../assets/imgs';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react'


const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositAmountError, setDepositAmountError] = useState('');
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [gender, setGender] = useState('male');
  const [status, setStatus] = useState('single');
  const [work, setWork] = useState('');
  const [newCardNumber, setNewCardNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAccountNumber, setAccountNumber] = useState('');
  const [, setSignupStatus] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const toast = useToast();

// Define Yup schema for form validation
const schema = Yup.object().shape({
  name: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Name should contain letters and spaces only').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(4, 'Password should be at least 4 characters').required('Password is required'),
  depositAmount: Yup.number().max(999999, 'Maximum deposit amount is 999999').required('Deposit Amount is required'),
  pin: Yup.string().matches(/^\d{4}$/, 'Pin should be 4 numbers only').required('Pin is required'),
});


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await schema.validate({
        name,
        email,
        password,
        depositAmount,
        pin,
      }, { abortEarly: false });

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore, `coinbaseusers/${userId}`);

      const generatedCardNumber = Math.floor(1000000000000000 + Math.random() * 900000000000);
      const generatedAccountNumber = Math.floor(1000000000 + Math.random() * 90000000000);

      await setDoc(userDocRef, {
        name,
        email,
        password,
        depositAmount,
        pin,
        gender,
        status,
        work,
        cardNumber: generatedCardNumber.toString(),
        accountNumber: generatedAccountNumber.toString(),
      });

      setNewCardNumber(generatedCardNumber.toString());
      setAccountNumber(generatedAccountNumber.toString());
      setIsModalOpen(true);
      setSignupStatus('success');
      toast({
        title: `Successful`,
        position: "top-right",
        isClosable: true,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Sign Up failed!', err);
      toast({
        title: `Sign Up failed!', ${err}`,
        position: "top-right",
        isClosable: true,
      });
      setSignupStatus('error');

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          switch (error.path) {
            case 'name':
              setNameError(error.message);
              break;
            case 'email':
              setEmailError(error.message);
              break;
            case 'password':
              setPasswordError(error.message);
              break;
            case 'depositAmount':
              setDepositAmountError(error.message);
              break;
            case 'pin':
              setPinError(error.message);
              break;
            default:
              break;
          }
        });
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid Email');
        toast({
          title: `Invalid Email.`,
          position: "top-right",
          isClosable: true,
        });
      } else {
        setError('Sign Up failed! An error occurred. Please try again later.');
        toast({
          title: `Sign Up failed! An error occurred. Please try again later.`,
          position: "top-right",
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="texts" display={['block', 'flex']} mx='auto' maxW={'1340px'} px='20px' gap='4' pos='relative'>
      <Box className="" w={["100%", "35%", "40%"]} pos='relative'>
        <Box className="" pos='absolute' top="0" left="0" bg='rgba(0, 0, 0, 0.3)' w="full" h='100%'></Box>
        <Image src={signupimg} w='full' h='full' objectFit='cover' />
      </Box>

      <Modal isOpen={isModalOpen} onClose={() => navigate('/')} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>New Card Number</ModalHeader>
          <ModalCloseButton />
          <ModalBody maxW={'700px'}>
            <Text>Your new card number: {newCardNumber}</Text>
            <Text>Your Account number: {newAccountNumber}</Text>
            <Text>Please copy this number as you will need it to login to your account.</Text>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box borderRadius="md" color='black' w={["100%", "100%", "60%"]} mt={['0', '6rem']}>
        {error && <Box color="red.500" mt={4}>{error}</Box>}
        <Box display='flex' alignItems='center' gap='1' pos={['static', 'absolute']} top='20px' mt={['2rem', '0']} mb={['1rem', 0]} right='40px'>
          <Image boxSize='50px' src={logoimg} alt="Logo" />
          <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
        </Box>
        <Text fontSize={['lg', 'x-large', 'xx-large']} mb='2rem' className="subtitles">Create an account</Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" border='none' bg="#f1f1f1" value={name} onChange={(e) => setName(e.target.value)} />
            {nameError && <Box color="red.500">{nameError}</Box>}
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" border='none' bg="#f1f1f1" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <Box color="red.500">{emailError}</Box>}
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" border='none' bg="#f1f1f1" value={password} onChange={(e) => setPassword(e.target.value)} />
            {passwordError && <Box color="red.500">{passwordError}</Box>}
          </FormControl>
          <FormControl id="depositAmount" mb={4} >
            <FormLabel>Deposit Amount</FormLabel>
            <Input type="number" border='none' bg="#f1f1f1" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
            {depositAmountError && <Box color="red.500">{depositAmountError}</Box>}
          </FormControl>
          <FormControl id="pin" mb={4} >
            <FormLabel>Create Pin</FormLabel>
            <Input type="number" border='none' bg="#f1f1f1" value={pin} onChange={(e) => setPin(e.target.value)} />
            {pinError && <Box color="red.500">{pinError}</Box>}
          </FormControl>
          <FormControl id="gender" mb={4}>
            <FormLabel>Gender</FormLabel>
            <Select value={gender} border='none' bg="#f1f1f1" onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl id="status" mb={4}>
            <FormLabel>Status</FormLabel>
            <Select value={status} border='none' bg="#f1f1f1" onChange={(e) => setStatus(e.target.value)}>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </Select>
          </FormControl>
          <FormControl id="work" mb={4}>
            <FormLabel>Work</FormLabel>
            <Input type="text" border='none' required bg="#f1f1f1" value={work} onChange={(e) => setWork(e.target.value)} />
          </FormControl>
          <Button
            type="submit"
            isLoading={loading}
            loadingText="Loading"
            _hover={{ bg: loading ? "blue.900" : "green.600", color: "white" }}
            border='none'
            w='200px'
            bg={loading ? "blue.900" : "blue.900"}
            color="white"
            disabled={loading}
          >
            Sign Up
          </Button>

        </form>
        <Box className="" mt='2rem' pb='2rem' textAlign='center'> <Link to='/sign-in' className="">Already have an account? sign in</Link></Box>
      </Box>


    </Box>
  );
};

export default SignUp;
