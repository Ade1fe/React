import React, { useState } from 'react';
import Photography from './Photography'; // Import the Photography component or your other content components
import All from './All';
import Arts from './Arts';
import Sport from './Sport';
import Music from './Music';
import VirtualWorld from './VirtualWorld';

const TabLinks = () => {
  const [activeTab, setActiveTab] = useState('All'); // State to keep track of the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Photography':
        return <Photography />;
        case 'All':
            return <All />;
            case 'Arts':
                return <Arts />;
                case 'Sport':
                    return <Sport />;
                    case 'Music':
                        return <Music />;
                        case 'VirtualWorld':
                          return <VirtualWorld />;
      
      default:
        return <div>Default content</div>;
    }
  };

  return (
    <div className='mt-[20px] container mx-auto'>
      <ul className='flex justify-evenly gap-5 flex-wrap'>
        <li
          className={activeTab === 'All' ? 'active border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl' : 'border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl'}
          onClick={() => handleTabClick('All')}
        >
          All
        </li>
        <li
          className={activeTab === 'Sport' ? 'active border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl' : 'border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl'}
          onClick={() => handleTabClick('Sport')}
        >
          Sport
        </li>
        <li
          className={activeTab === 'Arts' ? 'active border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl' : ' border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl'}
          onClick={() => handleTabClick('Arts')}
        >
          Arts
        </li>
        <li
          className={activeTab === 'Photography' ? 'active border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl ' : ' border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl'}
          onClick={() => handleTabClick('Photography')}
        >
          Photography
        </li>
        <li 
          className={activeTab === 'VirtualWorld' ? 'active border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl' : ' border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl'}
          onClick={() => handleTabClick('VirtualWorld')}
        >
          Virtual World
        </li>
        <li
          className={activeTab === 'Music' ? 'active border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl' : ' border-2 border-gray-800 bg-gray-800 px-3 py-1 rounded-2xl'}
          onClick={() => handleTabClick('Music')}
        >
          Music
        </li>
      </ul>
      <div>
        {renderContent()} {/* Render the content based on the active tab */}
      </div>
    </div>
  );
};

export default TabLinks;
