import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const MysteryMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={7} genreId={14} />
    </div>
  )
}

export default MysteryMovies
