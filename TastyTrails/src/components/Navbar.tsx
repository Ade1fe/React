
import { Box, Icon, Text } from '@chakra-ui/react';
import { BiHomeAlt, BiSolidDrink } from 'react-icons/bi';
import { ImMenu } from 'react-icons/im';
import { GrServicePlay } from 'react-icons/gr';
import { TfiShoppingCart } from 'react-icons/tfi';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'



const Navbar = () => {
  return (
    <Box  className='subtitle' maxWidth='1340px' mx='auto' display={['block', 'flex']} justifyContent={['center', 'space-between']} gap='4' py='4' alignItems='center'>

      <Box className="">
        <Text className='headTitle' textAlign={['center', 'left']} fontSize={['x-large', 'xx-large']} textShadow='1px 1px orange' fontWeight='700'> TastyTrails </Text>
      </Box>

      <Box  display={['none',null, 'flex']} justifyContent='space-between' gap='4' fontSize={['md','lg']}>
      <ChakraLink as={ReactRouterLink} to='/'>
  Home
</ChakraLink>
       
        <ChakraLink as={ReactRouterLink} to='/menu-page'>
  Menu
</ChakraLink>
        <Text>Service </Text>
        <Text>Shop </Text>
      </Box>

      {/* <Box >
        <InputGroup shadow='base' py={1} px='3' borderRadius='10px'>
          <InputLeftAddon>
            <Icon as={FaSearch} />
          </InputLeftAddon>
          <Input placeholder='Search ...' w='full' px='2' mx={2} py={1} outlineColor='white' />
          <InputRightAddon borderLeftColor='black' borderLeftWidth='2px' pl='3' display={['none', 'null', 'flex']}>
            <Icon as={FaCartPlus} />
          </InputRightAddon>
        </InputGroup>
      </Box> */}

      <Box fontSize={['md','lg']} display='flex' justifyContent='space-between' gap='4'>
        <Text className="">Login</Text>
        <Text className="">Sign Up</Text>
      </Box>

      <Box px='20px'  bg='white' shadow='base' py='10px' zIndex='99999' display={['flex',null, 'none']} w={['full']} bottom='0' left='0' pos={['fixed']} justifyContent='space-between' gap='4' fontSize={['md','lg']}>
        <Text> <Icon as={BiHomeAlt} boxSize={['5','6', '6']} /> </Text>
        <Text> <Icon as={ImMenu}  boxSize={['5','6', '6']} />  </Text>
        <Text> <Icon as={GrServicePlay} boxSize={['5','6', '6']}  /> </Text>
        <Text> <Icon as={BiSolidDrink} boxSize={['5','6', '6']}  /> </Text>
        <Text> <Icon as={TfiShoppingCart} boxSize={['5','6', '6']}  /> </Text>
      </Box>
     
    </Box>
  );
};

export default Navbar;
