import React from 'react';
import bgImage from '../assets/salmon-518032_1920.jpg';
import { FaTelegram } from "react-icons/fa";
import Footer from './Footer';

const SubscribeToNews = () => {
  return (
        <div className="">
            
                <div className="relative bg-cover bg-center h-[200px] flex justify-center items-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="text-white z-[9999999] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] sm:w-[70%] md:w-max">
        <h1>Subscribe to our newsletter</h1>
        <div className="mt-4 flex items-center border-2 border-orange-500 ">
          <input type="text" className="p-2 text-black w-full md:w-[500px]  border border-gray-300 focus:outline-none focus:border-orange-500" placeholder="Enter your email" />
          <button className=" py-2 px-2 bg-orange-500  text-white  hover:bg-orange-600" >
            <FaTelegram size={25} />
          </button>
        </div>
      </div>
    </div>

    <Footer />
        </div>
  );
};

export default SubscribeToNews;
