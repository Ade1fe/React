import React from 'react';
import GameComponent from '../components/GameComponent';
import Game from '../assests/19362653.jpg';

const ImgContainerReact = () => {
  return (
    <div className='  block mt-3 px-4 items-center gap-3 md:flex '>
          <div className='flex-1'>
        <GameComponent />
      </div>
      <div className='w-full flex-1 h-full'>
        <img src={Game} className='w-full h-full' alt='' />
      </div>
     
     
    </div>
  );
};

export default ImgContainerReact;
