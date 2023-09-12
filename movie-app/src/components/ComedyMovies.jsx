import React from 'react'
import FetchMoviesById from './FetchMoviesById';

const ComedyMovies = () => {
  return (
    <div>
       <FetchMoviesById getPage={3} genreId={35} />
      
    </div>
  )
}

export default ComedyMovies
