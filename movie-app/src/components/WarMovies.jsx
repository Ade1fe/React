import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const WarMovies = () => {
  return (
    <div>
    <FetchMoviesById   getPage={7} genreId={10752} />
  </div>
  )
}

export default WarMovies
