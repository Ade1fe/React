import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

const SignUpComp: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phonenumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'phonenumber' && !/^\d*$/.test(value))
      setError('Phone number can only contain digits.');
    else setError('');
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (!/^[a-zA-Z\s]*$/.test(value))
      setError('Full Name can only contain letters and spaces.');
    else setError('');
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[a-zA-Z\s]*$/.test(formData.username)) {
      setError('Username can only contain letters and spaces.');
      setLoginStatus('error');
      return;
    }

    if (!/^\d{11}$/.test(formData.phonenumber)) {
      setError('Please enter a valid 10-digit phone number.');
      setLoginStatus('error');
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore, `foodappusers/${userId}`);

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
      navigate('/');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      console.error('Sign Up failed!', err);
      setLoginStatus('error');

      if (err.code === 'auth/invalid-email') setError('Error');
      else setError('Sign Up failed! An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" bg='orange.900' px='20px' alignItems='center' justifyContent='center' minH='100vh'>
      <Box w='400px' p='6' shadow='lg' rounded='lg' bg='white' mx='auto' alignItems="center" justifyContent="center" mt={8}>
        <form onSubmit={handleSave}>
          {loginStatus && <Text color={loginStatus === 'success' ? "green.600" : "red.600"} mb={4}>{error || "Login Successful"}</Text>}
          <Text fontWeight="500" fontSize={['lg', 'x-large', 'xx-large']} textAlign='center'>Join us today</Text>
          <Text fontWeight="500" mb='6' textAlign="center" fontSize={['md','lg']}>Sign up and become a member today</Text>

          <FormControl my='4'>
            <FormLabel htmlFor="username">Full Name:</FormLabel>
            <Input
              type="text"
              id="username"
              p='2'
              w='full'
              name="username"
              placeholder="Adeife Adams"
              required
              border={error && !formData.username ? '1px solid red' : '1px solid'}
              borderColor={error && !formData.username ? 'red' : 'gray.300'}
              focusBorderColor="blue.400"
              onChange={handleUsernameChange}
            />
          </FormControl>

          <FormControl my='4'>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              p='2'
              w='full'
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

          <FormControl my='4'>
            <FormLabel htmlFor="phone">Phone Number:</FormLabel>
            <Input
              type="tel"
              id="phone"
              name="phonenumber"
              required
              p='2'
              w='full'
              placeholder="Enter your phone number"
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="blue.400"
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl my='4'>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              required
              p='2'
              w='full'
              placeholder="Enter your password"
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="blue.400"
              onChange={handleInputChange}
            />
          </FormControl>

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
            mt='30px'
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </form>

        <Text mt={3} color="gray.600" fontSize="sm" textAlign="center" px={2} mb={4}>
          Already have an account? <Link to="/sign-in" className='text-orange-500 font-bold'>Sign In</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignUpComp;
