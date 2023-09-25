import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/fcab0f8dbfcc4d9e8729e46d07ac08f6-removebg-preview.png"
import Footer from './../components/Footer';
import TrendAnimeTab from '../components/TrendAnimeTab';
import AnimeCompTab from '../components/AnimeCompTab';
import AnimeSearchBar from '../components/AnimeSearchBar';
import AnimeUpcoming from '../components/AnimeUpcoming';
import NewAdded from '../components/NewAdded';
import AnimeSearchBarTv from '../components/AnimeSearchBarTv';

const TvAnimeSeriesPage = () => {
  return (
  
       <>

<AnimeAd  img={pic}/>
<TrendAnimeTab  />
<Footer />
</>
   
  )
}



export default TvAnimeSeriesPage
