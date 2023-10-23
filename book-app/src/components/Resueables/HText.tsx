import { Box,  Text } from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/react';


const HText = () => {
  const bg = useColorModeValue('#386641', 'gray.400');
//   const hovers = useColorModeValue('#b7e4c7', 'gray.200');
//   const colorss = useColorModeValue('#fff', '#fff');
  

  return (
    <Box px="5">
      <Text as="h1" fontSize={["lg", "x-large", "xx-large"]} fontWeight="bold" textTransform="capitalize" color={bg}>
      Author's Palette: A World of Books Awaits!
      </Text>

      <Text as="p" fontSize={["sm", "sm", "md"]} fontWeight="bold" mt="1">
      Celebrate the diversity of literature as you embark on a journey through the written word, With a simple click, you can dive into a multitude of stories and voices from talented authors worldwide.
      </Text>

      <Text as="p" fontSize={["sm", "sm", "md"]} fontWeight="bold" mt="1">
      However, it's important to keep in mind that while this API offers a rich selection, it might not encompass every literary gem out there.
      </Text>


    
    </Box>
  )
}


export default HText
