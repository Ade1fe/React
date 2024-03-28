
import React, { useEffect, useState } from 'react';
import { Box, Text, Link as ChakraLink, Icon, Button } from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';
import { Link as ReactRouterLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout, AiFillSetting } from 'react-icons/ai';
import { BiHomeAlt, BiSolidDrink } from 'react-icons/bi';
import { GiHamburger } from 'react-icons/gi';
import { BsFillBagHeartFill } from 'react-icons/bs';
import { Tooltip } from '@chakra-ui/react';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';


export interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0);

  const user = getAuth().currentUser;
  const userId = user ? user.uid : null;

  useEffect(() => {
    const firestoreInstance = getFirestore();
    const cartItemsRef = collection(firestoreInstance, 'cartItems');
    const cartItemQuery = query(cartItemsRef, where('userId', '==', userId));

    const unsubscribe = onSnapshot(cartItemQuery, (snapshot) => {
      let count = 0;
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        count++;
      });
      setCartItemCount(count);
    });

    return () => unsubscribe();
  }, [userId]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userId = user.uid;
          const userDocRef = doc(firestore, 'foodappusers', userId);
          const docSnapshot = await getDoc(userDocRef);

          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            console.log('User Data:', userData);
            setUserName(userData.username);
          } else {
            console.log('No such document!');
          }
        }
        
      } catch (error) {
        console.log('Error getting document:', error);
      } finally {
        setLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully.');
        localStorage.clear();
        navigate('/');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <Box className="text-fonts" maxWidth="1340px" mx="auto" display={['flex', 'flex']} justifyContent={['space-between']} gap="4" py="4" alignItems="center">
      <Box className="">
        <Text className="headTitle" textAlign={['center', 'left']} fontSize={['x-large', 'xx-large']} textShadow="1px 1px orange" fontWeight="700">
          TastyTrails
        </Text>
      </Box>

      <Box display={['none', null, 'flex']} justifyContent="space-between" gap="4" fontSize={['md', 'lg']}>
        <ChakraLink as={ReactRouterLink} to="/">
          Home
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/menu-page">
          Menu
        </ChakraLink>
        <Text>Service</Text>
      </Box>

      <Box px="10px" zIndex="99999" bg="white" shadow="sm" py="10px" justifyContent="space-between" gap="4" fontSize={['md', 'lg']}>
        {isAuthenticated ? (
          <>
            <Box className="">
              <Text noOfLines={1} whiteSpace='nowrap' display={['block', 'block', 'none']} textTransform="capitalize">
                {loading ? 'Loading...' : userName ? `Welcome ${userName}` : 'Welcome, no name'}
              </Text>
              <Box display={['none', 'none', 'block']} className="">
                <Menu>
                  <MenuButton _hover={{bg: "white"}} as={Button} bg='white' p='0' rightIcon={<FaArrowDown />}>
                    <Text noOfLines={1} textTransform="capitalize">
                      {loading ? 'Loading...' : userName ? `Welcome ${userName}` : 'Welcome, no name'}
                    </Text>
                  </MenuButton>
                  <MenuList>
                    <ChakraLink as={ReactRouterLink} to="/settings">
                      <MenuItem display="flex" alignItems="center" gap="3">
                        <Icon as={AiFillSetting} boxSize={['5', '6', '6']} />
                        Settings
                      </MenuItem>
                    </ChakraLink>
                    <MenuItem display="flex" alignItems="center" gap="3" onClick={handleSignOut}>
                      <Text >
                        <Icon as={AiOutlineLogout} boxSize={['5', '6', '6']} />
                      </Text>
                      Log out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <ChakraLink as={ReactRouterLink} to="/sign-up">
              <Text>Login</Text>
            </ChakraLink>
          </>
        )}
      </Box>

      <Box px="20px" bg="white" shadow="base" py="10px" zIndex="99999" display={['flex', null, 'none']} w={['full']} bottom="0" left="0" pos={['fixed']} justifyContent="space-between" gap="4" fontSize={['md', 'lg']}>
        <Tooltip label="Home">
          <ChakraLink as={ReactRouterLink} to="/">
            <Icon as={BiHomeAlt} boxSize={['5', '6', '6']} />
          </ChakraLink>
        </Tooltip>
        <Tooltip label="Menu">
          <ChakraLink as={ReactRouterLink} to="/menu-page">
            <Icon as={GiHamburger} boxSize={['5', '6', '6']} />
          </ChakraLink>
        </Tooltip>
        <Tooltip label="Drinks">
          <Text>
            <Icon as={BiSolidDrink} boxSize={['5', '6', '6']} />
          </Text>
        </Tooltip>
        <Tooltip label="Cart">
          <ChakraLink as={ReactRouterLink} to="/cart" pos="relative" mr="4">
            <Icon as={BsFillBagHeartFill} boxSize={['5', '6', '10']} />
            {cartItemCount > 0 && (
              <Box as="span" pos="absolute" top="-10px" right="-10px" color="white" bg="red" borderRadius="lg" px="1.5" zIndex="9999" fontSize="xs" ml="2">
                {cartItemCount}
              </Box>
            )}
          </ChakraLink>
        </Tooltip>
        <Box bg="white" display="flex" justifyContent="space-between" gap={['8', '9', '12', '16']} fontSize={['md', 'lg']}>
          {isAuthenticated ? (
            <Tooltip label="Settings">
              <ChakraLink as={ReactRouterLink} to="/settings">
                <Icon as={AiFillSetting} boxSize={['5', '6', '6']} />
              </ChakraLink>
            </Tooltip>
          ) : (
            <Box pr={[6, 7, 8, 10]}>
              <Tooltip label="Sign Out">
                <ChakraLink as={ReactRouterLink} to="/sign-up">
                  <Icon as={FiLogIn} boxSize={['5', '6', '6']} />
                </ChakraLink>
              </Tooltip>
            </Box>
          )}
          {isAuthenticated && (
            <Tooltip label="Sign Out">
              <Text onClick={handleSignOut}>
                <Icon as={AiOutlineLogout} boxSize={['5', '6', '6']} />
              </Text>
            </Tooltip>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
