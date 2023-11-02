import { Box, Text } from "@chakra-ui/react";
import axios from 'axios';
import { useEffect, useState } from "react";

type Quote = {
  text: string;
};

const DiaQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]); 

  const fetchData = async () => {
    try {
      const response = await axios.get('https://zenquotes.io/api/quotes/');
      console.log("response: ",response)
      const data = response.data;
      console.log("data: ",data)
      setQuotes(data); 
      console.log("quotes after setting data: ", quotes); 
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      {quotes.map((quote, index) => (
        <Text key={index}>{quote.text}</Text>
      ))}
    </Box>
  );
}

export default DiaQuotes;
