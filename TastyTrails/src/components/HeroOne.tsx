import { Box, Image, Text, Link as ChakraLink, } from '@chakra-ui/react';
import { Abstractimg, bikemanimg, herocardsimg, playbtnimg } from '../assets';
import { Link as ReactRouterLink } from 'react-router-dom';

const HeroOne = () => {
  return (
    <Box className='text-fonts'   fontFamily='300' my={['20px']} display={['block', 'block', 'block', 'flex']} justifyContent='space-between' maxWidth='1340px' mx='auto' gap={['20px']} mt={['3rem']}>
      <Box w={["full", 'full', 'full', "470px"]} mb={['2rem', '3rem', '4rem', '0']}>
        <Image src={bikemanimg} w={['200px']} mb={['20px', '30px', '40px']} />
        <Text className='subtitle' lineHeight={['normal', '38px', '50px', '65px', '70px']} mb={['20px', '30px', '40px']} fontSize={['x-large', 'xx-large', 'xxx-large', '60px']}>
          The Fastest Delivery In <Text as='span' color='orange.400'>Your City</Text>
        </Text>
        <Text fontSize={["md", "lg",]}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis facilis vel iste illo aperiam, nostrum aut repellendus consequuntur quasi?</Text>
       <Box display="flex" gap='2' mt={['20px', '30px', '40px']} alignItems='center'>
       <ChakraLink as={ReactRouterLink} to="/menu-page"  bg='orange.400' _hover={{ shadow: "base", bg: "orange.700" }} borderRadius='5px' px='4' pt='3' pb='2' color='white'>Order Now</ChakraLink>
        <ChakraLink display="flex" gap='3' p='0' alignItems='center' as={ReactRouterLink} to="/cocktails"  bg='white' ml={['0px', '30px']} _hover={{ color: "orange.400" }} borderRadius='5px'> <Image src={playbtnimg} boxSize={['60px']} /> Order Process</ChakraLink>
       </Box>
      </Box>

      <Box maxWidth="200px" maxHeight='200px' display={['none', 'none', 'none', 'none', 'block']} mt='auto' mb='auto'>
        <Image src={Abstractimg} />
      </Box>

      <Box w={["full", '85%', '80%', '90%', "500px"]} mx={['auto', 'auto', 'auto', 'auto', '0']}>
        <Image w='full' h='full' objectFit={['contain', 'contain', 'contain', 'contain', 'cover']} src={herocardsimg} />
      </Box>
    </Box>
  );
};

export default HeroOne;
