import React from 'react';
import MangaSwiper from './../../components/Resueables/MangaSwiper';
import { Box, Text } from '@chakra-ui/react';

const AnimeTwo: React.FC = () => {
  const mangaIds = [22, 24, 25, 26, 65, 66, 27, 28, 29, 30, 31, 32]; 

  return (
   <Box p={3}mt={['8' ,'12', '16']} >
    {/* <Text as='h1' borderBottom='2px' borderBottomColor='black' w='max-content' mb={['8' ,'12', '16']} mt='3' fontSize={['md', 'large', 'x-large']} fontWeight='bold'>Welcome Home <span>Johanna</span></Text> */}
    
    <Text fontSize={['md', 'large', 'x-large']} mb='4' mt='9' fontWeight='semibold'>Deeife-Books Originals For Kiralola09 </Text>
     <MangaSwiper mangaIds={mangaIds} />

     
   </Box>
  );
};


export default AnimeTwo
