import React, { useState } from 'react';
import AnimeSearchBar from './AnimeSearchBar';
import AnimeCompTab from './AnimeCompTab';
import AnimeHentai from './AnimeHentai';
import NewAdded from './NewAdded';
import AnimeUpcoming from './AnimeUpcoming';
import AnimeCom from './AnimeCom';
import AnimeAiring from './AnimeAiring';
import AnimePopular from './AnimePopular';
import AnimeMovieComp from './AnimeMovieComp';
import AnimeMovieSearchBar from './AnimeMovieSearchBar';
// import AnimeSearchBarTv from './AnimeSearchBarTv';

const AnimeMovieTab = ({compOne,compTwo}) => {
  const [activeTab, setActiveTab] = useState('comp'); // Initially set to 'All'
  const [inputValue, setInputValue] = useState('');

  console.log(inputValue, " god abeg");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEnterPress = (value) => {
    setInputValue(value);
    console.log(`Enter key pressed with value: ${value}`);
  };

  return (
    <div className="mt-[50px] px-2 lg:px-2">
      <div className="grid gap-5 items-center">
        {/* <h1 className="text-2xl font-bold ">Most Viewed</h1> */}
      </div>

      <div className="grid lg:flex justify-evenly gap-3 items-start">
        {/* Content */}
        <div className="w-full lg:w-[75%]">
          <div className="grid sm:flex justify-center mb-4 sm:justify-between items-center px-2">
            <button
              onClick={() => handleTabClick('comp')}
              className={`px-2 py-2 text-2xl font-bold text-blue-400 ${
                activeTab === 'comp'
                  ? 'bg-blue-00 text-white'
                  : 'bg-[222] hover:bg-gray-00 '
              }`}
            >
              Movie
            </button>

            <input
              type="text"
              placeholder='search by Naruto'
              // defaultValue={inputValue}
              // onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleEnterPress(e.target.value);
                  handleTabClick('search');
                }
              }}
              className={`px-2 py-1 rounded-lg focus-visible:outline-blue-600 text-sm md:text-lg bg-black border-2 border-blue-400 ${
                activeTab === 'search'
                  ? ' '
                  : ''
              }`}
            />
          </div>

          {activeTab === 'comp' && <AnimeMovieComp />}
          {activeTab === 'search' && <AnimeMovieSearchBar getValue={inputValue} />}
        </div>

        <AnimeCom  compOne={<AnimeUpcoming />} compTwo={<AnimePopular />} />
      </div>
    </div>
  );
};


export default AnimeMovieTab