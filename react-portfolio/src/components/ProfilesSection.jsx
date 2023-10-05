import React from 'react';
import { Link } from 'react-router-dom';

const ProfilesSection = ({ stayWithMeText, profilesText }) => {
  return (
    // <Link to="/letUsTalk">
    <div className='py-2'>  
      <p className="uppercase text-[#5F666D]">{stayWithMeText}</p>
      <h1 className="font-bold text-lg sm:text-xl ">{profilesText}</h1>   
    </div>
    // </Link>
  );
};

export default ProfilesSection;
