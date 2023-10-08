import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuantityModal from './QuantityModal';

const FoodItemCard = ({ id, img, title, price, quantity, onCardClick }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(quantity || 1); // Use the provided quantity or default to 1

  useEffect(() => {
    setSelectedQuantity(quantity || 1); // Update the selectedQuantity when the quantity prop changes
  }, [quantity]);

  const handleAddToCart = (quantity) => {
    // Retrieve the current cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Check if the item with the same ID already exists in the cart
    const existingItemIndex = existingCartItems.findIndex((item) => item.id === id);
  
    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity as a number
      existingCartItems[existingItemIndex].quantity += parseInt(quantity, 10);
    } else {
      // Clean the 'price' value before passing it
      const cleanedPrice = price.replace('$', '').replace(',', '');
      const newItem = {
        id,
        img,
        title,
        price: parseFloat(cleanedPrice) || 0, // Convert to a number, default to 0 if not a valid number
        quantity: parseInt(quantity, 10) || 1, // Convert to a number, default to 1 if not a valid number
      };
  
      existingCartItems.push(newItem);
    }
  
    // Update the cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  
    // Optionally, you can notify the user that the item was added to the cart
    alert(`${parseInt(quantity, 10)} ${title} added to cart`);
  
    // navigate('/cart');
  };

  const handleCardClick = () => {
    onCardClick({ id, img, price, title });
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

      {/* Quantity Modal */}
      <QuantityModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddToCart={handleAddToCart}
        setSelectedQuantity={setSelectedQuantity}
        selectedQuantity={selectedQuantity} // Pass the selectedQuantity to the modal
      />
    </div>
  );
};

export default FoodItemCard;
