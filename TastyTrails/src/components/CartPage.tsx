

import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Table, Tbody, Td, Th, Thead, Tr, Image, TableContainer, GridItem } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Footer, Navbar } from '.';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  mealId: string;
  mealImage: string; 
}

const CartPage: React.FC = () => {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const user = getAuth().currentUser;
  const userId = user ? user.uid : null; 
   const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
 

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const firestoreInstance = getFirestore();
        const cartItemsRef = collection(firestoreInstance, 'cartItems');
        const cartItemQuery = query(
          cartItemsRef,
          where('userId', '==', userId)
        );
        const cartItemSnapshot = await getDocs(cartItemQuery);
        const items: CartItem[] = [];
        const promises: Promise<void>[] = []; // Array to store promises
    
        cartItemSnapshot.forEach(doc => {
          const data = doc.data() as CartItem;
          const promise = fetchMealImage(data.mealId).then(mealImage => {
            items.push({
              id: doc.id,
              name: data.name,
              price: data.price,
              quantity: data.quantity,
              mealId: data.mealId,
              mealImage: mealImage
            });
            quantities[doc.id] = data.quantity;
          }).catch(error => {
            console.error('Error fetching meal image:', error);
            // Handle error
          });
          promises.push(promise);
        });
    
        // Wait for all promises to resolve
        await Promise.all(promises);
    
        setCartItems(items);
        setQuantities(quantities);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    

    fetchCartItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const fetchMealImage = async (mealId: string) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();

      console.log(data, "data")

      if (data.meals && data.meals[0] && data.meals[0].strMealThumb) {
        return data.meals[0].strMealThumb;
      } else {
        return 'URL_to_a_default_image_if_no_image_available'; // Provide a default image URL
      }
    } catch (error) {
      console.error('Error fetching meal image:', error);
      return 'URL_to_a_default_image_on_error'; // Provide a default image URL
    }
  };

  useEffect(() => {
    // Calculate subtotal
    const subtotalValue = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setSubtotal(subtotalValue);

    // Calculate tax (let's assume tax is 10% of subtotal)
    const taxValue = subtotalValue * 0.1;
    setTax(taxValue);

    // Calculate total
    const totalValue = subtotalValue + taxValue;
    setTotal(totalValue);
  }, [cartItems]);

  const handleIncrement = (itemId: string) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (itemId: string) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <Box px='4'> 
    <Navbar />
    <Box display={['block', 'block', 'flex']} alignItems='flex-start' maxW='1340px' mx='auto' gap='20px'> 
    <Box p="4"    w={['100%', '100%', '60%', '70%',]}>
      <Text fontSize="2xl" fontWeight="bold" mb="4">Shopping Cart</Text>
      <TableContainer 
        overflowX="auto"
        overflowY="auto" maxHeight="calc(100vh - 250px)"
        pr='20px'
        pb='20px'
        sx={{
          '&::-webkit-scrollbar': { width: "3px", height: "4px", borderRadius: "10px" },
          '&::-webkit-scrollbar-track': { background: "#fff" },
          '&::-webkit-scrollbar-thumb': { background:  "#000" },
          '&::-webkit-scrollbar-thumb:hover': { background:  "#222" }
        }}
    
      >
        <Table variant="striped" colorScheme="teal" size='md' width="100%" minW="xl">
          <Thead borderBottom='1px'>
            <Tr textTransform='capitalize' textAlign='left' pb='10px' >
              <Th fontSize={['md', 'lg']} pb='10px' textColor='white'  px={['4','4','4','2']}>aaaaaaa</Th>
              <Th fontSize={['md', 'lg']} pb='10px' px='4'>Product</Th>
              <Th fontSize={['md', 'lg']} pb='10px' px='8'>Price</Th>
              <Th fontSize={['md', 'lg']} pb='10px' px='4'>Quantity</Th>
              <Th fontSize={['md', 'lg']} pb='10px' px='8'>Subtotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map(item => (
              <Tr key={item.id} borderBottom='1px'>
                <Td   boxSize='100px' py='10px'>
                  <Image src={item.mealImage} rounded='xl' overflow='hidden' objectFit='cover' />
                  {/* {item.name} */}
                </Td>
                <Td px='4'>{item.name}</Td>
                <Td px='8'>${item.price}</Td>
                <Td>
                    <Button fontSize="22px" shadow='base' rounded='md' px='8px' mx="4" onClick={() => handleDecrement(item.id)}>-</Button>
                    {item.quantity}
                    <Button fontSize="22px" mx="4" shadow='base' rounded='md' px='8px' onClick={() => handleIncrement(item.id)}>+</Button>
                  </Td>
                <Td px='8'>${item.quantity * item.price}</Td>
                {/* <Td>{item.id}</Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>


    <Box display="grid"   gridTemplateColumns="repeat(2, 1fr)" gap={2} w={['100%', '70%', '40%', '30%',]} mt={['2rem','3rem','4rem', '5rem']} border='1px' p='4' mx={['0', 'auto']}>
        <GridItem textTransform='capitalize' fontSize={['lg']} fontWeight='bold' colSpan={2}>Order Summary</GridItem>
        <Text>SubTotal</Text>
        <Text textAlign="right">${subtotal.toFixed(2)}</Text>
        <Text>Tax (10%)</Text>
        <Text textAlign="right">${tax.toFixed(2)}</Text>
        <Text>Total</Text>
        <Text textAlign="right">${total.toFixed(2)}</Text>
        <GridItem colSpan={2} bg='black' color='white' p='3'>
          <Button colorScheme="orange" width="100%">Checkout</Button>
        </GridItem>
      </Box>

</Box>
<Footer />
</Box>
  );
};

export default CartPage;

