

import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface AllFoodProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

const AllFood: React.FC<AllFoodProps> = ({ id, imageUrl, name,price }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Here you can access the meal ID (id) and perform any action you need
    console.log("Meal ID:", id);
  };

  return (
    <Box
      display={["block", 'flex', 'block', 'flex']}
      borderTopWidth='1px'
      px='10px'
      borderTopColor='#f1f1f1'
      borderBottomWidth='1px'
      borderBottomColor='#f1f1f1'
      py='20px'
      textAlign={['center','left', 'center','left']}
      alignItems="center"
      cursor='pointer'
    >
      <Box mr="4" shadow='base' boxSize={['200px','100px','150px', '100px']} rounded='md' overflow='hidden'  mx={['auto', '0', 'auto', '0']} >
        <Image src={imageUrl} alt="food" />
      </Box>
      <Box flex="1" mx='10px' >
        <Text fontSize={['md','lg', "xl"]} fontWeight="bold" mb="1" noOfLines={1}>
          {name}
        </Text>
        <Text color='gray.400' fontSize={['sm','md', "lg"]} noOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, modi?
        </Text>
        <Text className="">$ {price} </Text>
      </Box>
      <Box display="flex" alignItems="center" mx='10px' my={['10px','0','10px','0']} justifyContent={['center','flex-start','center', 'flex-start']}>
        <Button onClick={handleDecrement} fontSize="22px" shadow='base' rounded='md' px='8px' mr="2">
          -
        </Button>
        <Text>{quantity}</Text>
        <Button onClick={handleIncrement} fontSize="22px" ml="2" shadow='base' rounded='md' px='8px'>
          +
        </Button>
      </Box>
      <Button onClick={handleAddToCart} mt={['10px', '0','10px','0']} px='15px' rounded='lg' py='5px' borderColor='orange.500' borderWidth='2px' textAlign={['center']} mx='auto'>Add</Button>
    </Box>
  );
};

export default AllFood;
