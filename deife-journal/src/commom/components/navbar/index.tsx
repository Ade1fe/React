import { Box, Image, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';
import { blackPic, avatarIcon } from '../../../assets';

interface NavbarProps {
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen }) => {
  return (
    <Box
      ml={isSidebarOpen ? '0' : { base: '3.5rem', md: '0' }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      pr={[ '10px','20px', '30px', "40px"]}
    >
      <Box  flex='1' >
      <Image src={blackPic} w={['80px', '90px', '100px']} />
      </Box>
     

      <Box  display='flex'
      alignItems='center'
      justifyContent='space-between'
      flex='2'
      gap={[1,4,7]}
      >
      <InputGroup >
        <Input variant='flushed' _active={{outline: "purple.500"} }  _focus={{ borderBottomColor:'purple.500', outline: "0" }}
        placeholder='Search' borderBottomWidth='2px' borderBottomColor='purple.500' />
        <InputRightElement bg='purple.500' children={<SearchIcon color='purple.300' />} />
      </InputGroup>

      <BellIcon boxSize={6} />

      <Image src={avatarIcon} w='40px' borderRadius='50%' />
      </Box>

     
    </Box>
  );
};

export default Navbar;
