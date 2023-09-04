import React from 'react'
import Navbar from './../components/Navbar';
import SubscribeToNews from './../components/SubcribeToNews';

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div>{children}</div>
        <SubscribeToNews />
    </div>
  )
}

export default MainLayout
