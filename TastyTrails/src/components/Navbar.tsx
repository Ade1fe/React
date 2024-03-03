
import { Box, Icon, Input, InputGroup, InputLeftAddon, InputRightAddon, Text } from '@chakra-ui/react';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { BiHomeAlt, BiSolidDrink } from 'react-icons/bi';
import { ImMenu } from 'react-icons/im';
import { GrServicePlay } from 'react-icons/gr';
import { TfiShoppingCart } from 'react-icons/tfi';

const Navbar = () => {
  return (
    <Box  className='subtitle' maxWidth='1440px' mx='auto' display={['block', 'flex']} justifyContent={['center', 'space-between']} gap='4' py='4' alignItems='center'>

      <Box className="">
        <Text className='headTitle' textAlign={['center', 'left']} fontSize={['x-large', 'xx-large']} textShadow='1px 1px orange' fontWeight='700'> TastyTrails </Text>
      </Box>

      <Box  display={['none',null, 'flex']} justifyContent='space-between' gap='4' fontSize={['md','lg']}>
        <Text> Home</Text>
        <Text> Menu</Text>
        <Text>Service </Text>
        <Text>Shop </Text>
      </Box>

      <Box >
        <InputGroup shadow='base' py={1} px='3' borderRadius='10px'>
          <InputLeftAddon>
            <Icon as={FaSearch} />
          </InputLeftAddon>
          <Input placeholder='Search ...' w='full' px='2' mx={2} py={1} outlineColor='white' />
          <InputRightAddon borderLeftColor='black' borderLeftWidth='2px' pl='3' display={['none', 'null', 'flex']}>
            <Icon as={FaCartPlus} />
          </InputRightAddon>
        </InputGroup>
      </Box>

      <Box px='3' shadow='base'  py='2' display={['flex',null, 'none']} w={['full']} bottom='0' left='0' pos={['fixed']} justifyContent='space-between' gap='4' fontSize={['md','lg']}>
        <Text> <Icon as={BiHomeAlt} /> </Text>
        <Text> <Icon as={ImMenu} />  </Text>
        <Text> <Icon as={GrServicePlay} /> </Text>
        <Text> <Icon as={BiSolidDrink} /> </Text>
        <Text> <Icon as={TfiShoppingCart} /> </Text>
      </Box>
     
    </Box>
  );
};

export default Navbar;
