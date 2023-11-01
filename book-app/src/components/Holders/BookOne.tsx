import  { useState } from 'react';
import { useBookFetcher } from '../Resueables/BookFetcher'; 
import BookList from '../Resueables/BookList'; 
import { Box, Text ,useColorModeValue} from '@chakra-ui/react';

function BookOne() {
  const [searchQuery] = useState('smith'); 
  const { data, loading, error } = useBookFetcher(searchQuery);
  const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  return (
    <Box  p={3} mt='4' bg={bgs}>
       <Text as='h1' borderBottom='2px' borderBottomColor='black' w='max-content' mb={['8' ,'12', '16']} mt='3' fontSize={['md', 'large', 'x-large']} fontWeight='bold'>Welcome Home <span>Johanna</span></Text>

    <Text fontSize={['md', 'large', 'x-large']} mb='3' fontWeight='semibold'>Top Picks For You </Text>

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

export default BookOne;
