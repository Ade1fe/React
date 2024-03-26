import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

const SignUpComp: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phonenumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Phone number validation: Check if the input contains only digits
    if (name === 'phonenumber' && !/^\d*$/.test(value)) {
      setError('Phone number can only contain digits.');
      setLoginStatus('error');
    } else {
      setError(''); // Clear the error message if the input is valid.
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setError('Full Name can only contain letters and spaces.');
      setLoginStatus('error');
    } else {
      setError(''); // Clear the error message if the input is valid.
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[a-zA-Z\s]*$/.test(formData.username)) {
      setError('Username can only contain letters and spaces.');
      setLoginStatus('error');
      return;
    }

    // Phone number validation
    if (!/^\d{11}$/.test(formData.phonenumber)) {
      setError('Please enter a valid 10-digit phone number.');
      setLoginStatus('error');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore,`foodappusers/${userId}`);
      await setDoc(userDocRef, {
        username: formData.username,
        email: formData.email,
        phonenumber: formData.phonenumber,
      });
      setFormData({
        username: '',
        email: '',
        password: '',
        phonenumber: '',
      });
      setLoginStatus('success');
      navigate('/signin');
    } catch (err) {
      console.error('Sign Up failed!', err);
      setLoginStatus('error');
      if (err.code === 'auth/invalid-email') {
        setError('Error');
      } else {
        setError(
          'Sign Up failed! An error occurred. Please try again later.\n Email-already-in-use'
        );
      }
    }
  };

  const comingSoon = () => {
    alert("This feature is coming soon\nKindly enter your information");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={8}
    >
      <form
        className="bg-white w-[90%] rounded mx-auto"
        onSubmit={handleSave}
      >
        {loginStatus === 'success' && (
          <Text color="green.600" mb={4}>
            Login Successful
          </Text>
        )}
        {loginStatus === 'error' && (
          <Text color="red.600" mb={4}>
            {error}
          </Text>
        )}
        <Stack spacing={3} mb={3}>
          <FormControl>
            <FormLabel htmlFor="username">Full Name:</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Adeife Adams"
              required
              border={error && !formData.username ? '1px solid red' : '1px solid'}
              borderColor={error && !formData.username ? 'red' : 'gray.300'}
              focusBorderColor="blue.400"
              onChange={handleUsernameChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="blue.400"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Phone Number:</FormLabel>
            <Input
              type="tel"
              id="phone"
              name="phonenumber"
              required
              placeholder="Enter your phone number"
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="blue.400"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="blue.400"
              onChange={handleInputChange}
            />
          </FormControl>
        </Stack>
        <Button
          type="submit"
          bg="orange.500"
          _hover={{ bg: 'orange.600' }}
          color="white"
          fontWeight="semibold"
          w="full"
          py={2}
          px={4}
          rounded="md"
        >
          Sign Up
        </Button>
      </form>
      <Box mt={3} textAlign="center" w="full">
        <p className="flex items-center w-80 mx-auto">
          <span className="border-b-2 border-b-orange-500 w-full"></span>
          <span className="text-gray-600 text-2xl mx-2 mb-1 capitalize">or</span>
          <span className="border-b-2 border-b-orange-500 w-full"></span>
        </p>
        <Stack spacing={5} direction="row" w="full" justify="center" mx="auto" mt={3}>
          <Box border="2px" px={4} py={3} onClick={comingSoon}>
            <FaGoogle className="text-red-500" size={25} />
          </Box>
          <Box border="2px" px={4} py={3} onClick={comingSoon}>
            <FaApple className="text-black" size={25} />
          </Box>
          <Box border="2px" px={4} py={3} onClick={comingSoon}>
            <FaFacebook className="text-blue-500" size={25} />
          </Box>
        </Stack>
      </Box>
      <Text mt={3} color="gray.600" fontSize="sm" textAlign="center" px={2} mb={4}>
        Already have an account? <Link to="/signin" className='text-orange-500 font-bold'>Sign In</Link>
      </Text>
    </Box>
  );
};

export default SignUpComp;

