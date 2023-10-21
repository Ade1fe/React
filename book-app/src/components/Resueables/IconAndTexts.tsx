import { Box ,Text} from "@chakra-ui/react";
import { FaDownload, FaBus } from "react-icons/fa";
import {RiSettings2Line} from "react-icons/ri";
import {BsCreditCard} from "react-icons/bs";
import React from "react";

interface IconAndTextProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconAndText: React.FC<IconAndTextProps> = ({ icon, title, description }) => {
  return (
    <Box>
      <Box display="flex" gap="3" alignItems="center">
       <Box bg='gray.600' p='2' borderRadius='3'> {icon}</Box>
        <Text fontSize={["sm","md"]} >{title}</Text>
      </Box>
      <Text fontSize='sm'>{description}</Text>
    </Box>
  );
};

export const IconAndTexts: React.FC = () => {
  return (
    <Box display="grid"  color='white' px='3' mx='auto'  py='5' mt='8' bg='gray.500' alignItems='center' gap={3}  gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
      
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
        description=" Experience top-notch quality and performance."
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
