
import { Box } from "@chakra-ui/react";
import { IconAndTexts, Navbar } from "../../assets";
import Hero from "../../components/Holders/Hero";

const Root = () => {
  return (
    <Box>
      <Navbar />
      
      <Hero />
     <IconAndTexts />
      
    </Box>
  );
};

export default Root;
