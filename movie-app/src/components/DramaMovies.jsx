import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const DramaMovies = () => {
  return (
    <div>
     <FetchMoviesById getPage={3} genreId={18} />
    </div>
  )
}

export default DramaMovies
