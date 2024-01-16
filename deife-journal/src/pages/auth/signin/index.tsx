
import { useEffect, useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Box, Flex, Image, Text, Link as ChakraLink, useColorMode, useToast } from '@chakra-ui/react';
import { blackPic, boyIcon, whitePic } from '../../../assets';
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../commom/components';
import { FormValues } from '../../../interface';
import { signsValidation } from '../../../validations';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebase';

const SignIn = () => {
  const [isPending, setIsPending] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to dashboard
        navigate("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const initialValues = {
    emailUsername: '',
    password: '',
  };

  const onSubmit = async (values: FormValues) => {
    setIsPending(true);
    try {
      const { emailUsername, password } = values;
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
          duration: 2000,
          isClosable: true,
          position: 'top-right',
          variant: 'top-accent',
        });
        navigate("/dashboard");
      } else {
        throw new Error('Invalid credentials');
      }
      setIsPending(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsPending(false);
      console.error('Error signing in:', error.message);
      toast({
        title: 'Sign-in Error',
        description: error.message || 'An error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });
    }
  };

  return (
    <Flex alignItems="stretch" minH={['100vh']}>
      <Box flex="2" display="flex" marginRight={['130px', '180px']} py={['20px']}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signsValidation}
        >
          {({ values, handleBlur, handleChange, errors, touched }) => (
            <Box className='slide-in-left' pl={['10px', '30px', '40px', '50px']} pr={['30px', "20px", '15px']} flexGrow={1}>
              <Form>
                <Image mb={['30px', '40px', '50px']} src={colorMode === 'light' ? blackPic : whitePic} w="100px" />
                <Text w={["100%", "80%", "50%"]} as="h1" pl={['10px']} fontSize={['md', 'lg', 'x-large']} fontWeight='bold'>Login to Deife's Journal</Text>
                <Text w={["100%", "80%", "50%"]} pl={['10px']} color='grey.300' fontSize='x-small'>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                <Box w={["100%", "90%", "50%"]} my={['10px']}>
                  <CustomInput
                    error={errors.emailUsername}
                    color="blue.100"
                    label="Email"
                    name="emailUsername"
                    fontWeight='700'
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
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    touched={touched.password}
                  />
                </Box>
                {touched.emailUsername && touched.password && (errors.emailUsername || errors.password) && (
                  <Box color="red" px='3px' fontSize={['11px', '12px']}>Invalid email/username or password. Please try again.</Box>
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
              <Flex flexDirection={['column', 'row']} fontSize={['sm',]} pl={['10px',]} gap={['20px', '40px', '60px']} mt={['100px',]}>
                <ChakraLink as={ReactRouterLink} to="/auth/forgot-password">
                  <Text>Forgot Password</Text>
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/auth/signup">
                  <Text>Don't have an account?</Text>
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

