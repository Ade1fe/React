import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const ActionMovies = () => {
  return (
    <div>
      <FetchMoviesById getPage={2} genreId={28} />
    </div>
  )
}

export default ActionMovies
