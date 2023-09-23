import React, { useState } from 'react';
import SocialsTab from './SocialsTab'; // Import your child components
import Reviews from './Reviews';
import Discuss from './Discuss';

const TabLinks = () => {
  const [activeTab, setActiveTab] = useState('socials'); // Initialize the active tab state

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update the active tab when a tab is clicked
  };

  return (
    <div className=" mx-auto mt-4">
      <div className="flex">
        <button
          className={`${
            activeTab === 'socials' ? 'bg-blue-500 text-white' : 'bg-gray-00 text-gray-00'
          } px-4 py-2 rounded-l`}
          onClick={() => handleTabClick('socials')}
        >
          Notes
        </button>
        <button
          className={`${
            activeTab === 'reviews' ? 'bg-blue-500 text-white' : 'bg-gray-00 text-gray-00'
          } px-4 py-2`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews 1
        </button>
        <button
          className={`${
            activeTab === 'discuss' ? 'bg-blue-500 text-white' : 'bg-gray-00 text-gray-00'
          } px-4 py-2 rounded-r`}
          onClick={() => handleTabClick('discuss')}
        >
          Discuss 4
        </button>
      </div>

      <div className=" p-4 mt-4 ">
        {activeTab === 'socials' && <SocialsTab />}
        {activeTab === 'reviews' && <Reviews />}
        {activeTab === 'discuss' && <Discuss />}
      </div>
    </div>
  );
};

export default TabLinks;
