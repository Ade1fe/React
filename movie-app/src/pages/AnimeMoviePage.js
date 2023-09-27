import React from 'react'
import AnimeAd from '../components/AnimeAd'
import pic from "../assets/1aaf879b3e824529b2d0b2df072d449d-removebg-preview.png"
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
