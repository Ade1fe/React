import React from 'react';
import BigCard from './BigCard';
import suit1 from "../assests/suit.jpg";

const ArticleThree = () => {
  return (
    <div className=" px-3 mt-[100px]">

<div className='grid md:flex items-center justify-center'>
      <div className="z-[99999999999]">
      <BigCard h1="Best Minimal collection"
        myClass='text-center shadow-sm bg-white bg-opacity-50 p-4 w-full mx-auto w-[90%] mx-auto sm:mx-0 sm:w-[600px] md:mr-[-70px]'
          p="Dictum incididunt consectetur blanditiis eum ut ipsam laborios Quasi ullam quidem ea quisque.."/>
      </div>

      <div className="w-[90%] mx-auto mt-5 md:mt-0 md:mx-0 sm:w-[500px] relative">
        <img src={suit1} alt="" className='h-full w-full'/>
      </div>
    </div>


 
<div className='grid md:flex items-center justify-center mt-5 md:mt-7'>
<div className="w-[90%] mt-5 md:mt-0 mx-auto md:mx-0 order-2 md:order-1 sm:w-[500px] relative">
        <img src={suit1} alt="" className='h-full w-full'/>
      </div>


      <div className="z-[99999999999] order-1 md:order-2">
        <BigCard h1="Best Minimal collection"
        myClass='text-center shadow-sm bg-white bg-opacity-50 p-4 w-full mx-auto w-[90%] mx-auto sm:mx-0 sm:w-[600px] md:ml-[-70px]'
          p="Dictum incididunt consectetur blanditiis eum ut ipsam laborios Quasi ullam quidem ea quisque.."/>
      </div>

      
    </div>



    </div>
  );
}

export default ArticleThree;
