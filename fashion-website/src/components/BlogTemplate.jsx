// import React from 'react'
// import { Link } from 'react-router-dom'


// const BlogTemplate = ({img,h2, p,span1,span2, span3 ,spanc1, spanc2, spanc3}) => {
//   return (
//     <div className=' w-[100%]  md:w-[40%] lg:w-[320px] ' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
//         <div className="w-full h-[300px]">
//             <img src={img} className='w-full h-full object-cover' alt="" />
//         </div>
//         <div className="px-3 py-2">
//             <Link to="/showblogs"  className='mb-3 font-semibold text-lg sm:text-xl uppercase'>{h2}</Link>
//             <p className='text-xs my-1'>
//             <span className={spanc1}>{span1} </span> 
//             <span className={spanc2}> {span2}</span>
//             <span className={spanc3}>{span3}</span></p>
//             <p className='mb-3 text-sm sm:text-lg'>{p}</p>
//         </div>
      
//     </div>
//   )
// }

// export default BlogTemplate


import React from 'react';
import { Link } from 'react-router-dom';

const BlogTemplate = ({ img, h2, p, span1, span2, span3, spanc1, spanc2, spanc3 }) => {
  return (
    <div className='w-[100%] md:w-[40%] lg:w-[320px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
      <Link to={`/showblogs?img=${encodeURIComponent(img)}&h2=${encodeURIComponent(h2)}&p=${encodeURIComponent(p)}&span1=${encodeURIComponent(span1)}&span2=${encodeURIComponent(span2)}&span3=${encodeURIComponent(span3)}&spanc1=${encodeURIComponent(spanc1)}&spanc2=${encodeURIComponent(spanc2)}&spanc3=${encodeURIComponent(spanc3)}`}>
        {/* Wrap the content in Link */}
        <div className="w-full h-[300px]">
          <img src={img} className='w-full h-full object-cover' alt="" />
        </div>
        <div className="px-3 py-2">
          <span className='mb-3 font-semibold text-lg sm:text-xl uppercase'>{h2}</span>
          <p className='text-xs my-1'>
            <span className={spanc1}>{span1} </span>
            <span className={spanc2}> {span2}</span>
            <span className={spanc3}>{span3}</span></p>
          <p className='mb-3 text-sm sm:text-lg'>{p}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogTemplate;
    

