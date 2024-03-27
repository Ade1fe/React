// import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button,Image,Box,Text } from '@chakra-ui/react';
// import React, { useState } from 'react';

// const CartCard: React.FC<{
//   id: string;
//   imageUrl: string;
//   name: string;
//   quantity: number;
//   price: number;
//   subtotal: number;
//   scrollbarWidth?: string;
//   scrollbarTrackColor?: string;
//   scrollbarThumbColor?: string;
// }> = ({ id, imageUrl, name, price,subtotal, scrollbarWidth = '2px', scrollbarTrackColor = '#fff', scrollbarThumbColor = '#fff' }) => {
//   const [quantity, setQuantity] = useState<number>(0);
//     console.log(id)
//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <Box className="">
//       <TableContainer
//         overflowX="auto"
//         pb='00px'
//         sx={{
//           '&::-webkit-scrollbar': { width: scrollbarWidth },
//           '&::-webkit-scrollbar-track': { background: scrollbarTrackColor },
//           '&::-webkit-scrollbar-thumb': { background: scrollbarThumbColor },
//           '&::-webkit-scrollbar-thumb:hover': { background: scrollbarThumbColor }
//         }}
//       >
//         <Table variant="striped" colorScheme="teal" size='md' width="100%" minW="xl">
//           <Thead>
//             <Tr textTransform='capitalize' textAlign='left'>
//               <Th fontSize={['md', 'lg']}></Th>
//               <Th fontSize={['md', 'lg']}>PRODUCT</Th>
//               <Th fontSize={['md', 'lg']}>PRICE</Th>
//               <Th fontSize={['md', 'lg']}>QUANTITY</Th>
//               <Th fontSize={['md', 'lg']}>SUBTOTAL</Th>
//             </Tr>
//           </Thead>
//           {/* Example data row */}
//           <Tbody>
//             <Tr>
//               <Td> <Image src={imageUrl} boxSize='100px' rounded='xl' overflow='hidden' objectFit='cover' /> </Td>
//               <Td>{name}</Td>
//               <Td>${price}</Td>
//               <Td>
//                 <Box display="flex" alignItems="center" mx='10px' my={['10px', '0', '10px', '0']} justifyContent={['center', 'flex-start', 'center', 'flex-start']}>
//                   <Button onClick={handleDecrement} fontSize="22px" shadow='base' rounded='md' px='8px' mr="2">
//                     -
//                   </Button>
//                   <Text>{quantity}</Text>
//                   <Button onClick={handleIncrement} fontSize="22px" ml="2" shadow='base' rounded='md' px='8px'>
//                     +
//                   </Button>
//                 </Box>
//               </Td>
//               <Td> {subtotal} </Td>
//             </Tr>
//             {/* You can add more rows here */}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default CartCard;






















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
  id,
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
