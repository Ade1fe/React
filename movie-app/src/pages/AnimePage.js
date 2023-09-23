import React from 'react';
import Mainlayout from './../layout/Mainlayout';
import SideBar from '../components/SideBar';
import AnimeCarousel from '../components/AnimeCarousel';
import AnimeTrendCarousel from '../components/AnimeTrendCarousel';
import AnimeAdvert from '../components/AnimeAdvert';
import FourContainer from '../components/FourContainer';
import AnimeRecent from '../components/AnimeRecent';
import AnimeGenre from '../components/AnimeGenre';



const AnimePage = () => {
  return (
    <Mainlayout> 
      <SideBar />
       <AnimeCarousel />

  <div className='mt-[40px] md:mt-[90px]'>
    <h2 className='text-xl md:text-2xl my-3 px-5 font-bold'>Trending</h2>
  <AnimeTrendCarousel />
  </div>

  <div className='mt-[20px] md:mt-[60px]'>
    <AnimeAdvert />
  </div>

  <div className='mt-[20px] md:mt-[60px]'>
  <FourContainer />
   </div>

   <div className='mt-[20px] md:mt-[60px]grid sm:flex justify-between gap-6'> 
   <div className='w-full sm:w-[67%]'>
  <AnimeRecent />
   </div>

   <div className='w-full sm:w-[30%]'>
  <AnimeGenre />
   </div>

   </div>


{/* <div> </div> */}

    </Mainlayout>
  );
}

export default AnimePage;
