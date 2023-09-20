import React from 'react'
import pic from "../assets/mano.jpg"

const Reviews = () => {
  return (
    <div className='w-fit p-5 bg-gray-950 shadow-2xl rounded-md'>
     <div className="flex gap-4 items-center">
     <div className="w-[70px] h-[70px] overflow-hidden rounded-[50%]">
        <img src={pic} className='object-cover w-full h-full' alt="" />
     </div>
     <div className="text-lg">
        <h2 className='font-bold'>A review by Burt_</h2>
        <p className='text-sm'>Written by Burt_ on March 8, 2022</p>
     </div>
     </div>
     <p className='mt-4'>This is a Fantasy show... I love fantasy, but this show is horrible. 
        Very boring... predictable with no likable characters. Only two are ok; Mat and Lan... the rest I just can't stand them..... Moiraine with her silent mysterious brooding.... Nynaeve always with that angry look in her face.... Perrin and his always feeling guilty face and the way he moves and talks like he is mentally stunted.... I could go on but you get it, this show is awful..... people who are into D&D might like it.... but for me this
         is not a good show, I don't know how many more of
          you see it the same thing as me. </p>
    </div>
  )
}

export default Reviews
