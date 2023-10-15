import React from 'react'
import Footer from '../components/Footer'
import MovieNavbar from '../components/MovieNavbar'

const OverViewLayout = ({children}) => {
  return (
    <div>
      
        <MovieNavbar />
        <div className="">{children}</div>
      <Footer />
    </div>
  )
}


export default OverViewLayout
