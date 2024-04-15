import { Box, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Greetings } from "../../components";

interface LayoutCompProps {
    children?: React.ReactNode;
    desc?: string;
  }
  

const LayoutComp: React.FC<LayoutCompProps> = ({ children,desc}) => {


  return (
    <Box color='black' className='texts' mx='auto' maxW={'1340px'} px='20px' >
      <Greetings />
      <Text className=""  mb='1rem'>{desc} </Text>

      <Box className=""> {children} </Box>
      
      <Box mt={['3rem', '4rem', '5rem', '4rem']} mb='1rem' textAlign="center">
                For more inquiries, reach out to us at {' '}
                <Link to="tel:+1234567890">+1234567890</Link>,{' '}
                <Link to="tel:+12234555">+12234555</Link>, and email at {' '}
                <Link to="mailto:info@gmail.com">info@gmail.com</Link>
            </Box>
    </Box>
  );
};




export default LayoutComp
