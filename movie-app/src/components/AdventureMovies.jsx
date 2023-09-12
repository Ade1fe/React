import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const AdventureMovies = () => {
  return (
    <div>
        <FetchMoviesById getPage={4} genreId={12} />
    </div>
  )
}

export default AdventureMovies
