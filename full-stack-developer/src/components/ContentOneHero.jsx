import React from 'react'
import pic1 from "../assets/fashion-img11.png"


const ContentOneHero = () => {
  return (
 <div className="grid md:flex md:justify-between px-4 md:px-8 items-center mt-[60px] gap-4 container mx-auto">
       <div className='bg-gray-950 text-white w-full order-2  md:order-1 md:w-[60%]'>
      <h3 className='bg-gray-900 p-2  rounded-lg w-fit'>Full Stack Developer</h3>
      <h1 className='text-2xl sm:text-3xl md:text-4xl'>I'm John Dumelo</h1>
      <p className='text-2xl sm:text-3xl md:text-4xl'>Professional Full Stack Developer</p>
      <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Explicabo, porro! Enim 
        facere aliquid repudiandae, ipsa, dicta modi nihil adipisci at
        laudantium nostrum omnis eaque, cumque sint minima. Dicta, quod eos!</p>
        <div className="flex mt-3 gap-6" >
            <h3 className='whitespace-nowrap border-2 border-red-700 px-3 py-1 rounded-lg hover:bg-red-700 hover:text-black hover:font-semibold cursor-pointer transition-colors'>Contact Me</h3>
            <h3 className='whitespace-nowrap border-2 border-red-700 bg-red-700 px-3 py-1 rounded-lg hover:bg-black hover:text-white hover:font-semibold cursor-pointer transition-colors'>Download Cv</h3>
        </div>

    </div>
    {/* second */}

    <div className="text-center px-1 sm:px-0 flex justify-end mx-auto relative w-fit order-1 md:order-2 md:w-[48%] mt-[10px] md:mt-[80px] sm:mt-0">
      <div className="bg-white  w-[240px] sm:w-[250px] md:w-[280px] h-[350px] relative "> 
      <div className="bg-red-700 w-[250px] sm:w-[270px] md:w-[290px] h-[280px] absolute top-10 right-2 sm:right-5 z-[-1]"> </div>

      <div className="w-full h-[400px]  absolute bottom-0 left-0">
     <img src={pic1} className='w-full h-full object-contain' alt="" />
     </div>

      </div>

      <div className="w-[270px] sm:w-[320px] md:w-[320px] h-[280px] border-red-700 border-2 border-dashed  rounded-[50%] flex justify-center
       items-center absolute top-12 right-2 z-[-1]">
      <div className="w-[260px] sm:w-[310px] md:w-[310px] h-[270px] border-red-700 border-2 border-dashed  rounded-[50%] ">
 
    
</div>
      </div>
     
    


    </div>

    
    






 </div>
    
  )
}

export default ContentOneHero
