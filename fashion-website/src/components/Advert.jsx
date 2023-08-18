import React from 'react'


const Advert = ({ img, h3 ,p}) => {
  return (
    <div className='w-[80%] sm:w-fit  flex py-3  px-5 items-center'  style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        
       <div className="w-[100px] rounded-[50%] overflow-hidden">
       <img src={img} alt="" className='w-full h-full object-contain' />
       </div>
      <div className="px-4 bg-white">
      <h3>{h3}</h3>
        <p>{p}</p>
      </div>
      
    </div>
  )
}

export default Advert
