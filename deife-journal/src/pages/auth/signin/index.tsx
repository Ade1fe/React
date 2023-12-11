import { Box, Image, Text, useColorMode } from '@chakra-ui/react';
import { blackPic, whitePic } from '../../../assets';


const SignIn = () => {

    const { colorMode, toggleColorMode } = useColorMode();

  const imageSource = colorMode === 'light' ? blackPic : whitePic ;


  return (
    <Box>
     <Image src={imageSource} w="100px" />
    </Box>
  )
}

export default SignIn
