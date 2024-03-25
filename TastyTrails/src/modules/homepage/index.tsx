import { Box, Text } from '@chakra-ui/react';
import { Footer, HeroOne, InfoComp, Navbar, NewsLetter, PopularMenu, Services } from '../../components';

const Homepage = () => (
  <Box className="subtitle">
    <Box px="20px"><Navbar /></Box>
    <Box px="20px"><HeroOne /></Box>
    <Box><InfoComp /></Box>
    <Box px="20px" mt={['6rem']}>
      <Text textAlign='center' fontSize={['sm', 'md']} color='orange.400'>Product</Text>
      <Text textAlign='center' fontSize={['md', 'lg', 'x-large']} fontWeight='600'>Most Popular Items</Text>
      <PopularMenu />
    </Box>
    <Box px="20px"><Services /></Box>
    <Box className="" bg='black'><NewsLetter /></Box>
    <div className=""> <Footer /> </div>
    {/* Homepage */}
  </Box>
);

export default Homepage;
