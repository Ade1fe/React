import React, { useState } from 'react';
import AniMostDay from './AniMostDay';
import AniMostWeek from './AniMostWeek';
import AniMostMonth from './AniMostMonth';

const AnimeMostView = () => {
  const [activeTab, setActiveTab] = useState('day'); // Initially set to 'All'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" mt-[20px] md:mt-[50px]">
  <div className=" grid gap-5 items-center">
  <h1 className="text-2xl font-bold ">Most Viewed</h1>

{/* Tab Links */}
<div className="flex ">
  <button
    onClick={() => handleTabClick('day')}
    className={`px-2 py-2  ${
      activeTab === 'day'
        ? 'bg-blue-500 text-white'
        : 'bg-[#222] hover:bg-gray-300 '
    }`}
  >
    day
  </button>
  <button
    onClick={() => handleTabClick('week')}
    className={`px-2 py-2  ${
      activeTab === 'week'
        ? 'bg-blue-500 text-white'
        : 'bg-[#222] hover:bg-gray-300 '
    }`}
  >
    week
  </button>
  <button
    onClick={() => handleTabClick('month')}
    className={`px-2 py-2  ${
      activeTab === 'month'
        ? 'bg-blue-500 '
        : 'bg-[#222] hover:bg-gray-300 '
    }`}
  >
    Month
  </button>

</div>
  </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === 'day' && <AniMostDay />}
        {activeTab === 'week' && <AniMostWeek />}
        {activeTab === 'month' && <AniMostMonth />}
        
      </div>
    </div>
  );
};


export default AnimeMostView
