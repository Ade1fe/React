

// import { Box, Button, Image, Text, useToast } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { app } from '../../firebase';
// import { getAuth } from 'firebase/auth';
// import { collection, doc, getDocs, getFirestore, query, setDoc, updateDoc, where } from 'firebase/firestore';


// interface AllFoodProps {
//   id: string;
//   imageUrl: string;
//   name: string;
//   price: number;
// }



// const AllFood: React.FC<AllFoodProps> = ({ id, imageUrl, name,price }) => {
//   // Get the Firestore instance using getFirestore
//   const auth = getAuth(app);
//   const [quantity, setQuantity] = useState<number>(0);

//   // Get the Firestore instance using getFirestore
//   const firestoreInstance = getFirestore();
//   const user = getAuth().currentUser;
//   const userId = user ? user.uid : null;
 

//   const toast = useToast();


//   console.log(user)


//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };


//   console.log(userId)



//   const handleAddToCart = async () => {
//     try {
//       if (!userId) {
//         throw new Error('User is not authenticated. Unable to add to cart.');
//       }
  
//       if (!id) {
//         throw new Error('Meal ID is not defined. Unable to add to cart.');
//       }
  
//       if (!name) {
//         throw new Error('Name is not defined. Unable to add to cart.');
//       }
  
//       const cartItemsRef = collection(firestoreInstance, 'cartItems');
//       const cartItemQuery = query(
//         cartItemsRef,
//         where('userId', '==', userId),
//         where('name', '==', name) // Check by name as well
//       );
//       const cartItemSnapshot = await getDocs(cartItemQuery);
  
//       if (!cartItemSnapshot.empty) {
//         const existingCartItem = cartItemSnapshot.docs[0];
//         const existingCartItemData = existingCartItem.data();
//         const updatedQuantity = existingCartItemData.quantity + quantity; // Add to existing quantity
//         await updateDoc(existingCartItem.ref, { quantity: updatedQuantity });
//       } else {
//         // This block should only execute if the item doesn't exist in the cart
//         const newItemDocRef = doc(cartItemsRef);
//         await setDoc(newItemDocRef, {
//           userId: userId,
//           id: newItemDocRef.id,
//           name: name,
//           price: price,
//           quantity: quantity,
//         });
//       }
  
//       toast({
//         title: "Item added to cart",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
  
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: error.message,
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       console.error('Error adding item to cart:', error);
//     }
//   };
  

//   return (
//     <Box
//       display={["block", 'flex', 'flex', 'flex', 'flex']}
//       borderTopWidth='1px'
//       px='10px'
//       borderTopColor='#f1f1f1'
//       borderBottomWidth='1px'
//       borderBottomColor='#f1f1f1'
//       py='20px'
//       textAlign={['center','left', 'left','left']}
//       alignItems="center"
//       cursor='pointer'
//     >
//       <Box mr="4" shadow='base' boxSize={['200px','100px','150px', '100px']} rounded='md' overflow='hidden'  mx={['auto', '0', 'auto', '0']} >
//         <Image src={imageUrl} alt="food" />
//       </Box>
//       <Box flex="1" mx='10px' >
//         <Text fontSize={['md','lg',]} fontWeight="bold" mb="1" noOfLines={1}>
//           {name}
//         </Text>
//         <Text color='gray.400' fontSize={['sm','md',]} noOfLines={2}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, modi?
//         </Text>
//         <Text className="">$ {price} </Text>
//       </Box>
//       <Box display="flex" alignItems="center" mx='10px' my={['10px','0','10px','0']} justifyContent={['center','flex-start','center', 'flex-start']}>
//         <Button onClick={handleDecrement} fontSize="22px" shadow='base' rounded='md' px='8px' mr="2">
//           -
//         </Button>
//         <Text>{quantity}</Text>
//         <Button onClick={handleIncrement} fontSize="22px" ml="2" shadow='base' rounded='md' px='8px'>
//           +
//         </Button>
//       </Box>
//       <Button onClick={handleAddToCart} mt={['10px', '0','10px','0']} px='15px' rounded='lg' py='5px' borderColor='orange.500' borderWidth='2px' textAlign={['center']} mx='auto'>Add</Button>
//     </Box>
//   );
// };

// export default AllFood;


























import { Box, Button, Image, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { app } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, query, setDoc, updateDoc, where } from 'firebase/firestore';

interface AllFoodProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  mealId: string; // Add mealId to props
}

const AllFood: React.FC<AllFoodProps> = ({ id, imageUrl, name, price, mealId }) => {
  const auth = getAuth(app);
  const [quantity, setQuantity] = useState<number>(0);
  const firestoreInstance = getFirestore();
  const user = getAuth().currentUser;
  const userId = user ? user.uid : null;
  const toast = useToast();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (!userId) {
        throw new Error('User is not authenticated. Unable to add to cart.');
      }

      if (!id) {
        throw new Error('Meal ID is not defined. Unable to add to cart.');
      }

      if (!name) {
        throw new Error('Name is not defined. Unable to add to cart.');
      }

      const cartItemsRef = collection(firestoreInstance, 'cartItems');
      const cartItemQuery = query(
        cartItemsRef,
        where('userId', '==', userId),
        where('name', '==', name)
      );
      const cartItemSnapshot = await getDocs(cartItemQuery);

 console.log('Meal ID:', mealId);

      if (!cartItemSnapshot.empty) {
        const existingCartItem = cartItemSnapshot.docs[0];
        const existingCartItemData = existingCartItem.data();
        const updatedQuantity = existingCartItemData.quantity + quantity;
        await updateDoc(existingCartItem.ref, { quantity: updatedQuantity });
      } else {
        const newItemDocRef = doc(cartItemsRef);
        await setDoc(newItemDocRef, {
          userId: userId,
          id: newItemDocRef.id,
          name: name,
          price: price,
          quantity: quantity,
          mealId: mealId, // Add mealId to the cart item
        });
      }

      

      toast({
        title: "Item added to cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <Box
      display={["block", 'flex', 'flex', 'flex', 'flex']}
      borderTopWidth='1px'
      px='10px'
      borderTopColor='#f1f1f1'
      borderBottomWidth='1px'
      borderBottomColor='#f1f1f1'
      py='20px'
      textAlign={['center','left', 'left','left']}
      alignItems="center"
      cursor='pointer'
    >
      <Box mr="4" shadow='base' boxSize={['200px','100px','150px', '100px']} rounded='md' overflow='hidden'  mx={['auto', '0', 'auto', '0']} >
        <Image src={imageUrl} alt="food" />
      </Box>
      <Box flex="1" mx='10px' >
        <Text fontSize={['md','lg',]} fontWeight="bold" mb="1" noOfLines={1}>
          {name}
        </Text>
        <Text color='gray.400' fontSize={['sm','md',]} noOfLines={2}>
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
