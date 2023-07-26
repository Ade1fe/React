// DataBlockText.js
import React from 'react';

const DataBlockText = ({ number, title1, title2 }) => {
  return (
    <div className='p-2 bg-white  rounded-[20px]' style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
      <h1 className="font-bold text-xl sm:text-3xl">{number}</h1>
      <p className="font-semibold">{title1}</p>
      <p className="font-semibold">{title2}</p>
    </div>
  );
};

export default DataBlockText;
