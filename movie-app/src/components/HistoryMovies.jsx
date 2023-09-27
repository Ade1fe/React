import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const HistoryMovies = () => {
  return (
    <div>
    <FetchMoviesById   getPage={7} genreId={36} />
  </div>
  )
}

export default HistoryMovies
