import React, { useState } from 'react';

const QuantityModal = ({ isOpen, onClose, onAddToCart,title, }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(selectedQuantity,title);
    onClose();
  };

  return (
    <div className={`absolute z-[9999999999] top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white w-[99%] py-4 px-1 rounded-lg shadow-md z-10">
        <h2 className="text-lg font-semibold mb-2">Select Quantity</h2>
        <input
          type="number"
          min="1"
          value={selectedQuantity}
          onChange={(e) => setSelectedQuantity(e.target.value)}
          className="border w-full border-gray-300 px-2 py-1 rounded"
        />
        <div className="mt-2 gap-2 justify-center flex">
          <button
            onClick={handleAddToCart}
            className="whitespace-nowrap bg-orange-500 text-white px-1 md:px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 border border-orange-500 "
          >
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 px-2 py-1 rounded-md hover:bg-gray-200 "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityModal;
