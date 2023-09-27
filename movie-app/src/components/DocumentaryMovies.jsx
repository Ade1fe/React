import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const DocumentaryMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={7} genreId={99} />
    </div>
  )
}

export default DocumentaryMovies
