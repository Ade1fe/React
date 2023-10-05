import React, { useState } from 'react';
import { firestore } from '../firebase'
import { addDoc, doc, setDoc, collection } from 'firebase/firestore'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';
import pic from "../assets/wallpaperflare.com_wallpaper__1_-removebg-preview.png";

const SignUpPage = () => {

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
    } catch (err) {
      console.log('Sign Up failed!', 'error');
      console.error(err.message); 
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


// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
  
// }