// ProfileCard.js
import React from 'react';
import AnimatedText from './AnimatedText';
import Header from './Header';

const ProfileCard = ({ first, second, headerClassName, pClassame }) => {
  return (
    <div>
      <div className="px-2 flex-grow mt-6 sm:mt-0 ">
        <AnimatedText />
        <Header first={first} headerClassName={headerClassName} />
        <p pClassame={pClassame}>{second}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
