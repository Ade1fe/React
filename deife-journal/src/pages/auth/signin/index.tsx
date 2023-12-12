import  { useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { avatarIcon, blackPic, whitePic } from '../../../assets';
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../commom/components';
import { FormValues } from '../../../interface';
import { useColorMode, useToast } from '@chakra-ui/react';
import { signsValidation } from '../../../validations';


const SignIn = () => {
  const [isPending] = useState(false);
  const { colorMode } = useColorMode();
  const [loginError] = useState(false);
  const toast = useToast();

  const imageSource = colorMode === 'light' ? blackPic : whitePic;

  const initialValues = {
    emailUsername: '',
    password: '',
  };

  const onSubmit = async (values: FormValues) => {
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
    <Box h="100vh">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signsValidation}
      >
        {({ values, handleBlur, handleChange, errors,touched }) => (
          <Flex alignItems={[ 'center',"flex-start"]} >
            <Box flex="2" p="20px" className='slide-in-left'>
              <Form>
                <Image mb={['30px','40px','50px']} src={imageSource} w="100px" />
                <Text as="h1" pl={['10px']} fontSize={['md','lg','x-large']} fontWeight='bold'>Login to Deife's Journal</Text>
                  <Text pl={['10px']} color='grey.300' fontSize='x-small'>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                <Box w={["100%", "80%", "50%"]} my={['10px']}>          
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
                <Box w={["100%", "80%", "50%"]} my={['10px']}>
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
                  bg="purple.100"
                  color="white.100"
                  isLoading={isPending}
                  loadingText="Loading..."
                  width={["140px"]}
                >
                  Sign In
                </CustomButton>
              </Box>
              </Form>
              <Flex flexDirection={['column','row']} fontSize={['sm','md']} gap={['20px','40px','60px']} mt={['100px',]}>  <Text>Forgot Password</Text>  <Text>Don't have an account?</Text></Flex>
            </Box>
            <Box flex="1" className='slide-in-right' display='flex' justifyContent='center' alignItems='center' bgGradient="linear(to-br, purple.400, purple.500)" h={['100vh']}>
            <Image src={avatarIcon} boxSize={['100px', '200px', '300px']} />
            </Box>
            
          </Flex>
        )}
        
      </Formik>

   
    </Box>
  );
};

export default SignIn;
