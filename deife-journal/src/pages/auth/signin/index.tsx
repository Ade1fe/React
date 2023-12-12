import  { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Flex, Image, Text, Link as ChakraLink,  } from '@chakra-ui/react';
import {  blackPic, boyIcon, whitePic } from '../../../assets';
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../commom/components';
import { FormValues } from '../../../interface';
import { useColorMode, useToast } from '@chakra-ui/react';
import { signsValidation } from '../../../validations';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  app,
} from '../../../firebase';
import { handleSignIn } from '../../../api';




const SignIn = () => {
  const [isPending,setIsPending] = useState(false);
  const { colorMode } = useColorMode();
  const [loginError,setLoginError] = useState(false);
  const toast = useToast();
  const auth = getAuth(app);

  const imageSource = colorMode === 'light' ? blackPic : whitePic;

  const initialValues = {
    emailUsername: '',
    password: '',
  };


  const onSubmit = async (values: FormValues) => {
    const { emailUsername, password } = values;
  
    try {
      const isEmail = /\S+@\S+\.\S+/.test(emailUsername);
  
      let signInCredential;
  
      if (isEmail) {
        signInCredential = await signInWithEmailAndPassword(auth, emailUsername, password);
        console.log('Signing in with email:', signInCredential);
      } else {
        throw new Error('Please enter a valid email');
      }
  
      if (signInCredential) {
        toast({
          title: 'Sign-in Successful',
          description: 'Welcome back!',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
          variant: 'top-accent',
        });
        // Redirect the user or handle further actions after successful sign-in
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      setLoginError(true);
      toast({
        title: 'Sign-in Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });
    }
  };

  // const onSubmit = async (values: FormValues) => {
  //   setIsPending(true);
  //   try {
  //     await handleSignIn(values, toast);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsPending(false);
  //   }
  // };
  


  return (
    <Flex alignItems="stretch" minH={['100vh']}> 
   <Box flex="2" display="flex" marginRight={['130px', '180px']} py={['20px']}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signsValidation}
      >
        {({ values, handleBlur, handleChange, errors,touched }) => (
         <Box className='slide-in-left' pl={['10px', '30px','40px','50px']}  pr={['30px', "20px", '15px']} flexGrow={1}>
           
              <Form>
                <Image mb={['30px','40px','50px']} src={imageSource} w="100px" />
                <Text w={["100%", "80%", "50%"]}  as="h1" pl={['10px']} fontSize={['md','lg','x-large']} fontWeight='bold'>Login to Deife's Journal</Text>
                <Text w={["100%", "80%", "50%"]} pl={['10px']} color='grey.300' fontSize='x-small'>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                <Box w={["100%", "90%", "50%"]} my={['10px']}>          
                  <CustomInput
                    error={errors.emailUsername}
                    color="blue.100"
                    label="Email/Username"
                    name="emailUsername"
                    fontWeight='700'
                    // errorColor="red.100"
                    value={values.emailUsername}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.emailUsername}
                  />
                </Box>
                <Box w={["100%", "90%", "50%"]} my={['10px']}>  
                  <CustomInput
                    error={errors.password}
                    color="blue.100"
                    label="Password"
                    name="password"
                    fontWeight='700'
                    // errorColor="red.300"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    touched={touched.password}
                  />
                </Box>
                {loginError && (
                  <Box color="red">Invalid credentials. Please try again.</Box>
                )}
              <Box my={['20px']} pl={['10px']}>
              <CustomButton
                  type="submit"
                  bg="purple.400"
                  color="white.100"
                  isLoading={isPending}
                  loadingText="Loading..."
                  width={["140px"]}
                >
                  Sign In
                </CustomButton>
              </Box>
              </Form>
              <Flex flexDirection={['column','row']} fontSize={['sm','md']} pl={['10px',]}
              gap={['20px','40px','60px']} mt={['100px',]}> 
               <ChakraLink as={ReactRouterLink} to="/auth/forgot-password">
               <Text>Forgot Password</Text> 
            </ChakraLink>                    
                <ChakraLink as={ReactRouterLink} to="/auth/signup">
              <Text>
                Dont have an account?
              </Text>
            </ChakraLink>
        </Flex>
            </Box>
        )}
        
      </Formik>
      </Box>


      <Box pos='fixed' minH='100vh' right='0' px={['10px', '15px', '40px', '60px', '100px']}
      flex="1" className='slide-in-right' display='flex' justifyContent='center' alignItems='center' bgGradient="linear(to-br, purple.400, purple.500)">
            <Image src={boyIcon} boxSize={['130px', '170px', '270px']} />
            </Box>
            
   
    </Flex>
  );
};

export default SignIn;

