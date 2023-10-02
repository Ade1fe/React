import React from 'react';
import signupImage from "../assets/19362653.jpg"; // Make sure to import the image properly
import { FaGoogle } from 'react-icons/fa';

const SignupPage = () => {
  return (
    <div className="flex bg-white mt-[20px] pt-[10px]">
      <div className="m-auto p-8 bg-white rounded-lg" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
        <div className="mb-4 text-center">
          <img
            src={signupImage}
            alt="Signup"
            className="w-28 rounded-[50%] mx-auto mb-2"
          />
          <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Keep session started in this browser</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign up
          </button>
        </form>

        <div className="mt-4 text-sm text-center">
          <p>Sign up with</p>
          <button className="mt-2 p-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            <FaGoogle />
          </button>
        </div>

        <div className="mt-4 text-sm text-center">
          <p>Already have an account?</p>
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
