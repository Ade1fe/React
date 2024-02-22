


import { Formik, Form } from 'formik';
import { CustomButton, OverLayComp } from '../../../components';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink,  } from 'react-router-dom'
import { Link as ChakraLink,  } from '@chakra-ui/react'


import Input from '../../../components/inputs';
import { FaEye, FaUser,  } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { playbtn } from '../../../assets';

const SignUpComp = () => {
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


<Image src={playbtn} boxSize={20} mb='14' mx='auto' className='slide-in-right' />

<Text mt={5} className='slide-in-right' fontFamily='Kode Mono, monospace' fontWeight='bold' fontSize={['x-large', 'xx-large', 'xxx-large']}>
   Create Account
 </Text>

 <Text  className='slide-in-left' mb='8' fontFamily='Kanit, sans-serif' fontWeight='400' fontSize={[ 'sm' , 'md' ,'lg',]}>
 create a new account
 </Text>


 <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInValidation}
      >
        {({ values, handleBlur, handleChange, errors }) => (
          <Form>
            
            <Flex w={['full', 'full', '70%', '60%']} mx='auto' fontFamily='Kanit, sans-serif' fontWeight='400' direction="column" gap={["15px", "33px"]} mb="20px">
            <Input
              icon={<FaUser />}
                error={errors.email}
                color={'blue.100'}
                label="fullname"
                name="fullname"
                errorColor={"red.100"}
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder="Full Name"
                backgroundcolor="rgba(128,0,128,0.2)"
                
              />

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
            </Flex>

            <CustomButton
         w={['full', 'full', '70%', '60%']} mx='auto'
          p={3}
          buttonColor="purple.300"
          borderColor="Purple.500"
          bgColor="purple.900"
      
          ml='auto'
          // onClick={() => navigate('/screen-three')}
          hoverBgColor="purple.500"
          transition='all .2s ease-in-out'
          mr='10px'
          className='slide-in-right'
          fontSize='14px'
          borderRadius='10px'
          color='white'
          mt='8'
        >
         Create Account
        </CustomButton>
          </Form>
        )}
      </Formik>





<Box mt={[10,12,14,16]} fontSize="md">
<ChakraLink as={ReactRouterLink} to='/auth/signin' >
Already have an account? <Text as='span' color='purple.300'> login</Text>
</ChakraLink>
</Box>
    </Box>
    </OverLayComp>
  );
};


export default SignUpComp
