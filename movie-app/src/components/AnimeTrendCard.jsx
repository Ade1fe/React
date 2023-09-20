import React from 'react';
// import pic from '../assets/mano.jpg';

const AnimeTrendCard = ({img,title}) => {
  return (
    <div className='w-fit overflow-hidden'>
      <div className='flex bg-[#222]'>
        <p  className='text-ellipsis whitespace-nowrap text-white p-2 w-[20px] h-full mt-[200px]' style={{ transform: 'rotate(-90deg)' }}>
         {title}
        </p>
        <div className='w-[150px] md:w-[180px] h-[250px] pl-2 overflow-hidden'>
          <img src={img} className='w-full h-full object-cover' alt='' />
        </div>
      </div>
    </div>
  );
};

export default AnimeTrendCard;
