import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from "react";

type Quote = {
  text: string;
  a: string; // Author
  c: string; // Character count
  q: string;
};

const DiaQuotes = () => {
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

  const first5Quotes = groupedQuotes.slice(0, 3);

  return (
   <Box>
   <Text fontSize={['16px','17px','18px']} fontWeight={'bold'}> October 2023</Text>

    <Box>
      {first5Quotes.map((group, groupIndex) => (
        <Box key={groupIndex} border="2px solid" w='fit-content' p={2} my={2} borderRadius={'10px'}>
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
