import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const TvMovie = () => {
  return (
    <div>
    <FetchMoviesById   getPage={4} genreId={10770} />
  </div>
  )
}

export default TvMovie
