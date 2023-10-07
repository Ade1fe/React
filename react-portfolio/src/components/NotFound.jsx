import React from 'react';
import bgImage from '../assets/photo_5929181771100961706_y-removebg-preview (1).png';

const NotFound = () => {
  return (
    <div
      className="relative flex flex-col px-4 items-center justify-center h-screen bg-gradient-to-r from-gray-50-500 to-gray-50-600"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
      }}
    >
      <div className="top-0 left-0 opacity-90 bg-black absolute w-full h-full z-10"></div>
      <h1 className="text-4xl sm:text-6xl font-bold text-purple-300 mb-6 text-center relative z-20">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-white mb-4 text-center relative z-20">
        Oops! Looks like the page you are looking for doesn't exist.
      </p>
      <p className="text-lg text-white mb-8 text-center relative z-20">
        Don't worry, our blog is coming soon. Stay tuned!
      </p>
    </div>
  );
};

export default NotFound;
