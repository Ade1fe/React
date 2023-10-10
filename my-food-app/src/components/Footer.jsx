import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] text-black pt-8 px-5">
      <div className="container mx-auto grid grid-cols-2 gap-5 md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
        <div className="mb-4 md:mb-0 col-span-2 md:col-span-3 lg:col-span-1">
          <h1 className="text-2xl font-bold text-orange-500 mb-1">
            <span className="text-black">Deife</span> <span className="text-orange-500">Foods</span>
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et quaerat facere quibusdam natus officia consequuntur amet reiciendis laborum nostrum atque, corporis hic alias explicabo.
          </p>
        </div>

        <ul className="col-span-1">
          <li className="text-lg font-semibold">Quick Links</li>
          <li>
            <a href="/" className="hover:text-gray-400 text-black">Menu</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400 text-black">Contact Us</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400 text-black">Sign Up</a>
          </li>
        </ul>

        <ul className="col-span-1">
          <li className="text-lg font-semibold">Services</li>
          <li>
            <Link to="/terms" className="hover:text-gray-400 text-black">Terms And Conditions</Link>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400 text-black">Fastest Food Delivery</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400 text-black">Refundable</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400 text-black">Blogs</a>
          </li>
        </ul>

        <ul className="col-span-2 md:col-span-1">
          <li className="text-lg font-semibold">Privacy Policy</li>
          <li>
            <Link to="/client" className="hover:text-gray-400 text-black">Client Review</Link>
          </li>
          <li>
            <Link to="/policy" className="hover:text-gray-400 text-black">Policies</Link>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400 text-black">Refundable</a>
          </li>
        </ul>
      </div>
      <h2 className='border-t-2 border-t-black mt-4 text-center uppercase text-xs pb-2'>@created by deife_syntax</h2>
    </footer>
  );
}

export default Footer;
