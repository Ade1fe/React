import { Box, Button, Text } from "@chakra-ui/react"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { useColorModeValue } from '@chakra-ui/react';


const HeroText = () => {
  const bg = useColorModeValue('#386641', 'gray.600');
  const hovers = useColorModeValue('#b7e4c7', 'gray.200');
  const colorss = useColorModeValue('#fff', '#fff');
  

  return (
    <Box px="5">
      <Text as="h1" fontSize={["lg", "x-large", "xx-large"]} fontWeight="bold" textTransform="capitalize">
        Exploring the universe's literacy is a cosmic adventure.
      </Text>

      <Text as="p" fontSize={["sm", "sm", "md"]} fontWeight="bold" mt="1">
         Discover<Box as="span" color="green.200" px="2">|</Box>
        Share  <Box as="span" color="green.200"  px="2">|</Box>
        Discuss
      </Text>

      <Button rightIcon={<FaArrowAltCircleRight />}  fontWeight='bold'  color={colorss} background={bg}  
       colorScheme={hovers} variant='outline' size='sm' mt="3"
      _hover={{background: hovers , color: 'black'
     }}
      >
    Get Started
  </Button>
    </Box>
  )
}

export default HeroText
