import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from "react";

type Quote = {
  text: string;
  a: string; // Author
  c: string; // Character count
  q: string;
};

const DiaQuotes = () => {
    const bgs = useColorModeValue('#f1f1f1', 'gray.700');
    const bg = useColorModeValue('#f2f2f2', 'gray.900');
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://zenquotes.io/api/quotes/');
      const data = response.data;
      setQuotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to split the quotes into groups of 3
  const chunkArray = (arr: Quote[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  // Split quotes into groups of 3
  const groupedQuotes = chunkArray(quotes, 4);

  const first5Quotes = groupedQuotes.slice(0, 6);

  return (
   <Box bg={bg} px={2} py={9} mt={[5,9,12]}>
   <Text fontSize={['16px','17px','18px']} fontWeight={'bold'}> October 2023</Text>

    <Box display={'grid'}  gridTemplateColumns={['1fr', '1fr 1fr']} gap={4}>
      {first5Quotes.map((group, groupIndex) => (
        <Box key={groupIndex} shadow={'sm'} bg={bgs} p={2}  borderRadius={'10px'}>
          {group.map((quote, index) => (
            <Text key={index} fontSize={['12px','13px','14px']}>{quote.q} {quote.a}</Text>
          ))}
        </Box>
      ))}
    </Box>


   </Box>
  );
}

export default DiaQuotes;
