import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const ThrillerMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={1} genreId={53} />
    </div>
  )
}

export default ThrillerMovies
