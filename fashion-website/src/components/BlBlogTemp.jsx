import React from 'react'
import BlogTemplate from './BlogTemplate'
import woman from "../assests/woman-5864279_1280.jpg"
import van from "../assests/woman-3299379_1280.jpg"
import cat from "../assests/girl-4266712_1280.jpg"
import pat from "../assests/girl-gb16739572_1280.jpg"

const BlBlogTemp = () => {
  return (
    <div className='grid  grid-cols-1 sm:grid-cols-2  w-[95%] mx-auto justify-center gap-4'>
      <BlogTemplate img={woman} h2="Stylish & modern wear for stylish people"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
        span3="No Comments" spanc3="px-2"
        p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
        adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>

<BlogTemplate img={van} h2="Best designer dress on affordable price"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
         span3="No Comments" spanc3="px-2"
         p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
         adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>

<BlogTemplate img={cat} h2="Heavy discount on our summer sale"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
         span3="No Comments" spanc3="px-2"
         p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
         adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>

<BlogTemplate img={pat} h2="Weekend sale start from this month"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
         span3="No Comments" spanc3="px-2"
         p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
         adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>
      
    </div>
  )
}

export default BlBlogTemp
