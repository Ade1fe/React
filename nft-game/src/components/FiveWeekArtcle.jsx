import React from 'react'


const FiveWeekArtcle = ({img, p , p2}) => {
  return (
    <div className='bg-gray-900 flex p-3 gap-3 items-center w-fit pr-7 rounded-lg'>
        <img src={img} className='w-[180px] h-[150px] sm:w-[80px] rounded-lg sm:h-[80px] object-cover ' alt="" />
         <div className="">
         <p className="font-bold text-yellow-600 mb-2">{p}</p>
          <p className="text-white font-semibold text-sm"> {p2}</p>
         </div>
    </div>
  )
}

export default FiveWeekArtcle
