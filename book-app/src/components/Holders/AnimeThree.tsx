import React from 'react';
import MangaSwiper from './../../components/Resueables/MangaSwiper';
import { Box, Text } from '@chakra-ui/react';

const AnimeThree: React.FC = () => {
  const mangaIds = [34, 34, 35, 36, 40, 53, 47, 48, 49, 50, 51, 52]; 

  return (
   <Box p={3} mt='0'>
    {/* <Text as='h1' borderBottom='2px' borderBottomColor='black' w='max-content' mb={['8' ,'12', '16']} mt='3' fontSize={['md', 'large', 'x-large']} fontWeight='bold'>Welcome Home <span>Johanna</span></Text> */}
    
    <Text fontSize={['md', 'large', 'x-large']} mb='4' mt={['3']} fontWeight='semibold'>New & Hot</Text>
     <MangaSwiper mangaIds={mangaIds} />

     
   </Box>
  );
};



export default AnimeThree
