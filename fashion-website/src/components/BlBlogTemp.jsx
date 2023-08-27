import React from 'react'
import BlogTemplate from './BlogTemplate'
import woman from "../assests/woman-5864279_1280.jpg"
import van from "../assests/van.png"
import cat from "../assests/ok.jpg"
import pat from "../assests/bow.jpg"

const BlBlogTemp = () => {
  return (
    <div className='flex flex-wrap w-[95%] mx-auto justify-center gap-4'>
      <BlogTemplate img={woman} h2="Stylish & modern wear for stylish people"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
        span3="No Comments" spanc3="px-2"
        p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
        adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>

<BlogTemplate img={van} h2="Stylish & modern wear for stylish people"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
         span3="No Comments" spanc3="px-2"
         p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
         adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>

<BlogTemplate img={cat} h2="Stylish & modern wear for stylish people"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
         span3="No Comments" spanc3="px-2"
         p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
         adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>

<BlogTemplate img={pat} h2="Stylish & modern wear for stylish people"
        span1="Demoteam" spanc1="border-r-2 border-gray-200 "  
        span2=" December 28, 2021" spanc2="border-r-2 border-gray-200 px-2" 
         span3="No Comments" spanc3="px-2"
         p="Quaerat per do est semper scelerisque. Exercitationem recusandae ultricies 
         adipiscing lacus ea? Fermentum, illo mus temporibus rem litora perspiciatis omnis"/>
      
    </div>
  )
}

export default BlBlogTemp
