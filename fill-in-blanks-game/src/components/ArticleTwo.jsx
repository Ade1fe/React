import React from 'react'
import  quiz from "../assests/5224588.jpg"
import { Link } from 'react-router-dom'
import {FaPlay} from "react-icons/fa"

const ArticleTwo = () => {
  return (
    <div className='text-center flex flex-col w-full mt-3 mb-[80px]'>
      <div className="w-full md:h-[400px] mb-3 sm:mb-0">
      <img src={quiz} className='w-full h-full object-contain' alt="" />
      </div>
      <Link to="/game">
       <div className='text-3xl flex items-center justify-center gap-2 p-3 w-[150px] mx-auto
         bg-[#a2d2ff] border-2 border-[#a2d2ff]
          hover:bg-white hover:text-black 
          hover:font-semibold' style= {{boxShadow :"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <FaPlay />
       <h2 > Start</h2>
       
       </div>
         </Link>
    </div>
  )
}

export default ArticleTwo