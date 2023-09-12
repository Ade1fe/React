import React from 'react'
import FetchMoviesById from './FetchMoviesById'

const DocumentaryMovies = () => {
  return (
    <div>
      <FetchMoviesById   getPage={5} genreId={80} />
    </div>
  )
}

export default DocumentaryMovies
