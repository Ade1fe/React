import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/b2c72bbc309e4f3d8545729092b76195-removebg-preview.png"
import Footer from './../components/Footer';
import AnimeMovieTab from '../components/AnimeMovieTab';
const AnimeMoviePage = () => {
  return (
  
       <>

        <AnimeAd  img={pic}/>
        <AnimeMovieTab />
        <Footer />
        </>
   
  )
}


export default AnimeMoviePage
