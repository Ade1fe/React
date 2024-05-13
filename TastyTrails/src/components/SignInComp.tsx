import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Input, Box, Button, Text, FormLabel, FormControl } from '@chakra-ui/react';

const SignInComp = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState<string | null>(null); // Explicitly typing loginStatus as string or null
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(userCredential)

      navigate(`/`);
      setLoginStatus('success'); 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      setLoading(false);
      console.error(err.message);
      setLoginStatus('error'); 
    }
  };

  return (
    <Box display="flex" bg='orange.900' px='20px' alignItems='center' justifyContent='center' minH='100vh'>
      <Box 
        w='400px' p='6' shadow='lg' rounded='lg' bg='white' mx='auto'  alignItems="center" justifyContent="center" mt={8}
      >
        {loginStatus === 'success' && (
          <Box>Login Successful</Box>
        )}
        {loginStatus === 'error' && (
          <Box>Login Failed. Please try again. Invalid login credentials</Box>
        )}
        <Text fontWeight="500" fontSize={['lg', 'x-large', 'xx-large']} textAlign='center'>Welcome Back</Text>
        <Text fontWeight="500" mb='6' textAlign="center" fontSize={['md','lg']}>Login in to access your account</Text>
         
        <form onSubmit={handleLogin}>
          <FormControl my='4'>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
              required
              p='2'
              w='full'
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="blue.400"
            />
          </FormControl>
          <FormControl my='4'>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
              required
              p='2'
              w='full'
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="blue.400"
            />
          </FormControl>
          <Box>
            <label>
              <input type="checkbox" name="remember" className="mr-2" /> Remember me
            </label>
            <Text textAlign='right'>Forget Password</Text>
          </Box>
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
           {loading ? "Loading..." : "Sign In"}
          </Button>
        </form>
        <Box>
          <Text mt={3} color="gray.600" fontSize="sm" textAlign="center" px={2} mb={4}>
            Already have an account? <Link to="/sign-up" className='text-orange-500 font-bold'>Sign Up</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInComp;
