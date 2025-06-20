import React from 'react'
import Navbar from '../components/Navbar'
import FetchFilm from '../components/FetchFilm'
// eslint-disable-next-line
import Footer from '../components/Footer';

const MovieSeriesPage = () => {
  return (
    <div className='mb-4'>
      <Navbar />
     <h2 className='text-lg md:text-2xl font-bold my-3 mt-7 px-3'>Limited Search For Movies: </h2>
      <FetchFilm type="movie" />
      {/* <Footer /> */}
    </div>
  )
}

export default MovieSeriesPage

