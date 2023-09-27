import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const FantasyMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={7} genreId={14} />
    </div>
  )
}

export default FantasyMovies

