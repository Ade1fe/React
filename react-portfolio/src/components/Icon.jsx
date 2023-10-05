import React from 'react'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin,} from 'react-icons/fa';

const Icon = () => {
  return (
    <div className='w-[90%] md:w-full mx-auto my-3 md:my-1 flex flex-wrap gap-3'>
      <div className="p-3 md:p-4 hover:bg-black hover:text-white " style={{ borderRadius: "50%" ,  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
          <FaTwitter size={25} />
      </div>
      <div className="p-3 md:p-4  hover:bg-black hover:text-white " style={{ borderRadius: "50%" ,  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
       <FaInstagram size={25} />
       </div>
       <div className="p-3 md:p-4 hover:bg-black hover:text-white " style={{ borderRadius: "50%" ,  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
        <FaGithub size={25} /> 
        </div>
        <div className="p-3 md:p-4 hover:bg-black hover:text-white " style={{ borderRadius: "50%" ,  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
       <FaLinkedin size={25} /> 
       </div>
      
    </div>
  )
}

export default Icon
