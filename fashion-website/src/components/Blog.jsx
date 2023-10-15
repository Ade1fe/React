import React from 'react'
import BlogTemplate from './BlogTemplate'
import fashion13 from "../assests/fashion-img15.jpg"
import fashion14 from "../assests/fashion-img13.jpg"
import fashion15 from "../assests/fashion-img14.jpg"

const Blog = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[100px]  gap-6 sm:gap-5 md:gap-3  w-max-[1240px] mx-auto justify-center '>
<BlogTemplate 
        img={fashion13} h2="Best designer dress on affordable price" 
        p="Quaerat per do est semper scelerisque. Exercitationem
         recusandae ultricies adipiscing lacus ea? Fermentum, illo mus"
        />

<BlogTemplate 
        img={fashion15} h2="Stylish & modern wear for stylish people" 
        p="Quaerat per do est semper scelerisque. Exercitationem
         recusandae ultricies adipiscing lacus ea? Fermentum, illo mus"
        />

<BlogTemplate 
        img={fashion14} h2="Budget-Friendly Designer Attire And prices       " 
        p="Quaerat per do est semper scelerisque. Exercitationem
         recusandae ultricies adipiscing lacus ea? Fermentum, illo mus"
        />
      
    </div>
  )
}

export default Blog
