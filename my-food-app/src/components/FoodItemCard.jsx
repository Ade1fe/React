import React, { useState } from 'react';
import QuantityModal from './QuantityModal';
import { doc, setDoc, collection } from 'firebase/firestore'; // Import Firestore functions from Firebase
import { getFirestore } from 'firebase/firestore'; // Import getFirestore function
import { getAuth } from 'firebase/auth';


const FoodItemCard = ({ id, img, title, price, mealid, onCardClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // Get the Firestore instance using getFirestore
  const firestoreInstance = getFirestore();

  // Get the current user using 'firebase' object
  const user = getAuth().currentUser; // Assuming auth is properly imported
  const userId = user ? user.uid : null;

  // Function to add an item to the cart in Firestore
  const addToCart = async (quantity) => { // Updated to accept quantity as an argument
    try {
      const cartItemsRef = collection(firestoreInstance, 'cartItems');
      const newItemDocRef = doc(cartItemsRef);

      await setDoc(newItemDocRef, {
        userId: userId,
        id: newItemDocRef.id,
        name: title,
        price: price,
        quantity: quantity,
        mealid: mealid,
      });

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
            className={`bg-orange-500 text-white px-2 text-sm hover:text-black border-2 border-orange-500
          py-1 rounded-sm hover:bg-white focus:outline-none whitespace-nowrap ${
              isCartButtonDisabled ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            Add to Cart
          </button>

          <button
            onClick={handleCardClick}
            className="border-2 border-orange-500 text-black px-2 py-1 hover:text-white rounded-sm
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
      />
    </div>
  );
};

export default FoodItemCard;
