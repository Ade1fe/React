import { Box, Text, Image } from "@chakra-ui/react"



const Services = () => {
  return (
    <Box mt={['6rem']} maxWidth='1340px' mx='auto' textAlign='center'>
        <Text textAlign='center' fontSize={['sm', 'md']} color='orange.400'>Services</Text>
        <Text  fontSize={['md','lg','x-large']} fontWeight='600'>Why Choose Our Favorite Food</Text>
      
      <Box display="flex" gap='10' mt='2rem'>
        <Box className=""  p='10' shadow='base' h='300px' display='flex' flexDir='column' alignItems='center' justifyContent='center' gap='6' borderRadius='20px'> 
            <Image   />
            <Text mb='0px'>Healthy Food</Text>
            <Text mb='0px'>
                But I must explain to you how all this mistaken
                idea of denouncing pleasur and prasising pain was bron.
            </Text>
        </Box>

        <Box className="" p='10' shadow='2xl' h='300px' display='flex' flexDir='column' alignItems='center' justifyContent='center' gap='6' borderRadius='20px'> 
            <Image   />
            <Text mb='0px'>Healthy Food</Text>
            <Text mb='0px'>
                But I must explain to you how all this mistaken
                idea of denouncing pleasur and prasising pain was bron.
            </Text>
        </Box>

        <Box className=""  p='10' shadow='base' h='300px' display='flex' flexDir='column' alignItems='center' justifyContent='center' gap='6' borderRadius='20px'> 
            <Image   />
            <Text mb='0px'>Healthy Food</Text>
            <Text mb='0px'>
                But I must explain to you how all this mistaken
                idea of denouncing pleasur and prasising pain was bron.
            </Text>
        </Box>

      </Box>

    </Box>
  )
}

export default Services
