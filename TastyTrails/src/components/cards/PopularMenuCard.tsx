import { Box, Button, Icon, Image, Text, BoxProps } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface PopularMenuCardProps extends BoxProps {
  imageSrc: string;
  title: string;
  rating: number;
  price: number;
}

const PopularMenuCard: React.FC<PopularMenuCardProps> = ({ imageSrc, title, rating, price, ...rest }) => {
  return (
    <Box borderRadius='20px' overflow='hidden'  shadow='md' transition="transform 0.2s ease-in-out" _hover={{ transform: "scale(1.05)" }} {...rest}>
      <Box >
        <Image w='full' h='full' objectFit='cover' src={imageSrc} alt="Image description" />
      </Box>
     
      <Box display="grid" px='3' py={6} gridTemplateColumns={['1fr 1fr']} gap={2}>
        <Text fontWeight='600' fontSize={['md', 'lg']} noOfLines={1}>{title}</Text>
        <Text fontWeight='300' textAlign='right' fontSize={['sm', 'sm']}><Icon as={FaStar} /> {rating} </Text>
        <Button bg='orange.400' color='white' w='100px' px='3' py='2' borderRadius='4px' size='sm'>Add to cart</Button>
        <Text fontWeight='300' textAlign='right' fontSize={['sm', 'sm']}> ${price} </Text>
      </Box>
    </Box>
  );
};

export default PopularMenuCard;
