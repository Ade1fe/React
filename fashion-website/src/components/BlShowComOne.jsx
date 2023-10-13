import React from 'react'
import { FaFacebook, FaTwitter , FaInstagram , FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa"
import ReplyForm from './ReplyForm'
import BlRecentPostContainer from './BlRecentPostContainer'
import DemoteamCard from './DemoteamCard'

const BlShowComOne = () => {
  return (
    <div className=" block lg:flex px-3 md:px-5 gap-3 ">
    


      
<div className="w-full lg:w-[66%]">
    
        <div className="px-4 md:px-6 py-3 my-3">
        <p className='text-sm md:text-[15px]'>Quaerat per do est semper scelerisque. 
            Exercitationem recusandae ultricies 
            adipiscing lacus ea? Fermentum, 
            illo mus temporibus rem litora perspiciatis 
            omnis porttitor rutrum provident nulla
             leo sagittis pharetra voluptas. 
             Voluptatibus, repellendus leo 
             earum, excepteur porro parturient 
             laoreet. Hymenaeos vitae, ea 
             voluptatum? Sit, nostrum accusantium
              hendrerit penatibus! Aliqua dis 
              veritatis eaque vero. Beatae aliqua 
              cursus laoreet cumque mollis, nonummy primis 
              ipsam ad, pulvinar modi, gravida blanditiis 
              delectus accusantium. Necessitatibus perferendis, 
              minim mollis at, vero! Tempus maecenas, et fuga diamlorem
               euismod voluptas! Ornare placerat ac. Adipisci diam bibendum
                metus, itaque nibh proident exercitationem! Mollit mattis suscipit
                 nullam, sollicitudin luctus nihil maiores? Molestie 
                 fringilla cubilia,</p>
      </div>


      <div className="">

      <div className='flex flex-wrap gap-5 items-center justify-center'>
        <div className="bg-blue-900 text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaFacebook size={20} /> 
        <h2>Facebook</h2>
        </div>

        <div className="bg-blue-400 text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaTwitter size={20} /> 
        <h2>Twitter</h2>
        </div>

        <div className="bg-red-600 text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaInstagram size={20} /> 
        <h2>Instagram</h2>
        </div>

        <div className="bg-red-700 text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaYoutube size={20} /> 
        <h2>Youtube</h2>
        </div>

        <div className="bg-blue-600 text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaLinkedin size={20} /> 
        <h2>Linkedin</h2>
        </div>

        <div className="bg-black text-white flex w-fit px-5 py-2 items-center justify-between gap-3">
        <FaGithub size={20} /> 
        <h2>Github</h2>
        </div>
      </div>

    </div>
    <DemoteamCard />

        <ReplyForm />
</div>
       
    
    <BlRecentPostContainer myclass=" w-full lg:w-[30%]" />
    </div>
  )
}

export default BlShowComOne
