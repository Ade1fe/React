import React from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignInComp = () => {
    //  min-h-screen
  return (
    // <div className="h-auto ">
        
        <div className="flex flex-col items-center justify-between  mt-[10px] sm:mt-0 ">
      {/* */}
      <h2 className="text-3xl font-semibold w-[90%] mx-auto mb-2 "> <span className='text-black'>Deife</span> <span className='text-orange-500'>Foods</span></h2>
      <form className="bg-white rounded  w-[90%] mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-3 flex justify-between text-sm">
          <label className="block text-black">
            <input type="checkbox" name="remember" className="mr-2" /> Remember me
          </label>

          <h2 className='text-gray-600'>Forget Password</h2>
        </div>
        <Link to="/app" type="submit" className="bg-orange-500 hover:bg-orange-600 text-center text-white w-full font-semibold py-2 px-4 rounded">
          Login
        </Link>
      </form>
      <div className="mt-3 text-center items-center w-full">
      <p class="flex items-center w-[80%] mx-auto">
  <span class="border-b-2 border-b-orange-500 w-full"></span>
  <span class="text-gray-600 text-2xl mx-2 mb-1 capitalize">or</span>
  <span class="border-b-2 border-b-orange-500 w-full"></span>
</p>

        <div className="flex gap-5 justify-evenly w-full md:w-[80%] mx-auto md:gap-5">
        <div className="border-2 px-4 py-3">  <FaGoogle className="text-red-500 "  size={25}/> </div>
          <div className="border-2 px-4 py-3">  <FaApple className="text-black "  size={25}/> </div>
          <div className="border-2 px-4 py-3">  <FaFacebook className="text-blue-500 "  size={25}/> </div>
        </div>
      </div>
      <Link to="/signup" className="mt-8 text-gray-600 text-sm text-center px-2 mb-4 md:mb-0">Don't have an account? <span className='text-orange-500 font-bold'>Sign up</span></Link>
    </div>
    // {/* </div> */}
  );
};

export default SignInComp;
