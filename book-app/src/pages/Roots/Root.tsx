
// import { Box } from "@chakra-ui/react";
import { BookApp,  HeroCheck,  IconAndTexts, Mainlayout,  } from "../../assets";
import Hero from "../../components/Holders/Hero";

const Root = () => {
  return (
    <Mainlayout>
      
      
      <Hero />
     <IconAndTexts />
  
     <BookApp />
      <HeroCheck />
    </Mainlayout>
  );
};

export default Root;
