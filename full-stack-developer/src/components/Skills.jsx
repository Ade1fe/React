import React from 'react'
import pic1 from "../assets/inshot.jpg"
import pic2 from "../assets/react.jpg"
import pic3 from "../assets/javasript.png"
import pic5 from "../assets/sql.jpg"
import pic6 from "../assets/tailwind.png"
import pic7 from "../assets/capcut.jpg"

const Skills = () => {
  return (
<div className=" px-5 text-center">
<h2 className='text-2xl mb-4'>Skills</h2>
<div className='flex flex-wrap justify-evenly gap-3 sm:gap-8'>
       <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[10px] overflow-hidden">
       <img src={pic1} className='w-full h-full object-cover' alt="" />
       </div>
       <div className="flex justify-center items-center w-[60px] h-[60px]  rounded-[10px] overflow-hidden">
       <img src={pic2} className='w-full h-full object-cover' alt="" />
       </div>
       <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[10px] overflow-hidden">
       <img src={pic3} className='w-full h-full object-cover' alt="" />
       </div>
       <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[10px] overflow-hidden">
       <img src={pic5} className='w-full h-full object-cover' alt="" />
       </div>
       <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[10px] overflow-hidden">
       <img src={pic6} className='w-full h-full object-cover' alt="" />
       </div>
       <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[10px] overflow-hidden">
       <img src={pic7} className='w-full h-full object-cover' alt="" />
       </div>
      
    </div>
</div>
  )
}

export default Skills
