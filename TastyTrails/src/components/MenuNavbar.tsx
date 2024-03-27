import React, { useState, useEffect } from 'react';
import { Box, Icon, Input, InputGroup, InputLeftAddon, Text, Button } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';
import { BiHomeAlt, BiSolidDrink } from 'react-icons/bi';
import { GrServicePlay } from 'react-icons/gr';
import { TfiShoppingCart } from 'react-icons/tfi';
import { BsFillBagHeartFill } from "react-icons/bs";
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

interface MenuNavbarProps {
  fetchMeals: (searchQuery: string) => void;
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({ fetchMeals }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0); // State to hold the cart item count

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

  return (
    <Box pt='10' pb='4' pl={['20px', '20px', '20px', '2', '2']} pr={['20px', '20px', '20px', '2', '2']}  className='subtitle'>
      <Box display="flex" justifyContent='space-between' gap={['25px', '20px', "15px", '30px']} alignItems='center'>
        <ChakraLink as={ReactRouterLink} to='/'>
          <Text className='headTitle' textAlign={['center', 'left']} fontSize={['x-large', 'xx-large']} textShadow='1px 1px orange' fontWeight='700'> TastyTrails </Text>
        </ChakraLink>
        <Box w='full'>
          <form onSubmit={handleSubmit}>
            <InputGroup shadow='sm' border='1px' borderColor='#f1f1f1' py={1} px='3' borderRadius='10px' >
              <InputLeftAddon>
                <Icon as={FaSearch} />
              </InputLeftAddon>
              <Input
                placeholder='Search for food ...'
                w='full'
                px='2'
                mx={2}
                py={1}
                outlineColor='white'
                value={searchQuery}
                onChange={handleInputChange}
              />
              <Button type="submit">Search</Button>
            </InputGroup>
          </form>
        </Box>
        <ChakraLink as={ReactRouterLink} to='/cart' display={['none', null, 'block']} pos='relative' mr='4'>
          <Icon as={BsFillBagHeartFill} boxSize={['5', '6', '8']} />
          {cartItemCount > 0 && <Box as="span" pos='absolute' top='-10px' right='-10px' color='white' bg='red' borderRadius='lg' px='2' zIndex='9999' fontSize="xs" ml="2">{cartItemCount}</Box>}
        </ChakraLink>
        <Box px='20px' bg='white' shadow='base' py='10px' zIndex='99999' display={['flex', null, 'none']} w={['full']} bottom='0' left='0' pos={['fixed']} justifyContent='space-between' gap='4' fontSize={['md', 'lg']}>
          <Text> <Icon as={BiHomeAlt} boxSize={['5', '6', '6']} /> </Text>
          <Text> <Icon as={ImMenu} boxSize={['5', '6', '6']} />  </Text>
          <Text> <Icon as={GrServicePlay} boxSize={['5', '6', '6']} /> </Text>
          <Text> <Icon as={BiSolidDrink} boxSize={['5', '6', '6']} /> </Text>
          <ChakraLink as={ReactRouterLink} to='/cart' pos='relative' mr='4'>
          <Icon as={TfiShoppingCart} boxSize={['5', '6', '10']} />
          {cartItemCount > 0 && <Box as="span" pos='absolute' top='-10px' right='-10px' color='white' bg='red' borderRadius='lg' px='1.5' zIndex='9999' fontSize="xs" ml="2">{cartItemCount}</Box>}
        </ChakraLink>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuNavbar;
