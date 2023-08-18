import React from 'react'
import BlogTemplate from './BlogTemplate'
import fashion13 from "../assests/fashion-img13.jpg"

const Blog = () => {
  return (
    <div className='flex mt-[100px]  gap-6 sm:gap-2 w-max-[1240px] mx-auto justify-evenly flex-wrap'>
<BlogTemplate 
        img={fashion13} h2="Stylish & modern wear for stylish people" 
        p="Quaerat per do est semper scelerisque. Exercitationem
         recusandae ultricies adipiscing lacus ea? Fermentum, illo mus"
        />

<BlogTemplate 
        img={fashion13} h2="Stylish & modern wear for stylish people" 
        p="Quaerat per do est semper scelerisque. Exercitationem
         recusandae ultricies adipiscing lacus ea? Fermentum, illo mus"
        />

<BlogTemplate 
        img={fashion13} h2="Stylish & modern wear for stylish people" 
        p="Quaerat per do est semper scelerisque. Exercitationem
         recusandae ultricies adipiscing lacus ea? Fermentum, illo mus"
        />
      
    </div>
  )
}

export default Blog
