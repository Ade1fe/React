

import React from 'react';
import { Box, Image, Button, Text, Td, Tr } from '@chakra-ui/react';

interface CartCardProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const CartCard: React.FC<CartCardProps> = ({

  imageUrl,
  name,
  price,
  quantity,
  subtotal,
  handleIncrement,
  handleDecrement
}) => {
  return (
    <Box>
      <Tr>
        <Td>
          <Image src={imageUrl} boxSize='100px' rounded='xl' overflow='hidden' objectFit='cover' />
        </Td>
        <Td>{name}</Td>
        <Td>${price}</Td>
        <Td>
          <Box display="flex" alignItems="center" mx='10px' my={['10px', '0', '10px', '0']} justifyContent={['center', 'flex-start', 'center', 'flex-start']}>
            <Button onClick={handleDecrement} fontSize="22px" shadow='base' rounded='md' px='8px' mr="2">
              -
            </Button>
            <Text>{quantity}</Text>
            <Button onClick={handleIncrement} fontSize="22px" ml="2" shadow='base' rounded='md' px='8px'>
              +
            </Button>
          </Box>
        </Td>
        <Td>{subtotal}</Td>
      </Tr>
    </Box>
  );
};

export default CartCard;
