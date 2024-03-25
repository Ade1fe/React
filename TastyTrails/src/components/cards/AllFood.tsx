import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface AllFoodProps {
  imageUrl: string;
  name: string;
}

const AllFood: React.FC<AllFoodProps> = ({ imageUrl, name }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Box mr="4" boxSize='100px'>
        <Image src={imageUrl} alt="food" />
      </Box>
      <Box flex="1">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {name}
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, modi?
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        <Button onClick={handleDecrement} size="sm" bg='red.300' p='4px' mr="2">
          -
        </Button>
        <Text>{quantity}</Text>
        <Button onClick={handleIncrement} size="sm" ml="2" bg='red.300' p='4px'>
          +
        </Button>
      </Box>
      <Button ml="4">Add</Button>
    </Box>
  );
};

export default AllFood;
