import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return showNotification ? (
    <div className="fixed z-[999] bottom-0 left-0 right-0 bg-gray-700 text-white pt-2 pb-1 px-4 text-center ">
     <span className="text-xs md:text-sm">
        <strong>Notice:</strong> We're continuously working on this website to make updates and improvements. Your patience is appreciated.
      </span>
      <button
        className="bg-transparent border-2 absolute top-1 right-1 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={handleCloseNotification}
      >
        <FaTimes />
      </button>
    </div>
  ) : null;
};

export default Notification;
