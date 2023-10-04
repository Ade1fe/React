import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(null); // null for initial state

  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // User is logged in, you can redirect to another page or perform other actions here.
      navigate(`/`);
      setLoginStatus('success'); // Set login status to success
    } catch (err) {
      console.error(err.message);
      setLoginStatus('error'); // Set login status to error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {/* Display success or error message */}
        {loginStatus === 'success' && (
          <div className="text-green-600 mb-4">Login Successful</div>
        )}
        {loginStatus === 'error' && (
          <div className="text-red-600 mb-4">Login Failed. Please try again.</div>
        )}
        <form onSubmit={handleLogin}>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
              className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Login button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 w-full text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>

            <Link
              to="/signup"
              className="block text-sm text-gray-700 font-semibold mt-4 hover:underline"
            >
              Don't have an account? <span className='text-red-500'>Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
