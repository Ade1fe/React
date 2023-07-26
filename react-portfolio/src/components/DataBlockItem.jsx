// DataBlockItem.js
import React from 'react';
import DataBlockText from './DataBlockText';

const DataBlockItem = ({ number, title1, title2 }) => {
  return (
    <div className="flex-1 text-center text-black my-2 md:my-0 p-6 bg-[#222]  rounded-[20px]">
      <DataBlockText number={number} title1={title1} title2={title2} />
    </div>
  );
};

export default DataBlockItem;
