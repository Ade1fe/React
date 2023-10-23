



import React from 'react';
import { BookDetail } from '../../components/Resueables/useBookDetails';
import {
  Box,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface BookDetailComponentProps {
  bookData: BookDetail | null;
  bookKey: string;
}

const BookDetailComponent: React.FC<BookDetailComponentProps> = ({
  bookData,
}) => {
  const bg = useColorModeValue('#ddd', 'gray.900');
  const backg = useColorModeValue('gray.50', 'gray.700');
  const col = useColorModeValue('#40916c', 'gray.300');

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <Box as="section" mt='4'>
      {/* <h1>Book Detail</h1> */}

      <Box>
        <Text fontSize="lg" fontWeight="bold" color={col}>
          Covers:
        </Text>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap="5"
          py={['5', '8', '12']} px='4'
          bg={backg}
        >
          {bookData.covers?.map((imageID, index) => (
            <Box w={['60%', '230px', '250px']} borderRadius='xl' shadow='md' overflow='hidden' key={index}>
              <Image
                w="100%"
                bg={bg}
                h={['250px', '300px', '350px']}
                key={index}
                src={`https://covers.openlibrary.org/b/id/${imageID}-M.jpg`}
                alt={`Cover ${imageID}`}
              />
            </Box>
          )) || 'N/A'}
        </Box>
      </Box>

      <Text fontSize="lg" fontWeight="bold" shadow='md' my='2' p={4} color={col}>
        Author:
      </Text>
      <Text fontSize={[ 'sm', 'md']}>
        {bookData.authors?.length > 0
          ? bookData.authors.map((author) => author.name).join(', ')
          : 'Unknown'}
      </Text>

      <Box shadow='md' my='2' p={4}>
      <Text fontSize="lg" fontWeight="bold" color={col}>
        Description:
      </Text>
      <Text fontSize={[ 'sm', 'md']}>
        {bookData.description?.value || 'N/A'}
      </Text>
      </Box>

      <Box display='flex' justifyContent='' alignItems='center' gap='4' flexWrap='wrap'  shadow='md' my='2' p={4}>
      <Box display='flex' flexWrap='wrap' gap='3' alignItems='center'> 
      <Text fontSize="lg" fontWeight="bold" color={col}>
        Created:
      </Text>
      <Text fontSize={[ 'sm', 'md']}>
        {bookData.created?.value || 'N/A'}
      </Text>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='3' alignItems='center'>
      <Text fontSize="lg" fontWeight="bold" color={col}>
        Last Modified:
      </Text>
      <Text fontSize={[ 'sm', 'md']}>
        {bookData.last_modified?.value || 'N/A'}
      </Text>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='3' alignItems='center'>
      <Text fontSize="lg" fontWeight="bold" color={col}>
        Revision:
      </Text>
    
      <Text fontSize={[ 'sm', 'md']}>
        {bookData.revision || 'N/A'}
      </Text>
      </Box>
      </Box>
    
     
<Box  shadow='md' my='2' p={4}> 
<Text fontSize="lg" fontWeight="bold" color={col}>
        Subject Places:
      </Text>
      <Text fontSize={[ 'sm', 'md']}>
        {bookData.subject_places?.join(', ') || 'N/A'}
      </Text>
</Box>
     

      <Box  shadow='md' my='2' p={4}> 
      <Text fontSize="lg" fontWeight="bold" color={col}>
        Subjects:
      </Text>
      <Text fontSize={[ 'sm', 'md']}>
        {bookData.subjects?.join(', ') || 'N/A'}
      </Text>
      </Box>
  
    </Box>
  );
};

export default BookDetailComponent;

