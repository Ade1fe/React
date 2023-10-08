import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';

const SignUpComp = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phonenumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUsernameChange = (e) => {
    const { name, value } = e.target;
    // Use a regular expression to remove any characters that are not letters or spaces
    const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };


  const handleSave = async (e) => {
    e.preventDefault();
  

    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password

      );
      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore, `foodappusers/${userId}`);
      await setDoc(userDocRef, {
        username: formData.username,
        email: formData.email,
        phonenumber: formData.phonenumber
      });
      setFormData({
        username: '',
        email: '',
        password: '',
        phonenumber:''
      });
      window.alert('Sign Up Successful'); // Show success alert
    } catch (err) {
      console.error('Sign Up failed!', err);
  
      if (err.code === 'auth/invalid-email') {
        window.alert('Invalid email address. Please enter a valid email address.');
      } else {
        window.alert('Sign Up failed! An error occurred. Please try again later.');
      }
    }
  };

  
  
  

  return (
    <div className="flex flex-col items-center justify-between mt-8 sm:mt-0">
      <h2 className="text-3xl font-semibold w-[90%] mx-auto mb-2">
        <span className='text-black'>Deife</span> <span className='text-orange-500'>Foods</span>
      </h2>
      <form className="bg-white w-[90%] rounded  mx-auto" onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="username" className="block text-gray-600">Full Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Adeife Adams"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
             onChange={handleUsernameChange}
         />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-600">Email:</label>
          <input
  type="email"
  id="email"
  name="email"
  placeholder="Enter your email"
  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
  onChange={handleInputChange}
/>

        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="block text-gray-600">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
         />
        </div>
        <div className="mb-3 flex justify-between text-sm">
          <label className="block text-black">
            <input type="checkbox" name="remember" className="mr-2" /> Remember me
          </label>
        </div>
        {/* <Link to="/app" type="submit" className="bg-orange-500 hover:bg-orange-600 text-center text-white w-full font-semibold py-2 px-4 rounded"> */}
      <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-center text-white w-full font-semibold py-2 px-4 rounded">    Sign Up</button>
        {/* </Link> */}
      </form>
      <div className="mt-3 text-center items-center w-full">
        <p className="flex items-center w-80 mx-auto">
          <span className="border-b-2 border-b-orange-500 w-full"></span>
          <span className="text-gray-600 text-2xl mx-2 mb-1 capitalize">or</span>
          <span className="border-b-2 border-b-orange-500 w-full"></span>
        </p>
        <div className="flex gap-5 justify-evenly w-full md:w-80 mx-auto md:gap-5">
          <div className="border-2 px-4 py-3"> <FaGoogle className="text-red-500 " size={25} /> </div>
          <div className="border-2 px-4 py-3"> <FaApple className="text-black " size={25} /> </div>
          <div className="border-2 px-4 py-3"> <FaFacebook className="text-blue-500 " size={25} /> </div>
        </div>
      </div>
      <p className="mt-3 text-gray-600 text-sm text-center px-2 mb-4 md:mb-0">
        Already have an account? <Link to="/signin" className='text-orange-500 font-bold'>Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpComp;
