import React from 'react'
import DefaultNavbar from '../components/DefaultNavbar'
import Footer from '../components/Footer'

const Mainlayout = ({children}) => {
  return (
    <div>
      
        <DefaultNavbar />
        <div className="">{children}</div>
      <Footer />
    </div>
  )
}

export default Mainlayout
