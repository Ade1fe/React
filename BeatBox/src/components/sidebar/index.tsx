
import { VStack, Text, useDisclosure, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Image, Box, Divider } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { playbtn } from '../../assets';

const Sidebar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      {/* Sidebar for larger screens */}
      <VStack
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        h="100vh"
        w="250px"
        bg="#040404"
        color="white"
        boxShadow="2xl"
        overflowX="hidden"
        overflowY="auto"
        zIndex="9999"
        transition="width 0.3s ease"
        display={{ base: 'none', md: 'block' }}
        fontFamily='Kanit, sans-serif'
      >
        <Box display='grid' gap='3' pt="6" px="4">
          <Box display="flex" alignItems='center' gap='3' mb={4}>
            <Image src={playbtn} boxSize={[6,7,8,9]} />
            <Text className='slide-in-right' fontFamily='Kode Mono, monospace' fontWeight='700' fontSize={['lg', 'x-large', 'xx-large']}>
              BeatBox
            </Text>
          </Box>
          <Text fontSize="lg">Menu</Text>
          <hr className='hr'/>
          <Text fontSize="lg">Artist</Text>
          <Text fontSize="lg">Albums</Text>
          <Text fontSize="lg">Songs</Text>
          <Text fontSize="lg">Settings</Text>
        </Box>

        <Box display='grid' gap='3' pt="6" px="4" mt={14}>
          <Text fontSize="lg">Help</Text>
          <hr className='hr'/>
          <Text fontSize="lg">Artist</Text>
          <Text fontSize="lg">Albums</Text>
          <Text fontSize="lg">Songs</Text>
          <Text fontSize="lg">Settings</Text>
        </Box>
      </VStack>

      {/* Drawer for small screens */}
      <Box display="flex" justifyContent='space-between'>
        <Box display={{ base: 'flex', md: 'none' }} alignItems='center' gap='3' mb={4}>
          <Image src={playbtn} boxSize={[6,7,8,9]} />
          <Text className='slide-in-right' fontFamily='Kode Mono, monospace' fontWeight='700' fontSize={['lg', 'x-large', 'xx-large']}>
            BeatBox
          </Text>
        </Box>
        <Icon as={FiMenu} 
          onClick={onToggle}
          display={{ base: 'block', md: 'none' }}
          aria-label="Toggle Sidebar"
          boxSize={[7,8,9,10]}
        />
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#040404" color='white' zIndex={2}>
          <DrawerBody>
            <DrawerCloseButton pos={'absolute'} right={4} top={4} />
            <Box display='grid' gap='3' pt="6" px="4">
              <Box display="flex" alignItems='center' gap='3' mb={4}>
                <Image src={playbtn} boxSize={[6,7,8,9]} />
                <Text className='slide-in-right' fontFamily='Kode Mono, monospace' fontWeight='700' fontSize={['lg', 'x-large', 'xx-large']}>
                  BeatBox
                </Text>
              </Box>
              <Text fontSize="lg">Menu</Text>
              <hr className='hr'/>
              <Text fontSize="lg">Dashboard</Text>
              <Text fontSize="lg">Projects</Text>
              <Text fontSize="lg">Teams</Text>
              <Text fontSize="lg">Settings</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;