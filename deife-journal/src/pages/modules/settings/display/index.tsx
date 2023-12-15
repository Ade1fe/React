
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app, firestore } from "../../../../firebase";
import { Box, Text, Flex, Avatar, VStack } from "@chakra-ui/react";
import { collection, query, where, getDocs } from 'firebase/firestore'; // Ensure these imports are present

const DisplayComponent = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
  });
  const [bio, setBio] = useState('');

  useEffect(() => {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user) {
      const { displayName, email } = user;
      setUserInfo({
        email: email || '',
        username: displayName || '',
      });

      const userId = user.uid;
      const bioCollection = collection(firestore, 'bios');
      const bioQuery = query(bioCollection, where('userId', '==', userId));

      getDocs(bioQuery)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const bioData = doc.data();
            setBio(bioData.bio || '');
          });
        })
        .catch((error) => {
          console.error('Error getting documents: ', error);
        });
    }
  }, []);

  const splitDisplayName = () => {
    const { username } = userInfo;
    if (username) {
      const parts = username.split(' ');
      const fullname = parts.slice(0, -1).join(' ');
      const newUsername = parts[parts.length - 1];
      return { fullname, newUsername };
    }
    return {};
  };

  const { fullname, newUsername } = splitDisplayName();

  return (
    <Box p={4} textAlign="center">
      <Flex direction="column" alignItems="center" mb={4} >
        <Avatar size="xl" bg="purple.500" name={newUsername} />
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          {fullname}
        </Text>
        <Text color="gray.500">@{newUsername}</Text>
      </Flex>
      <VStack spacing={4} align="start">
        <Text fontSize="lg" fontWeight="bold">User Information:</Text>
        <Text fontSize="md" >Email: {userInfo.email}</Text>
        <Text fontSize="md" >Bio: {bio}</Text>
      </VStack>
    </Box>
  );
};

export default DisplayComponent;


