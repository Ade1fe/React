import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-50-500 to-gray-50-600">
      <h1 className="text-6xl font-bold text-purple-300 mb-6">404 - Page Not Found</h1>
      <p className="text-2xl text-black mb-4">
        Oops! Looks like the page you are looking for doesn't exist.
      </p>
      <p className="text-lg text-black mb-8">Don't worry, our blog is coming soon. Stay tuned!</p>
     
    </div>
  );
};

export default NotFound;
