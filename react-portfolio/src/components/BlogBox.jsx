import React from 'react';
import { Link } from 'react-router-dom';

const BlogBox = ({ imageSrc, blogType, blogTitle }) => {
  return (



<div className="sm:w-[50%] order-1 my-3 sm:my-0 md:w-[35%] rounded-[20px] h-[300px] px-4" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
<Link to="/notfound">
      <div className="w-full h-[220px]">
        <img src={imageSrc} className="w-full h-[100%] object-cover" alt="" />
      </div>
      <div className='py-1 px-4'>
        <p className="uppercase text-[#5F666D]">{blogType}</p>
        <h1 className="font-bold text-lg sm:text-xl">{blogTitle}</h1>
      </div>
      </Link>
    </div>

  );
};

export default BlogBox;
