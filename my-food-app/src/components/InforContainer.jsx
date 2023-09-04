import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const InforContainer = () => {
  const [showInfo, setShowInfo] = useState(true);
  const containerRef = useRef(null);

  const handleClose = () => {
    setShowInfo(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`bg-black bg-opacity-80 text-white fixed top-0 left-0 z-[9999999999] w-full h-full flex justify-center items-center transition-opacity ${
        showInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      ref={containerRef}
    >
      {showInfo && (
        <div className="text-center">
            <p className='text-2xl mb-1'>Check the box </p>
          <p className="text-xl mb-1">Scroll down to see the results</p>
          <p>Dont forget to open on your PC</p>
          <button
            className="bg-red-500 absolute top-2 right-3 text-white px-4 py-2 rounded-md text-lg hover:bg-red-600 focus:outline-none"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default InforContainer;
