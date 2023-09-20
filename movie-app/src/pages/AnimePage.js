import React from 'react';
import Mainlayout from './../layout/Mainlayout';
import SideBar from '../components/SideBar';
import AnimeCarousel from '../components/AnimeCarousel';
import AnimeTrendCarousel from '../components/AnimeTrendCarousel';



const AnimePage = () => {
  return (
    <Mainlayout> 
      <SideBar />
       <AnimeCarousel />

  <div className='mt-[40px] md:mt-[90px]'>
  <AnimeTrendCarousel />
  </div>
    </Mainlayout>
  );
}

export default AnimePage;
