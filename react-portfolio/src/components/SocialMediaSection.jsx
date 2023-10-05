import React from 'react';
import { FaTiktok, FaGlobe } from 'react-icons/fa'; // Import the necessary icons from 'react-icons/fa'

const SocialMediaSection = ({ tiktokText, globeText }) => {
  return (
    <div className="flex justify-evenly text-white py-6 mt-9 w-[95%] bg-[#000] m-auto mb-10 rounded-[30px]" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
      <FaTiktok size={50} className='border-2 border-dashed border-white bg-[#222] rounded-[50%] p-3' style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }} />
      <FaGlobe size={50} className='border-2 border-dashed border-white bg-[#222] rounded-[50%] p-3' style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }} />
    </div>
  );
};

export default SocialMediaSection;
