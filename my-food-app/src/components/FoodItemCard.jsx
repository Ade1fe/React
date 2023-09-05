
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuantityModal from './QuantityModal'; // Import the QuantityModal component

const FoodItemCard = ({ id, img, title, price, onCardClick }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = (quantity) => {
 
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = { id, img, title, price, quantity: selectedQuantity };
    existingCartItems.push(newItem);

    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));


    // Optionally, you can notify the user that the item was added to the cart
    alert(`${quantity} ${title} added to cart`);
    navigate('/cart', { state: { id, title, img, price } });
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
      />
    </div>
  );
};

export default FoodItemCard;
