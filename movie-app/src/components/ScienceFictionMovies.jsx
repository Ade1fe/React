import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const ScienceFictionMovies = () => {
  return (
    <div>
    <FetchMoviesById   getPage={5} genreId={878} />
  </div>
  )
}

export default ScienceFictionMovies
