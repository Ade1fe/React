import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const WesternMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={3} genreId={27} />
    </div>
  )
}

export default WesternMovies
