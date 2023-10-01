import React from 'react';
import MainLayout from '../layout/MainLayout';

const ComingSoonPage = () => {
  return (
  <MainLayout>
      <div className="flex h-screen bg-white">
      <div className="m-auto w-[90%] sm:w-max p-8 bg-gray-50 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-semibold mb-4">Coming Soon</h1>
        <p className="text-lg mb-6">
          We're working hard to bring you something amazing.
        </p>
        <div className="flex justify-center">
          <div className="border-t-2 border-gray-500 w-20"></div>
        </div>
        <p className="text-gray-500 mt-6">Stay tuned for updates!</p>
      </div>
    </div>
  </MainLayout>
  );
};

export default ComingSoonPage;
