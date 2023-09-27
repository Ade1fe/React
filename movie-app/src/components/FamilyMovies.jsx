import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const FamilyMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={7} genreId={10751} />
    </div>
  )
}
export default FamilyMovies
