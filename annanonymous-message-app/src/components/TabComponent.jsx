import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MemeGenerator from './MemeGenerator';

function TabLink(props) {
  const { label, activeTab, onClick } = props;

  return (
    <button
      className={`text-gray-700 text-lg md:text-2xl hover:text-gray-900 focus:outline-none ${
        activeTab === label ? 'text-gray-900 font-semibold' : ''
      }`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

function TabComponent() {
  const [activeTab, setActiveTab] = useState('Dad Jokes:');

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="p-4 ">
      <div className="flex justify-between gap-3 space-x-4">
        <TabLink label="Dad Jokes:" activeTab={activeTab} onClick={handleTabClick} />
        <TabLink label="Search For Jokes" activeTab={activeTab} onClick={handleTabClick} />
      </div>
      <div className="mt-4">
        {activeTab === 'Dad Jokes:' && <div><MemeGenerator /></div>}
        {activeTab === 'Search For Jokes' &&   <div><SearchBar /></div>}
      </div>
    </div>
  );
}

export default TabComponent;
