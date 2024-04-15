import { Box, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import { Hero } from '../components';


const LandingPage = () => {
  return (
    <Box color='black' mx='auto' maxW={'1340px'} px='20px'>
        <Navbar />
        <Hero />
      <Text> </Text>
    </Box>
  )
}

export default LandingPage
