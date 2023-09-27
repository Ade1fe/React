import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const HorrorMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={7} genreId={27} />
    </div>
  )
}

export default HorrorMovies
