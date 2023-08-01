import React from 'react';
import { Link } from 'react-router-dom';

const ProfilesSection = ({ stayWithMeText, profilesText }) => {
  return (
    <div className='py-2'>
      <Link to="/letUsTalk">
      <p className="uppercase text-[#5F666D]">{stayWithMeText}</p>
      <h1 className="font-bold text-xl sm:text-2xl">{profilesText}</h1>
      </Link>
    </div>
  );
};

export default ProfilesSection;
