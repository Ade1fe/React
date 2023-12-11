import {  useToast } from '@chakra-ui/react';

export const handleSignIn = async (
  values: { emailUsername: string; password: string },
  toast: ReturnType<typeof useToast>,
) => {
  console.log("1");
  try {
    // Simulate a delay for the authentication process
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const validCredentials = {
      email: 'johanna',
      password: 'Babadami1*',
    };

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
      console.log("worked");
      // Perform actions after successful login (redirect, set auth state, etc.)
    } else {
      // Incorrect credentials
      toast({
        title: 'Login Failed',
        description: 'Please check your credentials and try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      console.log("nope");
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
    console.log("wrong");
  }
};
