import React from 'react';
import MangaSwiper from './../../components/Resueables/MangaSwiper';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const AnimeFive: React.FC = () => {
    const mangaIds = [94, 95, 96, 97, 107, 108, 109, 110, 111, 112, 104, 106]; 
    const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  return (
   <Box p={3}  mt={['8' ,'12', '12']} bg={bgs}>
    
    <Text fontSize={['md', 'large', 'x-large']} mb='1' mt={['3']} fontWeight='semibold'>Editor's Picks</Text>
    <Text fontSize={['sm','md']} mb='3' fontWeight='medium'> Deife-Books HQ's handpicked favorites</Text>
     <MangaSwiper mangaIds={mangaIds} />

     
   </Box>
  );
};


export default AnimeFive
