import { Formik, Form } from 'formik';
import { CustomButton, OverLayComp } from '../../../components';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Link as ChakraLink,  } from '@chakra-ui/react'


import Input from '../../../components/inputs';
import { FaEye,  } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { playbtn } from '../../../assets';

const SignInComp = () => {
  const navigate = useNavigate();
  const initialValues = { fullname: '', email: '', password: '' }; 
  const onSubmit = (values: any) => {

    console.log(values);
  };

  const signInValidation = (values: any) => {

    const errors = {};
    console.log(values);
   
    return errors;
  };

  return (
    <OverLayComp>
    <Box  h='100%' display='flex' flexDir='column' justifyContent='center'>
    <Image  src={playbtn} boxSize={20} mb='14'  mx='auto' className='slide-in-right' />

<Text className='slide-in-right' fontFamily='Kode Mono, monospace' fontWeight='bold' fontSize={['x-large', 'xx-large', 'xxx-large']}>
   Welcome Back
 </Text>

 <Text  className='slide-in-left' fontFamily='Kanit, sans-serif' fontWeight='400' fontSize={[ 'sm' , 'md' ,'lg',]}>
 Sign in to continue
 </Text>
<Formik
 initialValues={initialValues}
 onSubmit={onSubmit}
 validationSchema={signInValidation}
>
 {({ values, handleBlur, handleChange, errors }) => (
   <Form>
     
     <Flex w={['full', 'full', '70%', '60%']} mx='auto' mt={10} fontFamily='Kanit, sans-serif' fontWeight='400' direction="column" gap={["15px", "33px"]} mb="20px">
       <Input
        icon={<AiFillMail />}
         error={errors.email}
         color={'blue.100'}
         label="Email/Username"
         name="emailUsername"
         errorColor={"red.100"}
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
         type='email'
         placeholder="addypearl@gmail.com"
         backgroundcolor="rgba(128,0,128,0.2)"
       />
       <Input
        icon={<FaEye />}
         color='blue.100'
         error={errors.password}
         label="Enter Password"
         name="password"
         errorColor={"red.100"}
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         type='password'
         placeholder="********"
         backgroundcolor="rgba(128,0,128,0.2)"
       />
         <Text fontSize="md" mb={5} textAlign='right' color='purple.100' >Forgot Password?</Text>
     </Flex>

   

     <CustomButton
  w={['full', 'full', '70%', '60%']} mx='auto'
   p={3}
   buttonColor="purple.300"
   borderColor="Purple.500"
   bgColor="purple.900"

   ml='auto'
   onClick={() => navigate('/dashboard')}
   hoverBgColor="purple.500"
   transition='all .2s ease-in-out'
   mr='10px'
   className='slide-in-right'
   fontSize='14px'
   borderRadius='10px'
   color='white'
 >
  Create Account
 </CustomButton>
   </Form>
 )}
</Formik>




<Box mt={[6,8, 10,]} fontSize="md">
<ChakraLink as={ReactRouterLink} to='/auth/signup' >
Don't have an account? <Text as='span' color='purple.300'> Create a new account</Text>
</ChakraLink>
</Box>
    </Box>
    </OverLayComp>
  );
};


export default SignInComp
