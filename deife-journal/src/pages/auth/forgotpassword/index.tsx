import  { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Flex, Image, Text, Link as ChakraLink,  } from '@chakra-ui/react';
import {  blackPic, forgotPicon, whitePic } from '../../../assets';
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../commom/components';
import { forgotPassword } from '../../../interface';
import { useColorMode, useToast } from '@chakra-ui/react';
import { signsValidation } from '../../../validations';
import { FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
  const [isPending] = useState(false);
  const { colorMode } = useColorMode();
  const [loginError] = useState(false);
  const toast = useToast();

  const imageSource = colorMode === 'light' ? blackPic : whitePic;

  const initialValues = {
    email: '',
    
  };

  const onSubmit = async (values: forgotPassword) => {
    console.log(values);
    toast({
      title: 'Form Submitted',
      description: 'Login successful!',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
      variant: 'top-accent',
    });
  };

  

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
                <Text w={["100%", "80%", "50%"]}  as="h1" pl={['10px']} fontSize={['md','lg','x-large']} fontWeight='bold'>Forgot Password</Text>
                <Text w={["100%", "80%", "50%"]} pl={['10px']} color='grey.300' fontSize='x-small'>Enter your email and we'll send you an OTP to reset your password.</Text>
                <Box w={["100%", "90%", "50%"]} my={['10px']}>          
                  <CustomInput
                    error={errors.email}
                    color="blue.100"
                    label="Email"
                    name="email"
                    fontWeight='700'
                    // errorColor="red.100"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
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
                <ChakraLink as={ReactRouterLink} to="/auth/signin" 
                display='flex' alignItems='center' gap='5px'>
                    <FaArrowLeft />
              <Text>
               Back to Login
              </Text>
            </ChakraLink>
        </Flex>
            </Box>
        )}
        
      </Formik>
      </Box>


      <Box pos='fixed' minH='100vh' right='0' px={['10px', '15px', '40px', '60px', '100px']}
      flex="1" className='slide-in-right' display='flex' justifyContent='center' alignItems='center' bgGradient="linear(to-br, purple.400, purple.500)">
            <Image src={forgotPicon} boxSize={['130px', '170px', '270px']} />
            </Box>
            
   
    </Flex>
  );
};

export default ForgotPassword
