import { Box ,Text} from "@chakra-ui/react";
import { FaDownload, FaBus } from "react-icons/fa";
import {RiSettings2Line} from "react-icons/ri";
import {BsCreditCard} from "react-icons/bs";
import React from "react";
import { useColorModeValue } from '@chakra-ui/react';


interface IconAndTextProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconAndText: React.FC<IconAndTextProps> = ({ icon, title, description }) => {
  const col = useColorModeValue('#40916c', 'gray.600');
  const colo = useColorModeValue('#fff', '#fff');


  return (
    <Box p='3' shadow='md'>
      <Box display="flex" gap="3" alignItems="center">
       <Box bg={col} p='2' borderRadius='3'> {icon}</Box>
        <Text fontSize={["sm","md"]} color={colo} fontWeight='semibold'>{title}</Text>
      </Box>
      <Text fontSize='sm' color={colo}>{description}</Text>
    </Box>
  );
};

export const IconAndTexts: React.FC = () => {
  
  const bg = useColorModeValue('#386641', 'gray.700');
 
  // const color = useColorModeValue('white', 'white');
  
  return (
    <Box display="grid"  color='white' px='3' mx='auto'  py='5' mt={['16', '14', '12']} 
    bg={bg} alignItems='center' gap={3}  gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
      
      <IconAndText
        icon={<FaBus />}
        title="Quick Delivery"
        description="Get your items delivered fast and efficiently."
      />
      
      <IconAndText
        icon={<FaDownload />}
        title="Easy Download"
        description="Simplify your downloads with ease."
      />
   
        <IconAndText
        icon={<RiSettings2Line />}
        title="Best Quality"
        description=" Experience quality and performance."
      />

        <IconAndText
        icon={<BsCreditCard />}
        title="Secured Payment"
        description=" Ensure your payments are safe and secure."
      />
    </Box>
  );
};

export default IconAndTexts;
