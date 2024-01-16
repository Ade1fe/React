// import { useState } from 'react';
// import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
// import { Box, Flex, Image, Text, Link as ChakraLink } from '@chakra-ui/react';
// import { blackPic, girlIcon, whitePic } from '../../../assets';
// import { Formik, Form } from 'formik';
// import { CustomInput, CustomButton } from '../../../commom/components';
// import { signupValues } from '../../../interface';
// import { useColorMode, useToast } from '@chakra-ui/react';
// import { signsUpValidation } from '../../../validations';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from 'firebase/auth';
// import { app } from '../../../firebase';
// import { doc, setDoc } from 'firebase/firestore';
// import { firestore } from '../../../firebase';

// const SignUp = () => {
//   const [isPending,setIsPending] = useState(false);
//   const { colorMode } = useColorMode();
//   const [loginError] = useState(false);
//   const toast = useToast();
//   const auth = getAuth(app);
//   const navigate = useNavigate(); 

//   const getImageSource = (colorMode: string) => (colorMode === 'light' ? blackPic : whitePic);
//   const imageSource = getImageSource(colorMode);

//   const initialValues = {
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   };

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const onSubmit = async (values: signupValues, { setSubmitting }: any) => {
//     setIsPending(true);
//     try {
//       const { email, password, username, confirmPassword } = values;

//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//       // Optionally, you can update the user's display name (username in this case)
//       await updateProfile(userCredential.user, {
//         displayName: username,
//       });

//       const userId = userCredential.user.uid;
//       const userDocRef = doc(firestore, `journal/${userId}`);
//       await setDoc(userDocRef, {
//         username,
//         email,
//         confirmPassword, // Confirm password might not be necessary to store here
//       });

//       toast({
//         title: 'Signup Successful',
//         description: 'Welcome to Deife\'s Journal!',
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//         position: 'top-right',
//         variant: 'top-accent',
//       });
//       setIsPending(false);
//       navigate("/dashboard"); 
//       setSubmitting(false);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error:any) {
//       console.error('Error signing up:', error.message);
//       toast({
//         title: 'Signup Error',
//         description: error.message,
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//         position: 'top-right',
//         variant: 'top-accent',
//       });
//       setIsPending(false);
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Flex alignItems="stretch" minH={['100vh']}>
//       <Box flex="2" display="flex" marginRight={['130px', '180px']} py={['20px']}>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={onSubmit}
//           validationSchema={signsUpValidation}
//         >
//           {({ values, handleBlur, handleChange, errors, touched }) => (
//             <Box className='slide-in-left' pl={['10px', '30px', '40px', '50px']} pr={['30px', '20px', '15px']} flexGrow={1}>
//               <Form>
//                 <Image mb={['30px', '40px', '50px']} src={imageSource} w="100px" />
//                 <Text w={["100%", "80%", "50%"]} as="h1" pl={['10px']} fontSize={['md', 'lg', 'x-large']} fontWeight='bold'>Signup to Deife's Journal</Text>
//                 <Text w={["100%", "80%", "50%"]} pl={['10px']} color='grey.300' fontSize='x-small'>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
//                 <Box w={["100%", "90%", "50%"]} my={['10px']}>
//                   <CustomInput
//                     error={errors.email}
//                     color="blue.100"
//                     label="Email"
//                     name="email"
//                     fontWeight='700'
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     touched={touched.email}
//                   />
//                 </Box>

//                 <Box w={["100%", "90%", "50%"]} my={['10px']}>
//                   <CustomInput
//                     error={errors.username}
//                     color="blue.100"
//                     label="Username"
//                     name="username"
//                     fontWeight='700'
//                     value={values.username}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     touched={touched.username}
//                   />
//                 </Box>

//                 <Box w={["100%", "90%", "50%"]} my={['10px']}>
//                   <CustomInput
//                     error={errors.password}
//                     color="blue.100"
//                     label="Password"
//                     name="password"
//                     fontWeight='700'
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     type="password"
//                     touched={touched.password}
//                   />
//                 </Box>

//                 <Box w={["100%", "90%", "50%"]} my={['10px']}>
//                   <CustomInput
//                     error={errors.confirmPassword}
//                     color="blue.100"
//                     label="confirmPassword"
//                     name="confirmPassword"
//                     fontWeight='700'
//                     value={values.confirmPassword}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     touched={touched.confirmPassword}
//                     type="password"
//                   />
//                 </Box>
//                 {loginError && (
//                   <Box color="red" px='3px' fontSize={['11px', '12px']}>Invalid credentials. Please try again.</Box>
//                 )}
//                 <Box my={['20px']} pl={['10px']}>
//                   <CustomButton
//                     type="submit"
//                     bg="purple.400"
//                     color="white.100"
//                     isLoading={isPending}
//                     loadingText="Loading..."
//                     width={["140px"]}
//                   >
//                     Sign Up
//                   </CustomButton>
//                 </Box>

//                 <Flex flexDirection={['column', 'row']} fontSize={['sm',]} pl={['10px',]}
//                   gap={['20px', '40px', '60px']} mt={['100px',]}>
//                   <ChakraLink as={ReactRouterLink} to="/auth/forgot-password">
//                     <Text>Forgot Password</Text>
//                   </ChakraLink>
//                   <ChakraLink as={ReactRouterLink} to="/auth/signin">
//                     <Text>
//                       Already have an account?
//                     </Text>
//                   </ChakraLink>
//                 </Flex>
//               </Form>
//             </Box>
//           )}
//         </Formik>
//       </Box>
//       <Box pos='fixed' minH='100vh' right='0' px={['10px', '15px', '40px', '60px', '100px']}
//         flex="1" className='slide-in-right' display='flex' justifyContent='center' alignItems='center' bgGradient="linear(to-br, purple.400, purple.500)">
//         <Image src={girlIcon} boxSize={['130px', '170px', '270px']} />
//       </Box>
//     </Flex>
//   );
// };

// export default SignUp;



















import { useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Box, Flex, Image, Text, Link as ChakraLink, useColorMode, useToast } from '@chakra-ui/react';
import { blackPic, girlIcon, whitePic } from '../../../assets';
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../commom/components';
import { signupValues } from '../../../interface';
import { signsUpValidation } from '../../../validations';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { app } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase';

const SignUp = () => {
  const [isPending, setIsPending] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [loginError] = useState(false);

  const getImageSource = (colorMode: string) => (colorMode === 'light' ? blackPic : whitePic);
  const imageSource = getImageSource(colorMode);

  const initialValues = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values: signupValues) => {
    setIsPending(true);
    try {
      const { email, password, username, confirmPassword } = values;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore, `journal/${userId}`);
      await setDoc(userDocRef, {
        username,
        email,
        confirmPassword,
      });

      toast({
        title: 'Signup Successful',
        description: 'Welcome to Deife\'s Journal!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });

      setIsPending(false);
      navigate("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      toast({
        title: 'Signup Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });

      setIsPending(false);
    }
  };

  return (
    <Flex alignItems="stretch" minH={['100vh']}>
      <Box flex="2" display="flex" marginRight={['130px', '180px']} py={['20px']}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signsUpValidation}
        >
          {({ values, handleBlur, handleChange, errors, touched }) => (
            <Box className='slide-in-left' pl={['10px', '30px', '40px', '50px']} pr={['30px', '20px', '15px']} flexGrow={1}>
              <Form>
                <Image mb={['30px', '40px', '50px']} src={imageSource} w="100px" />
                <Text w={["100%", "80%", "50%"]} as="h1" pl={['10px']} fontSize={['md', 'lg', 'x-large']} fontWeight='bold'>Signup to Deife's Journal</Text>
                <Text w={["100%", "80%", "50%"]} pl={['10px']} color='grey.300' fontSize='x-small'>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                <Box w={["100%", "90%", "50%"]} my={['10px']}>
                  <CustomInput
                    error={errors.email}
                    color="blue.100"
                    label="Email"
                    name="email"
                    fontWeight='700'
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
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.confirmPassword}
                    type="password"
                  />
                </Box>

                {loginError && (
                  <Box color="red" px='3px' fontSize={['11px', '12px']}>Invalid credentials. Please try again.</Box>
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
                    Sign Up
                  </CustomButton>
                </Box>

                <Flex flexDirection={['column', 'row']} fontSize={['sm',]} pl={['10px',]}
              gap={['20px', '40px', '60px']} mt={['100px',]}>
              <ChakraLink as={ReactRouterLink} to="/auth/forgot-password">
                <Text>Forgot Password</Text>
              </ChakraLink>
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
  )
};

export default SignUp;

