import React from 'react';

import AnimeDetail from '../components/AnimeDetail';
import AnimeAdvert from './../components/AnimeAdvert';
import RecommendedAnime from '../components/RecommendedAnime';
// eslint-disable-next-line
import Footer from './../components/Footer';
import Mainlayout from '../layout/Mainlayout';

const AnimeDetails = () => {
 


  return (
    <div>
      <Mainlayout>
      <AnimeDetail />
     <div className="mt-[80px]"> <AnimeAdvert /></div>
     <div className="mt-[40px]"> <RecommendedAnime /> </div>
        
          </Mainlayout>
      
     {/* <Footer /> */}
    </div>
  );
};

export default AnimeDetails;
