import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimeTrendCard = ({img,title,id}) => {
  const navigate = useNavigate();

  const handleWatchNowClick = () => {
    const encodedId = encodeURIComponent(id);
    navigate(`/animeDetails/${encodedId}`);
  };

  return (
    <div className='w-fit overflow-hidden'  onClick={handleWatchNowClick} >
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
