import React from 'react';
import MangaSwiper from './../../components/Resueables/MangaSwiper';
import { Box, Text,useColorModeValue } from '@chakra-ui/react';

const AnimeFour: React.FC = () => {
  const mangaIds = [71, 72, 73, 74, 75, 76, 77, 78, 79, 91, 92, 93]; 
  const bgs = useColorModeValue('#fff', 'gray.800');

  return (
   <Box p={3}  bg={bgs} mt={['8' ,'12', '16']}>
    {/* <Text as='h1' borderBottom='2px' borderBottomColor='black' w='max-content'  mt='3' fontSize={['md', 'large', 'x-large']} fontWeight='bold'>Welcome Home <span>Johanna</span></Text> */}
    
    <Text fontSize={['md', 'large', 'x-large']} mb='3' fontWeight='semibold'>Full Moon Reads 🐺🌕 </Text>
     <MangaSwiper mangaIds={mangaIds} />

     
   </Box>
  );
};


export default AnimeFour
