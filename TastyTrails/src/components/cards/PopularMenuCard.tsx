import { Box, Button, Icon, Image, Text, BoxProps } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PopularMenuCardProps extends BoxProps {
  imageSrc: string;
  title: string;
  rating: number;
  price: number;
}

const PopularMenuCard: React.FC<PopularMenuCardProps> = ({ imageSrc, title, rating, price, ...rest }) => {
  const navigate = useNavigate()
  return (
    <Box borderRadius='20px' mb='10px' overflow='hidden'  shadow='md' transition="transform 0.2s ease-in-out" _hover={{ transform: "scale(0.9)" }} {...rest} w='350px'>
      <Box >
        <Image w='full' h='250px' objectFit='cover' src={imageSrc} alt="Image description" />
      </Box>
     
      <Box display="grid" px='3' py={6} gridTemplateColumns={['1fr 1fr']} gap={2}>
        <Text fontWeight='600' fontSize={['md', 'lg']} noOfLines={1}>{title}</Text>
        <Text fontWeight='300' textAlign='right'  fontSize={['sm', 'sm']}><Icon as={FaStar} color='orange.400' /> {rating} </Text>
        <Button bg='orange.400' color='white' w='120px' px='4' py='2' borderRadius='4px' size='sm' onClick={()=>{navigate("/menu-page")}}>Add to cart</Button>
        <Text fontWeight='300' textAlign='right' fontSize={['sm', 'sm']}> ${price} </Text>
      </Box>
    </Box>
  );
};

export default PopularMenuCard;
