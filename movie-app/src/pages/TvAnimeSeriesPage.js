import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/b2c72bbc309e4f3d8545729092b76195-removebg-preview.png"
import Footer from './../components/Footer';
import TvAnimeTrendTab from '../components/TvAnimeTrendTab';
const TvAnimeSeriesPage = () => {
  return (
  
       <>

        <AnimeAd  img={pic}/>
        <TvAnimeTrendTab />
        <Footer />
        </>
   
  )
}

export default TvAnimeSeriesPage