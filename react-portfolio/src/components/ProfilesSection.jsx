import React from 'react';

const ProfilesSection = ({ stayWithMeText, profilesText }) => {
  return (
    <div className='py-2'>
      <p className="uppercase text-[#5F666D]">{stayWithMeText}</p>
      <h1 className="font-bold text-xl sm:text-2xl">{profilesText}</h1>
    </div>
  );
};

export default ProfilesSection;
