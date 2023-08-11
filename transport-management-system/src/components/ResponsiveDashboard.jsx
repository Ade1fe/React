import React, { useState } from 'react';
import TransportationBookingForm from './TransportationBookingForm';

const ResponsiveDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Sidebar content goes here */}
      </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        {/* Main content goes here */}
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-500 text-white"
          onClick={toggleSidebar}
        >
          {showSidebar ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        {/* Render the TransportationBookingForm inside the main content */}
        <div className="mt-4">
          <TransportationBookingForm />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDashboard;
