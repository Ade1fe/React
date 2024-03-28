import React, { useState, useEffect } from 'react';
import { Box, Icon, Input, InputGroup, Text, Button, InputRightAddon } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { GiHamburger } from "react-icons/gi";
import { BiHomeAlt, BiSolidDrink } from 'react-icons/bi';
import { Tooltip } from '@chakra-ui/react'
import { BsFillBagHeartFill } from "react-icons/bs";
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';



interface MenuNavbarProps {
  fetchMeals: (searchQuery: string) => void;
  isAuthenticated: boolean;
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({ fetchMeals,isAuthenticated }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();
  // const [userName, setUserName] = useState<string | null>(null);
  // const [loading, setLoading] = useState(true);  

  const user = getAuth().currentUser;
  const userId = user ? user.uid : null;

  useEffect(() => {
    const firestoreInstance = getFirestore();
    const cartItemsRef = collection(firestoreInstance, 'cartItems');
    const cartItemQuery = query(
      cartItemsRef,
      where('userId', '==', userId)
    );

    const unsubscribe = onSnapshot(cartItemQuery, (snapshot) => {
      let count = 0;
      snapshot.forEach(doc => {
        const data = doc.data();
        console.log(data)
        count++;
      });
      setCartItemCount(count);
     
    });

    return () => unsubscribe(); 
  }, [userId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMeals(searchQuery);
  };

  useEffect(() => {
    const firestoreInstance = getFirestore();
    const cartItemsRef = collection(firestoreInstance, 'cartItems');
    const cartItemQuery = query(
      cartItemsRef,
      where('userId', '==', userId)
    );

    const unsubscribe = onSnapshot(cartItemQuery, (snapshot) => {
      let count = 0;
      snapshot.forEach(doc => {
        const data = doc.data();
        console.log(data)
        count++;
      });
      setCartItemCount(count);
     
    });

    return () => unsubscribe();
  }, [userId]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully.');
        navigate('/');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };



  return (
    <Box pt='10' pb='4' px={['20px']}  className='subtitle'>
      <Box display="flex" justifyContent='space-between' gap={['25px', '20px', "15px", '20px']} alignItems='center'>
        <ChakraLink as={ReactRouterLink} to='/'>
          <Text className='headTitle' textAlign={['center', 'left']} fontSize={['x-large', 'xx-large']} textShadow='1px 1px orange' fontWeight='700'> TastyTrails </Text>
        </ChakraLink>
        <Box w='full'>
          <form onSubmit={handleSubmit}>
            <InputGroup shadow='sm' border='1px' borderColor='#f1f1f1' borderRadius='10px' >
           
              <Input
                placeholder='Search for food ...'
                w='full'
                px='2'
                mx={2}
                py={1}
                outlineColor='white'
                outline='none'
                border='none'
                value={searchQuery}
                onChange={handleInputChange}
              />
                 <InputRightAddon  bg='white' border='none' p='0' >
               <Button size='sm' type="submit" bg='white' p='0'> <Icon as={FaSearch} bg='white' /></Button>
             </InputRightAddon>
            </InputGroup>
          </form>
        </Box>
        <ChakraLink as={ReactRouterLink} to='/cart' display={['none', null, 'block']} pos='relative' mr='4'>
          <Icon as={BsFillBagHeartFill} boxSize={['5', '6', '8']} />
          {cartItemCount > 0 && <Box as="span" pos='absolute' top='-10px' right='-10px' color='white' bg='red' borderRadius='lg' px='2' zIndex='9999' fontSize="xs" ml="2">{cartItemCount}</Box>}
        </ChakraLink>
    

<Box px='20px' bg='white' shadow='base' py='10px' zIndex='99999' display={['flex', null, 'none']} w={['full']} bottom='0' left='0' pos={['fixed']} justifyContent='space-between' gap='4' fontSize={['md', 'lg']}>
  <Tooltip label="Home">
    <ChakraLink  as={ReactRouterLink} to='/'> <Icon as={BiHomeAlt} boxSize={['5', '6', '6']} /> </ChakraLink>
  </Tooltip>
  <Tooltip label="Menu">
    <ChakraLink as={ReactRouterLink} to='/menu-page'> <Icon as={GiHamburger} boxSize={['5', '6', '6']} /> </ChakraLink>
  </Tooltip>
  <Tooltip label="Drinks">
    <Text> <Icon as={BiSolidDrink} boxSize={['5', '6', '6']} /> </Text>
  </Tooltip>
  <Tooltip label="Cart"> 
  <ChakraLink as={ReactRouterLink} to='/cart' pos='relative' mr='4'>
            <Icon as={BsFillBagHeartFill} boxSize={['5', '6', '10']} />
            {cartItemCount > 0 && <Box as="span" pos='absolute' top='-10px' right='-10px' color='white' bg='red' borderRadius='lg' px='1.5' zIndex='9999' fontSize="xs" ml="2">{cartItemCount}</Box>}
          </ChakraLink>
          </Tooltip>
  <Box bg='white' display='flex' justifyContent='space-between' gap={['8', '9', '12', '16']} fontSize={['md', 'lg']}>
    {isAuthenticated ? (
    
      <Tooltip label="Settings">
      <Text>  <Icon as={AiFillSetting} boxSize={['5', '6', '6']} /> </Text>
    </Tooltip>
    ) : (
      <>
        <Text>Kindly login</Text>
        <ChakraLink as={ReactRouterLink} to='/sign-up'>
          <Text>
            <FiLogIn />
          </Text>
        </ChakraLink>
      </>
    )}
    {isAuthenticated && (
       <Tooltip label="Sign Out">
     <Text onClick={handleSignOut}><Icon as={AiOutlineLogout} boxSize={['5', '6', '6']} /></Text> 
     </Tooltip>
    
    )}
  </Box>
</Box>
      </Box>
    </Box>
  );
};

export default MenuNavbar;
