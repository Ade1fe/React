

import React from 'react';
import { VStack, Text, Image, Box, Flex, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { FaHome, FaProjectDiagram, FaUsers, FaCog, FaSearch } from 'react-icons/fa';
import { playbtn } from '../../assets';
import { Link } from 'react-router-dom'; // Import Link for navigation

interface SidebarProps {
  onItemClick: (item: string) => void;
}

const SidebarComp: React.FC<SidebarProps> = () => {

  return (
    <>
      {/* Sidebar for larger screens */}
      <VStack
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        h="100vh"
        w="270px"
        bg="#040404"
        color="white"
        boxShadow="2xl"
        overflowX="hidden"
        overflowY="auto"
        zIndex="9999"
        transition="width 0.3s ease"
        display={{ base: 'none', md: 'flex' }}
        flexDirection='column'
        justifyContent='space-between'
        fontFamily='Kanit, sans-serif'
        className='text-body'
        cursor='pointer'
      >
        <Box display='grid' gap='3' pt="6" px={["4", '6', '8']} w='full'>
          <Box display="flex" alignItems='center' gap='3' mb={4}>
            <Image src={playbtn} boxSize={[6,7,8,9]} />
            <Text className='slide-in-right' fontFamily='Kode Mono, monospace' fontWeight='700' fontSize={['lg', 'x-large', 'xx-large']}>
              BeatBox
            </Text>
          </Box>
          <Text  fontSize="lg">Menu</Text>
          <hr className='hr'/>
          <ChakraLink as={Link} to="/dashboard/artist" fontSize="lg">Artist</ChakraLink>
          <ChakraLink as={Link} to="/dashboard/albums" fontSize="lg">Albums</ChakraLink>
          <ChakraLink as={Link} to="/dashboard/songs" fontSize="lg">Songs</ChakraLink>
          <ChakraLink as={Link} to="/dashboard/live-chat" fontSize="lg">Live Chat</ChakraLink>

          <Box display='grid' gap='3' pt="6"  mt={8} w='full'>
            <Text fontSize="lg">Help</Text>
            <hr className='hr'/>
            <ChakraLink as={Link} to="/faqs" fontSize="lg">FAQs</ChakraLink>
            <ChakraLink as={Link} to="/settings" fontSize="lg">Settings</ChakraLink>
          </Box>
        </Box>

        <Box display='grid' gap='3' pt="6" px="4" mt={14} w='full' py='4'>
          <Text fontSize="sm" color='gray.400' textAlign='center' textDecoration='underline'>version 1.1</Text>
          <Box display="flex" alignItems="center" gap='3'> 
            <Image src={playbtn} boxSize={[10,12,14]} borderRadius='50%' border='2px' borderWidth='4px' borderColor='purple.600' />
            <Text fontSize="lg" noOfLines={1}>Johana</Text>
          </Box>
        </Box>
      </VStack>

      {/* Drawer for small screens */}
      {/* <Box display="flex" justifyContent='space-between' alignItems='center' py={[5]} px={[4,6,8,10]}> */}
      <Box display={{ base: 'flex', md: 'none' }} py={[5]} px={[4,6,8,10]} alignItems='center' gap='3' >
        <Text className='slide-in-right' display='flex' alignItems='center' gap='3' fontFamily='Kode Mono, monospace' fontWeight='700' fontSize={['lg', 'x-large', 'xx-large']}>
          Welcome <Text as='span' noOfLines={1}> Johanna Adams</Text>
        </Text>
      </Box>
      {/* </Box> */}


      <Flex 
       pos="fixed" zIndex='9999'
        bottom="2px"   w='full' 
        left="0">
       <Box  w='full'  mx='auto'   bg="#040404"  shadow='base'  display={{ base: 'flex', md: 'none' }} py='4' justifyContent='space-evenly' gap='4'>
       <Icon aria-label="Dashboard" as={FaHome} boxSize={[6,7,8]} />
        <Icon aria-label="Search" as={FaSearch}  boxSize={[6,7,8]}  />
        <Icon aria-label="Projects" as={FaProjectDiagram} boxSize={[6,7,8]}  />
        <Icon aria-label="Teams"  as={FaUsers}  boxSize={[6,7,8]} />
        <Icon aria-label="Settings" as={FaCog}  boxSize={[6,7,8]}  />
       </Box>
       
      </Flex>
    </>
  );
};

export default SidebarComp;
