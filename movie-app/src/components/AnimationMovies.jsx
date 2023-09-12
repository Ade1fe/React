import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const AnimationMovies = () => {
  return (
    <div>
       <FetchMoviesById getPage={3} genreId={16}  />
    </div>
  )
}

export default AnimationMovies
