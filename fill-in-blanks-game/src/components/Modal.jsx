import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    const handleCloseOnOutsideClick = (event) => {
      if (isOpen && event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleCloseOnOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleCloseOnOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-4 rounded shadow">
        <p className=' text-2xl sm:text-4xl'>{message}</p>
        <button className='absolute text-white top-2 right-5' onClick={onClose}>
          <FaTimes  size={20} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
