import React from 'react';
import { Link } from 'react-router-dom';

const CredentialsBox = ({ imageSrc, aboutTitle, credentialsTitle }) => {
  return (
    <div className="px-3 py-3 flex-1 h-full rounded-[20px]" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
     <Link to="/about">
     <img src={imageSrc} className="w-full h-auto object-cover rounded-tr-lg overflow-hidden rounded-tl-lg mb-5" alt="" />
      <div>
        <p className="uppercase text-[#5F666D] text-sm">{aboutTitle}</p>
        <h1 className="font-bold text-lg sm:text-xl ">{credentialsTitle}</h1>
      </div>
     </Link>
    </div>
  );
};

export default CredentialsBox;
