import React, { useState } from 'react';
import AnimeAll from './AnimeAll';
import AnimeHentai from './AnimeHentai';
import AnimeSpecial from './AnimeSpecial';
import AnimeMusic from './AnimeMusic';

const AnimeRecent = () => {
  const [activeTab, setActiveTab] = useState('All'); // Initially set to 'All'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
  <div className=" grid sm:flex gap-5 items-center">
  <h1 className="text-2xl font-bold ">Recently Updated</h1>

{/* Tab Links */}
<div className="flex ">
  <button
    onClick={() => handleTabClick('All')}
    className={`px-4 py-2  ${
      activeTab === 'All'
        ? 'bg-blue-500 text-white'
        : 'bg-[#222] hover:bg-gray-300 '
    }`}
  >
    All
  </button>
  <button
    onClick={() => handleTabClick('Hentai')}
    className={`px-4 py-2  ${
      activeTab === 'Hentai'
        ? 'bg-blue-500 text-white'
        : 'bg-[#222] hover:bg-gray-300 '
    }`}
  >
    Hentai
  </button>
  <button
    onClick={() => handleTabClick('Special')}
    className={`px-4 py-2  ${
      activeTab === 'Special'
        ? 'bg-blue-500 '
        : 'bg-[#222] hover:bg-gray-300 '
    }`}
  >
    Special
  </button>
  <button
    onClick={() => handleTabClick('music')}
    className={`px-4 py-2 ${
      activeTab === 'music'
        ? 'bg-blue-500 text-white'
        : 'bg-[#222] hover:bg-gray-300'
    }`}
  >
    Music
  </button>
</div>
  </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === 'All' && <AnimeAll />}
        {activeTab === 'Hentai' && <AnimeHentai />}
        {activeTab === 'Special' && <AnimeSpecial />}
        {activeTab === 'music' && <AnimeMusic />}
      </div>
    </div>
  );
};

export default AnimeRecent;




