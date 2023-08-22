import React from 'react'
import CarouselA from './CarouselA'
import TablinkImaContainer from './TablinkImaContainer';

const Photography = () => {
  return (
    <div>
    <TablinkImaContainer child={<CarouselA />} />
   </div>
  )
}

export default Photography
