import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../../../firebase";
import { Box } from "@chakra-ui/react";




const DisplayComponent = () => {

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
  });

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
       <h2>User Information:</h2>
      <div>
        <p>Email: {userInfo.email}</p>
        <p>Username: {userInfo.username}</p>
        <p>Display Name: {userInfo.username}</p>
        <p>full Name: {fullname}</p>
        <p>Username: {newUsername}</p>
      </div>
    
    </Box>
  )
}

export default DisplayComponent
