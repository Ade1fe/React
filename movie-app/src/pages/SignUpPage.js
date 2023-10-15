

import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { doc, setDoc } from 'firebase/firestore';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth, firestore } from '../firebase';
import pic from "../assets/wallpaperflare.com_wallpaper__1_-removebg-preview.png";

const SignUpPage = () => {
  const navigate = useNavigate();
   const [loginStatus, setLoginStatus] = useState(null); // null for initial state
    const [error, setError] = useState('');
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

 
 // Check if the username and password meet the requirements
    if (
      formData.username.length < 5 ||
      !/^[a-zA-Z0-9\s@#$%^&*_+-]*$/.test(formData.username)
    ) {
      setError('Username must be at least 5 characters long and can only contain letters, numbers, and the following special characters: @ # $ % ^ & * _ + -');
      setLoginStatus('error');
      setLoading(false); // Clear loading state
      return;
    }

      // Check password length
      if (formData.password.length < 6) {
        setError('Password should be at least 6 characters long.');
        setLoginStatus('error');
        setLoading(false); // Clear loading state
        return;
      }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore, `users/${userId}`); 
      await setDoc(userDocRef, {
        username: formData.username,
        email: formData.email, 
      });
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      console.log('Sign Up Successful', 'success');
      setLoginStatus('success'); 
      navigate(`/login`);
    } catch (err) {
      setLoading(false);

      if (err.code === 'auth/invalid-email') {
        setError('Invalid email format. Please provide a valid email address.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email address is already in use. Please choose another one.');
      } else {
        setError('Sign Up failed! An error occurred. Please try again later.');
      }

      setLoginStatus('error');
    }
  };



  return (
    <div
    className="min-h-screen flex items-center justify-center LoginPage-background relative bg-red-700"
    style={{
      backgroundImage: `url(${pic})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
      <div className="bg-red-800 bg-opacity-50 p-8 rounded shadow-md w-96 relative z-10 text-white">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        <form onSubmit={handleSave}>

        {loginStatus === 'success' && (
            <div className="text-green-600 mb-4">Login Successful</div>
          )}
          {loginStatus === 'error' && (
            <div className="text-red-600 mb-4">{error}</div>
          )}


          <div className="mb-4">
            <label htmlFor="username" className="block text-white font-semibold">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
              className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:border-red-500"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white font-semibold">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-950  w-full text-white rounded-lg px-4 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Sign Up
            </button>
            <Link
          to="/login"
          className="block text-sm  font-semibold mt-4 hover:underline text-white"
        >
          Have an account? <span className='text-black'>Login</span>
        </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;


