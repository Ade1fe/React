import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { blackPic, whitePic } from '../../../assets';
import { Formik, Form } from 'formik';
import { CustomInput, CusttomButton } from '../../../commom/components';
import signsValidation from '../../../validations';
import { FormValues } from '../../../interface';
import { useColorMode, useToast } from '@chakra-ui/react';

const SignIn = () => {
  const [isPending, setIsPending] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [loginError, setLoginError] = useState(false); // State to track login error

  const imageSource = colorMode === 'light' ? blackPic : whitePic;

  const initialValues = {
    emailUsername: '',
    password: '',
  };

  const handleSignIn = async (values: { emailUsername: string; password: string }) => {
    console.log("1: handleSignIn started");
    try {
      // Simulate a delay for the authentication process
      console.log("1: Inside try block");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const validCredentials = {
        email: 'damilola',
        password: 'Password1*',
      };
      console.log("1: After authentication logic");
      if (
        values.emailUsername === validCredentials.email &&
        values.password === validCredentials.password
      ) {
        // Successful login
        toast({
          title: 'Login Successful',
          description: 'Welcome back!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setLoginError(false); // Reset any previous login error
        // Additional actions after successful login
      } else {
        // Incorrect credentials
        toast({
          title: 'Login Failed',
          description: 'Please check your credentials and try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setLoginError(true); // Set login error state
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle error state or display an error toast
      toast({
        title: 'Error',
        description: 'An error occurred during sign-in. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setLoginError(true); // Set login error state
    }
  };

console.log("1");

  const onSubmit = async (values: FormValues) => {
    console.log("2: onSubmit started");
    setIsPending(true);
    try {
      console.log("2: Before handleSignIn");
      await handleSignIn(values);
      console.log('Form submitted:', values); // Check if form values are being captured correctly
      console.log("2: After handleSignIn");
    } catch (error) {
      console.error(error);
    } finally {
      setIsPending(false);
      console.log("2: onSubmit finished");
    }
  };
  

 
  

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signsValidation}>
        {({ values, handleBlur, handleChange, errors }) => (
          <Form>
            <Image src={imageSource} w="100px" />
            <Box>
              <CustomInput
                error={errors.emailUsername}
                color={'blue.100'}
                label="Email/Username"
                name="emailUsername"
                errorColor={'red.100'}
                value={values.emailUsername}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

            <Box>
              <CustomInput
                error={errors.password}
                color={'blue.100'}
                label="Password"
                name="password"
                errorColor={'red.100'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={'password'}
              />
            </Box>

            {loginError && ( // Display error message if loginError is true
              <Box color="red">Invalid credentials. Please try again.</Box>
            )}

            <CusttomButton
              type="submit"
              bg="purple.100"
              color="white.100"
              isLoading={isPending}
              loadingText="Loading..."
            >
              Sign In
            </CusttomButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignIn;
