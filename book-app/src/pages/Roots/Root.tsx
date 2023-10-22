
import { Box } from "@chakra-ui/react";
import { BookApp,  IconAndTexts, Navbar } from "../../assets";
import Hero from "../../components/Holders/Hero";

const Root = () => {
  return (
    <Box>
      <Navbar />
      
      <Hero />
     <IconAndTexts />
  
     <BookApp />
      
    </Box>
  );
};

export default Root;
