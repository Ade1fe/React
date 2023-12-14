import React, { useState, useEffect } from "react";
import { Box, Image, Input, Radio, RadioGroup, Spacer, Stack, Text, useColorMode, useToast } from "@chakra-ui/react";
import { FiCamera } from "react-icons/fi";
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../../commom/components';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../../../firebase';
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const [value, setValue] = useState("other");
  const [isPending, setIsPending] = useState(false);
  const { colorMode } = useColorMode();
  const [loginError, setLoginError] = useState(false);
  const toast = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
  });

  

  const [initialValues, setInitialValues] = useState({
    firstname: '',
    secondname: '',
  });

  const updateDisplayName = async (firstname, secondname) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const { displayName } = user;
        const parts = displayName.split(' ');
        const existingUsername = parts[parts.length - 1]; // Extract existing username

        const updatedDisplayName = `${firstname} ${secondname} ${existingUsername}`;
        await updateProfile(user, { displayName: updatedDisplayName });



        toast({
          title: 'Update Success',
          description: 'Go to Display to see',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
          variant: 'top-accent',
        });
console.log("display", displayName);
console.log("parts", parts);
console.log("existingUsername", existingUsername);
console.log("updatedDisplayName", updatedDisplayName);

console.log("existingUsername", existingUsername);
        // navigate("/display");
      }
    } catch (error) {
      console.error('Error updating profile:', error.message);
      toast({
        title: 'Update Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'top-accent',
      });
    }
  };

  useEffect(() => {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user) {
      const { displayName, email } = user;
      setUserInfo({
        email: email || '', // Ensure that email is not null
        username: displayName || '', // Ensure that username is not null
      });
    }
  }, []);

  // const splitDisplayName = () => {
  //   const { username } = userInfo;
  //   if (username) {
  //     const parts = username.split(' ');
  //     const fullname = parts.slice(0, -1).join(' ');
  //     const newUsername = parts[parts.length - 1];
  //     return { fullname, newUsername };
  //   }
  //   return {};
  // };

  const splitDisplayName = () => {
    const { username } = userInfo;
    if (username) {
      const parts = username.split(' ');
      const fullname = parts.slice(0, -1).join(' ');
      const newUsername = parts[parts.length - 1];
      return { fullname, newUsername };
    }
    return { fullname: '', newUsername: '' }; // Ensure both properties are defined
  };
  

  // const { fullname, newUsername } = splitDisplayName();
  const { fullname, newUsername } = splitDisplayName() || {};
  console.log("", fullname);
  console.log("", newUsername);

  const onSubmit = async (values, { setSubmitting }) => {
    setIsPending(true);

    try {
      await updateDisplayName(values.firstname, values.secondname);
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
    }

    setSubmitting(false);
  };
 
  
  


  return (
    <>
     
     

      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values, handleBlur, handleChange, errors, touched }) => (
            <Box className='slide-in-left' pl={['10px', '30px', '40px', '50px']} pr={['30px', '20px', '15px']} flexGrow={1}>
              <Form>
                <Box w={["100%", "90%", "50%"]} my={['10px']} p='5px'>
                    <Text  fontSize="14px" mb='3px'
        textAlign="left" fontWeight='700'
        >Email:</Text>
                 <Input value={userInfo.email} disabled color='black' colorScheme="purple" />
                </Box>

                <Box w={["100%", "90%", "50%"]} my={['10px']} p='5px'>
                    <Text  fontSize="14px" mb='3px'
        textAlign="left" fontWeight='700'
        >Username:</Text>
                 <Input value={newUsername || ''}disabled color='black' colorScheme="purple" />
                </Box>

                <Box w={["100%", "90%", "50%"]} my={['10px']}>
                  <CustomInput
                    error={errors.firstname}
                    color="blue.100"
                    label="First Name"
                    name="firstname"
                    fontWeight='700'
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.firstname}
                  />
                </Box>

                <Box w={["100%", "90%", "50%"]} my={['10px']}>
                  <CustomInput
                    error={errors.secondname}
                    color="blue.100"
                    label="Second Name"
                    name="secondname"
                    fontWeight='700'
                    value={values.secondname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.secondname}
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
                    Update
                  </CustomButton>
                </Box>
              </Form>
            </Box>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default ProfileSettings;