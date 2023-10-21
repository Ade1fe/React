import { Box, Button, Text } from "@chakra-ui/react"
import { FaArrowAltCircleRight } from "react-icons/fa"

const HeroText = () => {
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

      <Button rightIcon={<FaArrowAltCircleRight />}  fontWeight='bold' color='white' background='gray.600'   colorScheme='gray.600' variant='outline' size='sm' mt="3"
      _hover={{ color: 'green.100' , background: 'gray.200' ,
     }}
      >
    Get Started
  </Button>
    </Box>
  )
}

export default HeroText
