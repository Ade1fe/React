import React, { useState } from 'react';
import QuantityModal from './QuantityModal';
import { doc, setDoc, collection,query,where,updateDoc,getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore function
import { getAuth } from 'firebase/auth';


const FoodItemCard = ({ id, img, title, price, mealid, onCardClick,titles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // Get the Firestore instance using getFirestore
  const firestoreInstance = getFirestore();
  const user = getAuth().currentUser;
  const userId = user ? user.uid : null;

  const addToCart = async (quantity, title) => {
    try {
      if (!userId) {
        console.error('User is not authenticated. Unable to add to cart.');
        return;
      }

      if (!mealid) {
        console.error('Meal ID is not defined. Unable to add to cart.');
        return;
      }

      if (!title) {
        console.error('Title is not defined. Unable to add to cart.');
        return;
      }

      const cartItemsRef = collection(firestoreInstance, 'cartItems');

      // Create a reference to the user's cart item by mealid
      const cartItemQuery = query(
        cartItemsRef,
        where('userId', '==', userId),
        where('mealid', '==', mealid)
      );

      // Get the snapshot of the item in the user's cart
      const cartItemSnapshot = await getDocs(cartItemQuery);

      if (!cartItemSnapshot.empty) {
        // Item already exists, update its quantity
        const existingCartItem = cartItemSnapshot.docs[0];
        const existingCartItemData = existingCartItem.data();

        const updatedQuantity = (existingCartItemData.quantity || 0) + (+quantity);


        // Update the existing item in the cart
        await updateDoc(existingCartItem.ref, { quantity: updatedQuantity });
      } else {
        // Item doesn't exist, add a new item to the cart
        const newItemDocRef = doc(cartItemsRef);

        await setDoc(newItemDocRef, {
          userId: userId,
          id: newItemDocRef.id,
          name: title, // Make sure title is defined
          price: price,
          quantity: quantity,
          mealid: mealid,
        });
      }

      alert(`${quantity} ${title} added to cart`);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };


  const handleCardClick = () => {
    onCardClick({ id, img, price, title, mealid });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isCartButtonDisabled = isModalOpen || selectedQuantity < 1;

  return (
    <div className="bg-white shadow-md overflow-hidden w-52">
      <div className="relative w-full h-40">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="py-0 pb-2 px-2">
        <div className="flex justify-between gap-2">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          <span className="text-lg font-semibold text-orange-500">{price}</span>
        </div>
        <p className="text-gray-600 text-xs text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iste?
        </p>
        <div className="flex justify-between gap-2 mt-2">
          <button
            onClick={openModal}
            className={`bg-orange-500 font-semibold text-white px-2 text-sm hover:text-black border-2 border-orange-500
          py-1 rounded-sm hover:bg-white focus:outline-none whitespace-nowrap ${
              isCartButtonDisabled ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            Add to Cart
          </button>

          <button
            onClick={handleCardClick}
            className="border-2 text-sm font-semibold border-orange-500 text-black px-2 py-1 hover:text-white rounded-sm
           hover:bg-orange-500 focus:outline-none"
          >
            Details
          </button>
        </div>
      </div>

      <QuantityModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddToCart={addToCart}
        setSelectedQuantity={setSelectedQuantity}
        selectedQuantity={selectedQuantity}
        title={title} 
      />
    </div>
  );
};

export default FoodItemCard;
