import { Box, Text, Image } from "@chakra-ui/react";
import { busImg, forkImg, spoonImg } from "../assets";

const Services = () => {
  return (
    <Box mt={['6rem']} maxWidth='1340px' mx='auto' textAlign='center'>
      <Text textAlign='center' fontSize={['sm', 'md']} color='orange.400'>Services</Text>
      <Text fontSize={['md','lg','xl']} fontWeight='600' className='subtitle'>Why Choose Our Favorite Food</Text>
      
      <Box display="grid" gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr']} gap='10' mt='2rem'>
        <Box p='10' shadow='base' h='300px' display='flex' flexDir='column' alignItems='center' justifyContent='center' gap='6' borderRadius='20px'> 
          <Image src={forkImg} boxSize='70px' bg='orange.200' p='4' borderRadius='50%' mx='auto' />
          <Text mb='0px'>Quality Food</Text>
          <Text mb='0px'>Experience exquisite flavors and freshness. Elevate your dining with us!</Text>
           </Box>

        <Box p='10' shadow='2xl' h='300px' display='flex' flexDir='column' alignItems='center' justifyContent='center' gap='6' borderRadius='20px'> 
          <Image src={busImg} boxSize='70px' bg='orange.200' p='4' borderRadius='50%' mx='auto' />
          <Text mb='0px'>Fast Delivery</Text>
          <Text mb='0px'>Experience how we prioritize speed without compromising quality and reliability.</Text>
           </Box>

        <Box p='10' shadow='base' h='300px' display='flex' flexDir='column' alignItems='center' justifyContent='center' gap='6' borderRadius='20px'> 
          <Image src={spoonImg} boxSize='70px' bg='orange.200' p='4' borderRadius='50%' mx='auto' />
          <Text mb='0px'>Healthy Foods</Text>
          <Text mb='0px'>Savor nutritious delights, crafted with care for your well-being.</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
