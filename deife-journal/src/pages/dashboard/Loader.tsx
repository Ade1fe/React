import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "../../css/loader.css";
import { Box,Text } from "@chakra-ui/react";

const Loader = () => {
  const [, setIsLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard"); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
   <Box display='flex' flexDirection='column' h='100vh' justifyContent='center' alignItems='center' overflow='hidden'>
     <div className="book">
      <div className="book__pg-shadow"></div>
      <div className="book__pg"></div>
      <div className="book__pg book__pg--2"></div>
      <div className="book__pg book__pg--3"></div>
      <div className="book__pg book__pg--4"></div>
      <div className="book__pg book__pg--5"></div>
    </div>
    <Text mt={['20px','30px','40px']} fontWeight='700' fontSize={['larger', "x-large", "xx-large"]} textShadow='3px 3px #BBADFF'
    >Deife's Journal</Text>
   </Box>
  );
};

export default Loader;
