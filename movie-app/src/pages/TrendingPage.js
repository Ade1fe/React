import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/fcab0f8dbfcc4d9e8729e46d07ac08f6-removebg-preview.png"
import TrendAnimeTab from '../components/TrendAnimeTab'
import Footer from './../components/Footer';

const TrendingPage = () => {
  return (
  
       <>

        <AnimeAd  img={pic}/>
        <TrendAnimeTab  />
        <Footer />
        </>
   
  )
}

export default TrendingPage
