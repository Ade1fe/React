

import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import { doc, deleteDoc, collection, onSnapshot, query, where } from 'firebase/firestore'; // Import Firestore functions from Firebase
import { firestore } from '../firebase'; // Import your Firestore instance
import { getAuth } from 'firebase/auth'; // Import getAuth for user authentication

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize cart items as state
  const auth = getAuth(); // Get the Firebase Authentication instance

   // Function to fetch meal image by mealid using the "fetch" API
   const fetchMealImage = async (mealid) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const data = await response.json();

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
    // Ensure that there is a user logged in before fetching cart items
    if (auth.currentUser) {
      // Create a reference to the "cartItems" collection
      const cartItemsRef = collection(firestore, 'cartItems');

      // Create a query to fetch cart items for the current user
      const userCartQuery = query(
        cartItemsRef,
        where('userId', '==', auth.currentUser.uid)
      );

      // Set up a real-time listener to listen for changes to the user's cart items
      const unsubscribe = onSnapshot(userCartQuery, (querySnapshot) => {
        // const fetchedCartItems = [];

        // Fetch meal images concurrently and store promises
        const mealImagePromises = [];

        querySnapshot.forEach((doc) => {
          const itemData = doc.data();
          if (itemData) {
            const mealid = itemData.mealid;
            mealImagePromises.push(
              fetchMealImage(mealid).then((imageUrl) => {
                return {
                  id: doc.id,
                  img: imageUrl,
                  ...itemData,
                };
              })
            );
          }
        });

        // Wait for all image requests to complete
        Promise.all(mealImagePromises).then((resolvedItems) => {
          setCartItems(resolvedItems);
        });
      });

      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    } else {
      // If no user is logged in, clear the cart
      setCartItems([]);
    }
  }, [auth.currentUser]);

  // Function to handle deleting a cart item
  const handleDeleteItem = async (itemId) => {
    try {
      const itemDocRef = doc(firestore, 'cartItems', itemId);
      await deleteDoc(itemDocRef);

      // Update the cart items in the state after deletion
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Calculate the total cart price
  const totalCartPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('$', '')) || 0;
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  return (
    <MainLayout>
      <div className="container mx-auto px-3 mt-8 mb-32">
      <div className="mb-5 grid justify-center sm:flex sm:justify-between gap-5">
          <h1 className="text-lg text-center sm:text-left md:text-2xl font-semibold">Cart</h1>
          <Link to="/menu">
            <h2 className="text-lg md:text-2xl font-semibold">
              Want some more? <span className="font-bold">Continue Shopping</span>
            </h2>
          </Link>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <Cart
                img={item.img}
                key={item.id}
                alt={item.title || ''}
                name={item.name || ''}
                mealid={item.mealid}
                price={item.price}
                nums={(parseInt(item.quantity, 10) || 1) || 1}
                total={((parseFloat(item.total) || 0) || 0).toFixed(2)}
                onDelete={() => handleDeleteItem(item.id)}
              />
            ))}
            <div className="text-lg font-semibold mt-10 md:mt-20">
              Total: ${totalCartPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CartPage;
