import React from 'react'
import TablinkImaContainer from './TablinkImaContainer'
import CarouselC from './CarouselC'


const VirtualWorld = () => {
  return (
    <div>
    <TablinkImaContainer child={<CarouselC />} />
   </div>
  )
}

export default VirtualWorld
