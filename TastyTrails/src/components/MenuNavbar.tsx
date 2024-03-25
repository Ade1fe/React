import { Box,Icon,Input,InputGroup,InputLeftAddon,Text } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { FaSearch,  } from 'react-icons/fa'
import { ImMenu } from 'react-icons/im';
import { BiHomeAlt, BiSolidDrink } from 'react-icons/bi';
import { GrServicePlay } from 'react-icons/gr';
import { TfiShoppingCart } from 'react-icons/tfi';

const MenuNavbar = () => {
  return (
    <Box py='4' px={['20px','20px', '20px', '0', '0']} className='subtitle' maxWidth='1340px' mx='auto'>

   <Box display="flex" justifyContent='space-between' gap={['25px','20px',"15px", '10px']}>
   <ChakraLink as={ReactRouterLink} to='/'>
        <Text className='headTitle' textAlign={['center', 'left']} fontSize={['x-large', 'xx-large']} textShadow='1px 1px orange' fontWeight='700'> TastyTrails </Text>
</ChakraLink>
    

<Box w='full'>
        <InputGroup shadow='sm' border='1px' borderColor='#f1f1f1' py={1} px='3' borderRadius='10px'>
          <InputLeftAddon>
            <Icon as={FaSearch} />
          </InputLeftAddon>
          <Input placeholder='Search for food ...' w='full' px='2' mx={2} py={1} outlineColor='white' />
        </InputGroup>
      </Box> 


      <Box px='20px' bg='white' shadow='base' py='10px' zIndex='99999' display={['flex',null, 'none']} w={['full']} bottom='0' left='0' pos={['fixed']} justifyContent='space-between' gap='4' fontSize={['md','lg']}>
        <Text> <Icon as={BiHomeAlt} boxSize={['5','6', '6']} /> </Text>
        <Text> <Icon as={ImMenu}  boxSize={['5','6', '6']} />  </Text>
        <Text> <Icon as={GrServicePlay} boxSize={['5','6', '6']}  /> </Text>
        <Text> <Icon as={BiSolidDrink} boxSize={['5','6', '6']}  /> </Text>
        <Text> <Icon as={TfiShoppingCart} boxSize={['5','6', '6']}  /> </Text>
      </Box>

   </Box>
      
    </Box>
  )
}

export default MenuNavbar
