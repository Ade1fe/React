import  { useState } from 'react';
import { useBookFetcher } from '../Resueables/BookFetcher'; 
import BookList from '../Resueables/BookList'; 
import { Box, Text,useColorModeValue } from '@chakra-ui/react';

function BookFive() {
  const [searchQuery] = useState('tiffany'); 
  const { data, loading, error } = useBookFetcher(searchQuery);
  const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  return (
    <Box   p={3}  mt={['8' ,'12', '12']} bg={bgs}>
   <Text fontSize={['md', 'large', 'x-large']} mb='1' mt={['3']} fontWeight='semibold'>Editor's Picks</Text>
    <Text fontSize={['sm','md']} mb='3' fontWeight='medium'> Deife-Books HQ's handpicked favorites</Text>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <BookList books={data} />
      )}
    </Box>
  );
}


export default BookFive
