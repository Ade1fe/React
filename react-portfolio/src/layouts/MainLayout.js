import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({children}) => {
  return (
 <div>
    <Navbar></Navbar>
    <div>{children}</div>
 </div>
  )
}

export default MainLayout