import React from 'react'
const DataBlock = ({ children }) => {
    return (
      <div className="block w-full md:flex gap-5 justify-evenly md:w-[60%]">
        {children}
      </div>
    );
  };
  

export default DataBlock