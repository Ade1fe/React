import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const user = getAuth().currentUser;
  const userId = user ? user.uid : null; 

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
        cartItemSnapshot.forEach(doc => {
          const data = doc.data();
          items.push({
            id: doc.id,
            name: data.name,
            price: data.price,
            quantity: data.quantity
          });
        });
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text>No items in the cart</Text>
      ) : (
        <Box>
          {cartItems.map(item => (
            <Box key={item.id} mb="4">
              <Text>{item.name}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </Box>
          ))}
          <Button colorScheme="orange">Checkout</Button>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
