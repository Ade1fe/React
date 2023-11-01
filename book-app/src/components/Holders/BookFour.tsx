import  { useState } from 'react';
import { useBookFetcher } from '../Resueables/BookFetcher'; 
import BookList from '../Resueables/BookList'; 
import { Box, Text,useColorModeValue } from '@chakra-ui/react';

function BookFour() {
  const [searchQuery] = useState('prince'); 
  const { data, loading, error } = useBookFetcher(searchQuery);
  const bgs = useColorModeValue('#fff', 'gray.800');

  return (
    <Box   p={3}  bg={bgs} mt={['8' ,'12', '16']}>
         <Text fontSize={['md', 'large', 'x-large']} mb='3' fontWeight='semibold'>Full Moon Reads 🐺🌕 </Text>
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


export default BookFour
