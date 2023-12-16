import React, { useState, useEffect } from "react";
import { Box, Image, Input, Radio, RadioGroup, Spacer, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FiCamera } from "react-icons/fi";
import { Formik, Form } from 'formik';
import { CustomInput, CustomButton } from '../../../../commom/components';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../../../../firebase';
import { firestore } from '../../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { RiDeleteBin6Line } from "react-icons/ri";
import { manIcon, womanIcon, avatarIcon } from "../../../../assets";

const ProfileSettings = () => {
  const [value, setValue] = useState("other");
  const [isPending, setIsPending] = useState(false);
  const [loginError, ] = useState(false);
  const toast = useToast();
  const auth = getAuth(app);

  const [bio, setBio] = useState('');
  

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
  });

  

  const [initialValues, ] = useState({
    firstname: '',
    secondname: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateDisplayName = async (firstname: any, secondname: any) => {
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
      
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
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
        email: email || '', 
        username: displayName || '',
      });
    }
  }, []);

   
   // Function to update the image based on the selected radio button value
   const handleRadioChange = (newValue:string) => {
    setValue(newValue);
  };


  const splitDisplayName = () => {
    const { username } = userInfo;
    if (username) {
      const parts = username.split(' ');
      const fullname = parts.slice(0, -1).join(' ');
      const newUsername = parts[parts.length - 1];
      return { fullname, newUsername };
    }
    return { fullname: '', newUsername: '' }; 
  };
  

  const { fullname, newUsername } = splitDisplayName() || {};
  console.log("", fullname);
  console.log("", newUsername);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: { firstname: string; secondname: string; }, { setSubmitting }: any) => {
    setIsPending(true);

    try {
     
      await updateDisplayName(values.firstname, values.secondname);
      setIsPending(false);
      
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const bioCollection = collection(firestore, 'bios');
        await addDoc(bioCollection, {
          userId,
          bio: bio, 
        });
      }
     
    } catch (error) {
      setIsPending(false);
    }

    setSubmitting(false);
  };

  
// Define the image sources for different options
const getImageSource = () => {
  switch (value) {
    case "male":
      return manIcon;
    case "female":
      return womanIcon;
    case "other":
      return avatarIcon;
    default:
      return avatarIcon; 
  }
};

const handleBioChange = (e) => {
  const text = e.target.value.slice(0, 150); 
  setBio(text); 
};

  return (
    <>
     
     <Box alignItems='center' flexDirection='column' gap={4}
     display='flex' justifyContent='center'>
      <Box display="flex" alignItems="center" gap="5">
        <Text>
          <FiCamera size={25}  />
        </Text>
        <Image  bg='#ddd' src={getImageSource()} w="150px" borderRadius={"50%"} />

        <Text>
          <RiDeleteBin6Line size={25} />
        </Text>
      </Box>

      <RadioGroup onChange={handleRadioChange} value={value}>
        <Stack direction="row">
          <Radio value="male" colorScheme="purple">
            Male
          </Radio>
          <Spacer />
          <Spacer />
          <Radio value="female" colorScheme="purple">
            Female
          </Radio>
          <Spacer />
          <Spacer />
          <Radio value="other" colorScheme="purple">
            Other
          </Radio>
          <Spacer />
          <Spacer />
        </Stack>
      </RadioGroup>
    </Box>

     

      <Box mt={["10px", "14px", "16px"]}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values, handleBlur, handleChange, errors, touched }) => (
            <Box className='slide-in-left' px='0px'  shadow='base'
            flexGrow={1}>
              <Form >
                <Box p='9px' display='grid' gridTemplateColumns={['repeat(1,1fr)', "repeat(2, 1fr)"]} > 
                <Box my={['10px']} p='5px'>
                    <Text  fontSize="14px" mb='3px'
        textAlign="left" fontWeight='700'
        >Email:</Text>
                 <Input value={userInfo.email} disabled color='black' colorScheme="purple" />
                </Box>

                <Box my={['10px']} p='5px'>
                    <Text  fontSize="14px" mb='3px'
        textAlign="left" fontWeight='700'
        >Username:</Text>
                 <Input value={newUsername || ''}disabled color='black' colorScheme="purple" />
                </Box>

                <Box my={['10px']}>
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

                <Box  my={['10px']}>
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

                <Textarea
        placeholder="Tell us about yourself (max 150 characters)"
        size={["15px", "md"]}
        gridColumn={["span 1", "span 2"]}
        value={bio}
        p="5px"
        onChange={handleBioChange}
        maxLength={150}
      />

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









