import  { useState } from 'react';
import { useBookFetcher } from './BookFetcher';
import BookList from './BookList';
import { Box, Text } from '@chakra-ui/react';

function BookApp() {
  const [searchQuery] = useState('Grisham'); 
  const { data, loading, error } = useBookFetcher(searchQuery);

  return (
    <Box mt='10'>
      <Text as='h1' fontWeight='bold' px='4' mb='2' fontSize={['lg', 'xl', 'xx-large']}>Books By Grisham</Text>
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

export default BookApp;
