import React from 'react';

import AnimeDetail from '../components/AnimeDetail';
import AnimeAdvert from './../components/AnimeAdvert';
import RecommendedAnime from '../components/RecommendedAnime';
import Footer from './../components/Footer';

const AnimeDetails = () => {
 


  return (
    <div>
      <AnimeDetail />
     <div className="mt-[80px]"> <AnimeAdvert /></div>
     <div className="mt-[40px]"> <RecommendedAnime /> </div>
     <Footer />
    </div>
  );
};

export default AnimeDetails;
