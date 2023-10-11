

  
  import React, { useState } from 'react';
  import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
  import { doc, setDoc } from 'firebase/firestore';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth, firestore } from '../firebase';
  
  const SignUpComp = () => {
    const [loginStatus, setLoginStatus] = useState(null); // null for initial state
    const [error, setError] = useState('');
  
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      phonenumber: ''
    });
  
    const handleInputChange = (e) => {
  
      const { name, value } = e.target;

          // Phone number validation: Check if the input contains only digits
  if (name === "phonenumber" && !/^\d*$/.test(value)) {
    setError('Phone number can only contain digits.');
    setLoginStatus('error');
  } else {
    setError(''); // Clear the error message if the input is valid.
  }

      setFormData({
        ...formData,
        [name]: value,
      });
    };
  

    const handleUsernameChange = (e) => {
      const { name, value } = e.target;
    
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        setError('Full Name can only contain letters and spaces.');
        setLoginStatus('error');
      } else {
        setError(''); // Clear the error message if the input is valid.
      }
      
    
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
  
    const handleSave = async (e) => {
      e.preventDefault();

      if (!/^[a-zA-Z\s]*$/.test(formData.username)) {
        setError('Username can only contain letters and spaces.');
        setLoginStatus('error');
        return;
      }

      // Phone number validation
    if (!/^\d{10}$/.test(formData.phonenumber)) {
      setError('Please enter a valid 10-digit phone number.');
      setLoginStatus('error');
      return;
    }

  
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
          phonenumber: ''
        });
        setLoginStatus('success');
      } catch (err) {
        console.error('Sign Up failed!', err);
        setLoginStatus('error');
        if (err.code === 'auth/invalid-email') {
          setError('Error');
        } else {
          setError('Sign Up failed! An error occurred. Please try again later.\n Email-already-in-use');
        }
      }
    };

    
  const comingSoon = () => {
    alert("This feature is coming soon\nKindly enter your information");
  };
  
    return (
      <div className="flex flex-col items-center justify-between mt-8 sm:mt-0">
        {/* ... (other code) */}
        <form className="bg-white w-[90%] rounded mx-auto" onSubmit={handleSave}>
          {loginStatus === 'success' && (
            <div className="text-green-600 mb-4">Login Successful</div>
          )}
          {loginStatus === 'error' && (
            <div className="text-red-600 mb-4">{error}</div>
          )}
          <div className="mb-3">
            <label htmlFor="username" className="block text-gray-600">
              Full Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Adeife Adams"
              required
              className={`w-full border ${
                error && !formData.username ? 'border-red-500' : 'border-gray-300'
              } rounded py-2 px-3 focus:outline-none focus:border-blue-400`}
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
  required
  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
  onChange={handleInputChange}
/>

        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="block text-gray-600">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phonenumber" 
            required
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
            required
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
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-center text-white w-full font-semibold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
      <div className="mt-3 text-center items-center w-full">
        <p className="flex items-center w-80 mx-auto">
          <span className="border-b-2 border-b-orange-500 w-full"></span>
          <span className="text-gray-600 text-2xl mx-2 mb-1 capitalize">or</span>
          <span className="border-b-2 border-b-orange-500 w-full"></span>
        </p>
        <div className="flex gap-5 justify-evenly w-full md:w-80 mx-auto md:gap-5">
          <div className="border-2 px-4 py-3" onClick={comingSoon}> <FaGoogle className="text-red-500 " size={25} /> </div>
          <div className="border-2 px-4 py-3"  onClick={comingSoon}> <FaApple className="text-black " size={25} /> </div>
          <div className="border-2 px-4 py-3"  onClick={comingSoon}> <FaFacebook className="text-blue-500 " size={25} /> </div>
        </div>
      </div>
      <p className="mt-3 text-gray-600 text-sm text-center px-2 mb-4 md:mb-0">
        Already have an account? <Link to="/signin" className='text-orange-500 font-bold'>Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpComp;
