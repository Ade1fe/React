import React from 'react';

const ProductTwo = ({ first, sec, third }) => {
  return (
    <div className="flex  mx-auto md:mx-0 max-w-[500px] items-center gap-3 h-fit">
      <div className=" flex gap-2  flex-col w-[39%]">
      <div className="w-full h-auto">
          <img src={first} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-full h-auto">
          <img src={sec} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
      <div className="w-[80%]">
        <div className="w-full h-auto">
          <img src={third} className="w-full h-full object-contain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductTwo;
