
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app, firestore } from "../../../../firebase";
import { Box } from "@chakra-ui/react";
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
            // setBio(doc.data().bio || '');
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
    <Box>
      {/* ... (your existing JSX) */}
      <p>Bio: {bio}</p>
      <h2>User Information:</h2>
      <div>
        <p>Email: {userInfo.email}</p>
        <p>Username: {userInfo.username}</p>
        <p>Display Name: {userInfo.username}</p>
     <p>full Name: {fullname}</p>
        <p>Username: {newUsername}</p>
      
      </div>
    </Box>
  );
};

export default DisplayComponent;

