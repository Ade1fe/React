import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const MusicMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={3} genreId={10402} />
    </div>
  )
}

export default MusicMovies
