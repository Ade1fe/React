import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const CrimeMovies = () => {
  return (
    <div>
       <FetchMoviesById getPage={5} genreId={80} />
    </div>
  )
}

export default CrimeMovies
