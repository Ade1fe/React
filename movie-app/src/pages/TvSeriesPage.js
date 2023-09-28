import React from 'react'
import Navbar from '../components/Navbar'
import FetchFilm from '../components/FetchFilm'

const TvSeriesPage = () => {
  return (
    <div>
         <Navbar />
         tv
         <FetchFilm type="series" />
    </div>
  )
}

export default TvSeriesPage
