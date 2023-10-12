import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  function comingSoon() {
    alert("Still working on this website");
}

  return (
    <footer className='bg-gray-900 mt-[100px] w-full py-10 px-3 gap-2 sm:px-4'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className='col-span-2 md:col-span-1'>
          <h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Deife-Luxe</h1>
          <p className='text-gray-300 mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim justo nec quam blandit,
            ac eleifend ligula tristique.
          </p>
        </div>

        <ul className='col-span-1'>
          <h2 className='text-cyan-300 text-lg font-semibold mb-2'>Useful Links</h2>
          <li><Link to="/aboutus" className='text-gray-300 hover:text-white' >About Us</Link></li>
          <li><h2 href="/careers" className='text-gray-300 hover:text-white' onClick={comingSoon}>Careers</h2></li>
          <li><h2 href="/news-articles" className='text-gray-300 hover:text-white' onClick={comingSoon}>News & Articles</h2></li>
          <li><h2 href="/wishlist" className='text-gray-300 hover:text-white' onClick={comingSoon}>My Wishlist</h2></li>
          <li><h2 href="/legal-notice" className='text-gray-300 hover:text-white' onClick={comingSoon}>Legal Notice</h2></li>
          <li><h2 href="/faq" className='text-gray-300 hover:text-white' onClick={comingSoon}>FAQ</h2></li>
        </ul>

        <ul className='col-span-1 '>
          <h2 className='text-cyan-300 text-lg font-semibold mb-2'onClick={comingSoon}>Customer Services</h2>
          <li><h2 href="/my-account" className='text-gray-300 hover:text-white' onClick={comingSoon}>My Account</h2></li>
          <li><h2 href="/checkout-page" className='text-gray-300 hover:text-white' onClick={comingSoon}>Checkout Page</h2></li>
          <li><h2 href="/help-center" className='text-gray-300 hover:text-white' onClick={comingSoon}>Help Center</h2></li>
          <li><h2 href="/terms-conditions" className='text-gray-300 hover:text-white' onClick={comingSoon}>Terms & Conditions</h2></li>
          <li><h2 href="/deliveries-refunds" className='text-gray-300 hover:text-white' onClick={comingSoon}>Deliveries & Refunds</h2></li>
          <li><h2 href="/cart-page" className='text-gray-300 hover:text-white' onClick={comingSoon}>Cart Page</h2></li>
        </ul>
      
        <div className='col-span-2 w-full md:col-span-4 sm:col-span-2 lg:col-span-1'>
          <h2 className='text-cyan-300 text-lg font-semibold mb-2' onClick={comingSoon}>Subscribe newsletter</h2>
          <p className='text-gray-300'>
            Enter your email to receive our latest updates and offers!
          </p>
          <div className='mt-2'>
            <input
              type='text'
              className='border-2 border-black px-2 py-1 rounded w-full'
              placeholder='Your email'
            />
            <button className='bg-cyan-300 text-black py-1 px-4 mt-2 rounded hover:bg-cyan-400'>
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
