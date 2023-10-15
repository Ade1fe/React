import React from 'react'
import Navbar from '../components/Navbar'
import FetchFilm from '../components/FetchFilm'
// eslint-disable-next-line
import Footer from '../components/Footer'

const TvSeriesPage = () => {
  return (
    <div className='mb-4'>
         <Navbar />
         <h2 className='text-lg md:text-2xl font-bold my-3 mt-7 px-3'>Limited Search For Tv Series: </h2>
         <FetchFilm type="series" />
         {/* <Footer /> */}
    </div>
  )
}

export default TvSeriesPage
