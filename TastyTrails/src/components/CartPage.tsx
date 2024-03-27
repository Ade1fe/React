// import React, { useState, useEffect } from 'react';
// import { Box, Text, Button } from '@chakra-ui/react';
// import { getAuth } from 'firebase/auth';
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import { CartCard } from '.';


// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const CartPage: React.FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const user = getAuth().currentUser;
//   const userId = user ? user.uid : null; 

  

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const firestoreInstance = getFirestore();
//         const cartItemsRef = collection(firestoreInstance, 'cartItems');
//         const cartItemQuery = query(
//           cartItemsRef,
//           where('userId', '==', userId)
//         );
//         const cartItemSnapshot = await getDocs(cartItemQuery);
//         const items: CartItem[] = [];
//         cartItemSnapshot.forEach(doc => {
//           const data = doc.data();
//           items.push({
//             id: doc.id,
//             name: data.name,
//             price: data.price,
//             quantity: data.quantity
//           });
//         });
//         setCartItems(items);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   return (
//     <Box p="4">
//       <Text fontSize="2xl" fontWeight="bold" mb="4">Shopping Cart</Text>
//       {cartItems.length === 0 ? (
//         <Text>No items in the cart</Text>
//       ) : (
//         <Box>
//           {cartItems.map(item => (
//             <Box key={item.id} mb="4">
//               <Text>{item.name}</Text>
//               <Text>Price: ${item.price}</Text>
//               <Text>Quantity: {item.quantity}</Text>
//               <CartCard id={item.id} imageUrl={''} quantity={item.quantity} name={item.name} price={item.price} subtotal={0} />
//             </Box>
//           ))}
//           <Button colorScheme="orange">Checkout</Button>
//         </Box>
//       )}

     
//     </Box>
//   );
// };

// export default CartPage;




























// import React, { useEffect, useState } from 'react';
// import { Box, Text, Button } from '@chakra-ui/react';
// import { getAuth } from 'firebase/auth';
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import { CartCard } from '.';


// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const CartPage: React.FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const user = getAuth().currentUser;
//   const userId = user ? user.uid : null; 

//   const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
//   const [subTotal, setSubTotal] = useState<number>(0); // State to hold total cost

//   const handleIncrement = (itemId: string) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [itemId]: (prevQuantities[itemId] || 0) + 1
//     }));
//   };

//   const handleDecrement = (itemId: string) => {
//     if (quantities[itemId] > 0) {
//       setQuantities(prevQuantities => ({
//         ...prevQuantities,
//         [itemId]: prevQuantities[itemId] - 1
//       }));
//     }
//   };

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const firestoreInstance = getFirestore();
//         const cartItemsRef = collection(firestoreInstance, 'cartItems');
//         const cartItemQuery = query(
//           cartItemsRef,
//           where('userId', '==', userId)
//         );
//         const cartItemSnapshot = await getDocs(cartItemQuery);
//         const items: CartItem[] = [];
//         let totalSubTotal = 0; // Variable to hold total subtotal

//         const quantities: { [key: string]: number } = {};
//         cartItemSnapshot.forEach(doc => {
//           const data = doc.data();
//           items.push({
//             id: doc.id,
//             name: data.name,
//             price: data.price,
//             quantity: data.quantity
//           });
//           quantities[doc.id] = data.quantity;
//           totalSubTotal += data.price * data.quantity; // Calculate subtotal for each item and sum up
//         });
//         setCartItems(items);
//         setQuantities(quantities);
//         setSubTotal(totalSubTotal); // Set the total subtotal
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   return (
//     <Box p="4">
//       <Text fontSize="2xl" fontWeight="bold" mb="4">Shopping Cart</Text>
//       {cartItems.length === 0 ? (
//         <Text>No items in the cart</Text>
//       ) : (
//         <Box>
//           {cartItems.map(item => (
//             <Box key={item.id} mb="4">
              
            
//               <CartCard
//                 id={item.id}
//                 imageUrl={''}
//                 quantity={quantities[item.id] || 0} 
//                 name={item.name}
//                 price={item.price}
//                 subtotal={item.price * (quantities[item.id] || 0)} 
//                 handleIncrement={() => handleIncrement(item.id)}
//                 handleDecrement={() => handleDecrement(item.id)} 
//               />
//             </Box>
//           ))}
//           <Text>Total Subtotal: ${subTotal}</Text> {/* Display total subtotal */}
//           <Button colorScheme="orange">Checkout</Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default CartPage;

























// import React, { useEffect, useState } from 'react';
// import { Box, Text, Button, Table, Tbody, Td, Th, Thead, Tr, Image, TableContainer } from '@chakra-ui/react';
// import { getAuth } from 'firebase/auth';
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const CartPage: React.FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const user = getAuth().currentUser;
//   const userId = user ? user.uid : null; 
 
//   const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

//   const handleIncrement = (itemId: string) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [itemId]: (prevQuantities[itemId] || 0) + 1
//     }));
//   };

//   const handleDecrement = (itemId: string) => {
//     if (quantities[itemId] > 0) {
//       setQuantities(prevQuantities => ({
//         ...prevQuantities,
//         [itemId]: prevQuantities[itemId] - 1
//       }));
//     }
//   };

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const firestoreInstance = getFirestore();
//         const cartItemsRef = collection(firestoreInstance, 'cartItems');
//         const cartItemQuery = query(
//           cartItemsRef,
//           where('userId', '==', userId)
//         );
//         const cartItemSnapshot = await getDocs(cartItemQuery);
//         const items: CartItem[] = [];
//         const quantities: { [key: string]: number } = {};
//         cartItemSnapshot.forEach(doc => {
//           const data = doc.data();
//           items.push({
//             id: doc.id,
//             name: data.name,
//             price: data.price,
//             quantity: data.quantity
//           });
//           quantities[doc.id] = data.quantity;
//         });
       
//         setCartItems(items);
//         setQuantities(quantities);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   return (
//     <Box p="4">
//       <Text fontSize="2xl" fontWeight="bold" mb="4">Shopping Cart</Text>
//     <TableContainer 
//             overflowX="auto"
//             pb='00px'
//             sx={{
//               '&::-webkit-scrollbar': { width: "2px" },
//               '&::-webkit-scrollbar-track': { background: "#fff" },
//               '&::-webkit-scrollbar-thumb': { background:  "#fff" },
//               '&::-webkit-scrollbar-thumb:hover': { background:  "#fff" }
//             }}
//     >
//     <Table variant="striped" colorScheme="teal" size='md' width="100%" minW="xl">
//         <Thead>
//           <Tr textTransform='capitalize' textAlign='left'>
//           <Th fontSize={['md', 'lg']}></Th>
//             <Th fontSize={['md', 'lg']}>Product</Th>
//             <Th fontSize={['md', 'lg']} px='8'>Price</Th>
//             <Th fontSize={['md', 'lg']} px='4'>Quantity</Th>
//             <Th fontSize={['md', 'lg']} px='8'>Subtotal</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {cartItems.map(item => (
//             <Tr key={item.id} >
//                <Td>
//           <Image src='' boxSize='100px' rounded='xl' overflow='hidden' objectFit='cover' />
//         </Td>
//               <Td>{item.name}</Td>
//               <Td px='8'>${item.price}</Td>
//               <Td>
//                 <Button fontSize="22px" shadow='base' rounded='md' px='8px' mx="4" onClick={() => handleDecrement(item.id)}>-</Button>
//                 {quantities[item.id] || 0}
//                 <Button fontSize="22px" mx="4" shadow='base' rounded='md' px='8px'onClick={() => handleIncrement(item.id)}>+</Button>
//               </Td>
//               <Td px='8'>${(quantities[item.id] || 0) * item.price}</Td>
//               <Td>{item.id}</Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </TableContainer>
//       <Button colorScheme="orange">Checkout</Button>
//     </Box>
//   );
// };

// export default CartPage;















// import React, { useEffect, useState } from 'react';
// import { Box, Text, Button, Table, Tbody, Td, Th, Thead, Tr, Image, TableContainer } from '@chakra-ui/react';
// import { getAuth } from 'firebase/auth';
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   mealId: string;
// }

// const CartPage: React.FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const user = getAuth().currentUser;
//   const userId = user ? user.uid : null;
//   const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

//   const handleIncrement = (itemId: string) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [itemId]: (prevQuantities[itemId] || 0) + 1
//     }));
//   };

//   const handleDecrement = (itemId: string) => {
//     if (quantities[itemId] > 0) {
//       setQuantities(prevQuantities => ({
//         ...prevQuantities,
//         [itemId]: prevQuantities[itemId] - 1
//       }));
//     }
//   };

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const firestoreInstance = getFirestore();
//         const cartItemsRef = collection(firestoreInstance, 'cartItems');
//         const cartItemQuery = query(
//           cartItemsRef,
//           where('userId', '==', userId)
//         );
//         const cartItemSnapshot = await getDocs(cartItemQuery);
//         const items: CartItem[] = [];
//         const quantities: { [key: string]: number } = {};
//         cartItemSnapshot.forEach(doc => {
//           const data = doc.data();
//           items.push({
//             id: doc.id,
//             name: data.name,
//             price: data.price,
//             quantity: data.quantity,
//             mealId: data.mealId
//           });
//           quantities[doc.id] = data.quantity;
//           console.log('Meal ID:', data.mealId);
//         });
//         setCartItems(items);
//         setQuantities(quantities);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   return (
//     <Box p="4">
//       <Text fontSize="2xl" fontWeight="bold" mb="4">Shopping Cart</Text>
//       <TableContainer 
//         overflowX="auto"
//         pb='00px'
//         sx={{
//           '&::-webkit-scrollbar': { width: "2px" },
//           '&::-webkit-scrollbar-track': { background: "#fff" },
//           '&::-webkit-scrollbar-thumb': { background:  "#fff" },
//           '&::-webkit-scrollbar-thumb:hover': { background:  "#fff" }
//         }}
//       >
//         <Table variant="striped" colorScheme="teal" size='md' width="100%" minW="xl">
//           <Thead>
//             <Tr textTransform='capitalize' textAlign='left'>
//               <Th fontSize={['md', 'lg']}></Th>
//               <Th fontSize={['md', 'lg']}>Product</Th>
//               <Th fontSize={['md', 'lg']} px='8'>Price</Th>
//               <Th fontSize={['md', 'lg']} px='4'>Quantity</Th>
//               <Th fontSize={['md', 'lg']} px='8'>Subtotal</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {cartItems.map(item => (
//               <Tr key={item.id} >
//                 <Td>
//                   {/* Fetch image based on mealId */}
//                   <Image src={`https://www.themealdb.com/images/media/meals/${item.mealId}-medium.jpg`} boxSize='100px' rounded='xl' overflow='hidden' objectFit='cover' />
//                 </Td>
//                 <Td>{item.name}</Td>
//                 <Td px='8'>${item.price}</Td>
//                 <Td>
//                   <Button fontSize="22px" shadow='base' rounded='md' px='8px' mx="4" onClick={() => handleDecrement(item.id)}>-</Button>
//                   {quantities[item.id] || 0}
//                   <Button fontSize="22px" mx="4" shadow='base' rounded='md' px='8px' onClick={() => handleIncrement(item.id)}>+</Button>
//                 </Td>
//                 <Td px='8'>${(quantities[item.id] || 0) * item.price}</Td>
//                 <Td>{item.id}</Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
//       <Button colorScheme="orange">Checkout</Button>
//     </Box>
//   );
// };

// export default CartPage;

































import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Table, Tbody, Td, Th, Thead, Tr, Image, TableContainer } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  mealId: string;
  mealImage: string; // Add mealImage to CartItem interface
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
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


  const handleIncrement = (itemId: string) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1
    }));
  };

  const handleDecrement = (itemId: string) => {
    if (quantities[itemId] > 0) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1
      }));
    }
  };

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Shopping Cart</Text>
      <TableContainer 
        overflowX="auto"
        pb='00px'
        sx={{
          '&::-webkit-scrollbar': { width: "2px" },
          '&::-webkit-scrollbar-track': { background: "#fff" },
          '&::-webkit-scrollbar-thumb': { background:  "#fff" },
          '&::-webkit-scrollbar-thumb:hover': { background:  "#fff" }
        }}
      >
        <Table variant="striped" colorScheme="teal" size='md' width="100%" minW="xl">
          <Thead>
            <Tr textTransform='capitalize' textAlign='left' pb='30px'>
              <Th fontSize={['md', 'lg']} pb='10px' textColor='white'  px={['3','4','4','2']}>aaaaaaaaaa</Th>
              <Th fontSize={['md', 'lg']} pb='10px'>Product</Th>
              <Th fontSize={['md', 'lg']} pb='10px' px='8'>Price</Th>
              <Th fontSize={['md', 'lg']} pb='10px' px='4'>Quantity</Th>
              <Th fontSize={['md', 'lg']} pb='10px' px='8'>Subtotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map(item => (
              <Tr key={item.id} >
                <Td pb='10px'>
                  <Image src={item.mealImage} boxSize='100px' rounded='xl' overflow='hidden' objectFit='cover' />
                  {/* {item.name} */}
                </Td>
                <Td>{item.name}</Td>
                <Td px='8'>${item.price}</Td>
                <Td>
                  <Button fontSize="22px" shadow='base' rounded='md' px='8px' mx="4" onClick={() => handleDecrement(item.id)}>-</Button>
                  {quantities[item.id] || 0}
                  <Button fontSize="22px" mx="4" shadow='base' rounded='md' px='8px' onClick={() => handleIncrement(item.id)}>+</Button>
                </Td>
                <Td px='8'>${(quantities[item.id] || 0) * item.price}</Td>
                {/* <Td>{item.id}</Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Button colorScheme="orange">Checkout</Button>
    </Box>
  );
};

export default CartPage;
