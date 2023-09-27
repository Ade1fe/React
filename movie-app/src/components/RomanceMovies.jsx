import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const RomanceMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={7} genreId={10749} />
    </div>
  )
}

export default RomanceMovies
