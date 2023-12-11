import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Image, Text, useColorMode } from '@chakra-ui/react';
import { blackPic, whitePic } from '../../../assets';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const imageSource = colorMode === 'light' ? blackPic : whitePic ;

  return (
    <Box>
      <Image src={imageSource} w="100px" />

      <Text display="flex" cursor="pointer" onClick={toggleColorMode} ml={4} size="sm">
        {colorMode === 'light' ? (
          <>
            <SunIcon />
            <Text ml={2}>Dark</Text>
          </>
        ) : (
          <>
            <MoonIcon />
            <Text ml={2}>Light</Text>
          </>
        )}
      </Text>
    </Box>
  );
};

export default Navbar;
