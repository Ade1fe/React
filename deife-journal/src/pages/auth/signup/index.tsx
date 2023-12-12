import  { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Flex, Image, Text, Link as ChakraLink,  } from '@chakra-ui/react';
import { blackPic, girlIcon, whitePic } from '../../../assets';
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../commom/components';
import { signupValues } from '../../../interface';
import { useColorMode, useToast } from '@chakra-ui/react';
import { signsUpValidation } from '../../../validations';


const SignUp = () => {
  const [isPending] = useState(false);
  const { colorMode } = useColorMode();
  const [loginError] = useState(false);
  const toast = useToast();

  const imageSource = colorMode === 'light' ? blackPic : whitePic;

  const initialValues = {
    email: '',
    username: '',
    password: '',
   confirmPassword: "",

  };

  const onSubmit = async (values: signupValues) => {
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
        validationSchema={signsUpValidation}
      >
        {({ values, handleBlur, handleChange, errors,touched }) => (
         <Box className='slide-in-left' pl={['10px', '30px','40px','50px']}  pr={['30px', "20px", '15px']} flexGrow={1}>
              <Form>
                <Image mb={['30px','40px','50px']} src={imageSource} w="100px" />
                <Text w={["100%", "80%", "50%"]} as="h1" pl={['10px']} fontSize={['md','lg','x-large']} fontWeight='bold'>Signup to Deife's Journal</Text>
                  <Text w={["100%", "80%", "50%"]} pl={['10px']} color='grey.300' fontSize='x-small'>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
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

                <Box w={["100%", "90%", "50%"]} my={['10px']}>          
                  <CustomInput
                    error={errors.username}
                    color="blue.100"
                    label="Username"
                    name="username"
                    fontWeight='700'
                    // errorColor="red.100"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.username}
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

                <Box w={["100%", "90%", "50%"]} my={['10px']}>          
                  <CustomInput
                    error={errors.confirmPassword}
                    color="blue.100"
                    label="confirmPassword"
                    name="confirmPassword"
                    fontWeight='700'
                    // errorColor="red.100"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.confirmPassword}
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

              <Flex flexDirection={['column','row']} fontSize={['sm','md']} pl={['10px',]}
              gap={['20px','40px','60px']} mt={['100px',]}>  <Text>Forgot Password</Text>                    
                <ChakraLink as={ReactRouterLink} to="/auth/signin">
              <Text>
                Already have an account?
              </Text>
            </ChakraLink>
        </Flex>
              </Form>
             
            </Box>
        
        )}
        
      </Formik>
      </Box>
      <Box pos='fixed' minH='100vh' right='0' px={['10px', '15px', '40px', '60px', '100px']}
      flex="1" className='slide-in-right' display='flex' justifyContent='center' alignItems='center' bgGradient="linear(to-br, purple.400, purple.500)">
            <Image src={girlIcon} boxSize={['130px', '170px', '270px']} />
            </Box>
   
   </Flex>
  );
};


export default SignUp
