import React from 'react'
import  imgThree  from "../assets/imgFour.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai';

const Transport = () => {
  return (
    <div className='grid gap-2 w-full px-3 mt-[3rem] sm:flex justify-evenly py-[1rem] mb-[100px]'>
        <div className="w-[full] mb-1 sm:w-[300px] mx-2">
        <h1 className="myH1 font-effect-outline mb-2 font-bold text-[21px] md:text-[25px]">
                Friendly Drivers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Omnis quaerat cupiditate assumenda 
                deserunt facere expedita iure iusto unde! Nam 
                odit doloremque, labore a tempore corporis quos
                 numquam voluptas voluptatum quibusdam!</p>
        </div>
        <div className="mt-[1rem] relative">
  <div className="w-[280px] relative sm:w-[320px] md:w-[400px] mx-auto">
    <img src={imgThree} alt="/" className="relative" />
    <div className="box w-[130px] p-2 sm:w-[200px] bg-gray-950 text-white absolute h-[150px] top-[70%] right-[-5%] flex flex-col justify-between sm:left-[-30px] ">
      <p>Lorem, ipsum dolor.</p>
      <AiOutlineArrowRight size={25} className="ml-auto" />
    </div>
  </div>
</div>


    </div>
  )
}

export default Transport