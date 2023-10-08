import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import { doc, deleteDoc, collection, getDocs } from 'firebase/firestore'; // Import Firestore functions from Firebase
import { firestore } from '../firebase'; // Import your Firestore instance

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize cart items as state

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
    const fetchCartItems = async () => {
      try {
        const cartItemsRef = collection(firestore, 'cartItems');
        const querySnapshot = await getDocs(cartItemsRef);
        const fetchedCartItems = [];

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
        const resolvedItems = await Promise.all(mealImagePromises);

        setCartItems(resolvedItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

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
      <div className="container mx-auto px-5 mt-8 mb-32">
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
