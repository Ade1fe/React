import  { useState } from 'react';
import { useBookFetcher } from '../Resueables/BookFetcher'; 
import BookList from '../Resueables/BookList'; 
import { Box, Text ,} from '@chakra-ui/react';

function BookTwo() {
  const [searchQuery] = useState('mary'); 
  const { data, loading, error } = useBookFetcher(searchQuery);

  return (
    <Box  p={3}mt={['8' ,'12', '16']}>
       <Text fontSize={['md', 'large', 'x-large']} mb='4' mt='9' fontWeight='semibold'>Deeife-Books Originals For Kiralola09 </Text>
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

export default BookTwo;
