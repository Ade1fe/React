import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
        
    </div>
  )
}

export default MainLayout