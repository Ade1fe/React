import  { useState } from 'react';
import { useBookFetcher } from '../Resueables/BookFetcher'; 
import BookList from '../Resueables/BookList'; 
import { Box, Text ,} from '@chakra-ui/react';

function BookThree() {
  const [searchQuery] = useState('matthew'); 
  const { data, loading, error } = useBookFetcher(searchQuery);

  return (
    <Box   p={3} mt='0'>
         <Text fontSize={['md', 'large', 'x-large']} mb='4' mt={['3']} fontWeight='semibold'>New & Hot</Text>
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

export default BookThree
