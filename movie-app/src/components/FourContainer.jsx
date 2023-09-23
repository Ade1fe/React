import React from 'react'
import NewAdded from './NewAdded'
import AnimeAiring from './AnimeAiring'
import AnimeUpcoming from './AnimeUpcoming'
import AnimePopular from './AnimePopular'

const FourContainer = () => {
  return (
    <div className='grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 px-3 items-center '>
      <div><NewAdded /></div>
      

      <div> <AnimeAiring /> </div>
      

      <div> <AnimeUpcoming /> </div>
     

      <div>  <AnimePopular /> </div>
     
    </div>
  )
}  

export default FourContainer
