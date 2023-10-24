import React from 'react';
import MangaSwiper from './../../components/Resueables/MangaSwiper';
import { Box, Text,useColorModeValue } from '@chakra-ui/react';

const AnimeOne: React.FC = () => {
  const mangaIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
  const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  return (
   <Box p={3} mt='4' bg={bgs}>
    <Text as='h1' borderBottom='2px' borderBottomColor='black' w='max-content' mb={['8' ,'12', '16']} mt='3' fontSize={['md', 'large', 'x-large']} fontWeight='bold'>Welcome Home <span>Johanna</span></Text>
    
    <Text fontSize={['md', 'large', 'x-large']} mb='3' fontWeight='semibold'>Top Picks For You </Text>
     <MangaSwiper mangaIds={mangaIds} />

     
   </Box>
  );
};

export default AnimeOne
