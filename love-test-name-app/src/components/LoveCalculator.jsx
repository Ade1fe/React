import React, { useState } from 'react';
import marryImage from '../assets/6230355-removebg-preview.png';
import FriendImage from '../assets/4576223-removebg-preview.png';
import affectImage from '../assets/3d-illustration-hand-red-heart-icon.jpg';
import loveImage from "../assets/OK1BI40-removebg-preview.png"
import hateImage from "../assets/9079492.png"
import sibling from "../assets/6730260-removebg-preview.png"
import {FaWhatsapp} from "react-icons/fa"
import img from "c:\Users\addyp\Downloads\photo_6048657595088094195_y-removebg-preview.png"


function LoveCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [lovePercentage, setLovePercentage] = useState(null);
  const [error, setError] = useState('');

  const calculateLove = () => {
    if (name1.trim() === '' || name2.trim() === '') {
      alert('Please enter both names before calculating love.');
      return;
    }

    if (!isValidInput(name1) || !isValidInput(name2)) {
      setError('Please enter valid names (letters only).');
      return;
    }

    const name1Lower = name1.toLowerCase().replace(/\s/g, '');
    const name2Lower = name2.toLowerCase().replace(/\s/g, '');

    const name1Chars = name1Lower.split('');
    const name2Chars = name2Lower.split('');

    for (const char of name1Chars) {
      if (name2Chars.includes(char)) {
        name1Chars.splice(name1Chars.indexOf(char), 1);
        name2Chars.splice(name2Chars.indexOf(char), 1);
      }
    }

    const totalCharsLeft = name1Chars.length + name2Chars.length;
    const flamesOrder = ['Friendship', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];

    const resultIndex = (totalCharsLeft % flamesOrder.length) - 1;
    const result = flamesOrder[resultIndex < 0 ? flamesOrder.length - 1 : resultIndex];

    setLovePercentage(result);
    setError('');
  };

  const isValidInput = (input) => {
    const pattern = /^[a-zA-Z\s]*$/;
    return pattern.test(input);
  };

  const resultInfo = {
    Friendship: {
      text: "You have a great friendship!",
      image: FriendImage,
    },
    Love: {
      text: "It's true love!",
      image: loveImage,
    },
    Affection: {
      text: "You share deep affection!",
      image: affectImage,
    },
    Marriage: {
      text: "A match made in heaven!",
      image: marryImage,
    },
    Enemy: {
      text: "Uh-oh, not a great match!",
      image: hateImage,
    },
    Sibling: {
      text: "You're like siblings!",
      image: sibling,
    },
  };

  const shareOnWhatsApp = () => {
    const message = `Check out our love percentage on Love Calculator Pro: ${lovePercentage}% - ${resultInfo[lovePercentage].text}`;
    const whatsappLink = `whatsapp://send?text=${encodeURIComponent(message)}`;
    
    // Try to open the WhatsApp link, but provide a fallback link for other cases
    if (navigator.share) {
      // If the browser supports the Web Share API, use it as a fallback
      navigator.share({
        title: 'Share on WhatsApp',
        text: message,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Sharing failed', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open('https://web.whatsapp.com/', '_blank');
    }
  };
  

  return (
    <div className=" flex items-center justify-center mt-[10px]">
      <div className="bg-white p-8 ">
        <img src="" className='w-20 h-20 object-contain' alt="" />
        <div className="text-center mb-4">
          <h1 className="text-4xl font-extrabold text-purple-600">
            Love Calculator Pro
          </h1>
          <p className="text-gray-600">Find out your love percentage</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-purple-600"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Partner's Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-purple-600"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <button
          className="w-full py-3 mt-6 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none"
          onClick={calculateLove}
        >
          Calculate Love
        </button>
        {lovePercentage !== null && (
          <div className="mt-6 text-center">
            <div className="relative h-10 rounded-full bg-gray-300">
              <div
                className="absolute h-10 rounded-full bg-purple-600"
                style={{ width: `${lovePercentage}%` }}
              ></div>
            </div>
            <p className="mt-3 text-3xl font-extrabold text-purple-600">
              {lovePercentage}%
            </p>
            <img
              src={resultInfo[lovePercentage].image}
              alt={resultInfo[lovePercentage].text}
              className="mt-4 mx-auto"
              style={{ maxWidth: '100px' }}
            />
            <p className="text-gray-600">{resultInfo[lovePercentage].text}</p>
            <div className="mt-4 mx-auto w-fit">
              <button
                className="px-4 py-2 flex mx-0 items-center gap-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
                onClick={shareOnWhatsApp}
              >
               <span> Share on</span> <FaWhatsapp size={20} />
              </button>
            </div>
          </div>
        )}
        <hr className="my-6 border-t border-gray-300" />
        <section>
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            How It Works
          </h2>
          <p className="text-gray-600">
            Our advanced algorithm calculates your love compatibility based on
            the names you provide. It's fun, entertaining, and who knows, maybe
            it's a glimpse into your future!
          </p>
        </section>
        <hr className="my-6 border-t border-gray-300" />
        <section>
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Privacy and Terms
          </h2>
          <p className="text-gray-600">
            By using this app, you agree to our{' '}
            <a href="/privacy-policy" className="text-purple-600">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-of-use" className="text-purple-600">
              Terms of Use
            </a>
            .
          </p>
        </section>
        <footer className="mt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Love Calculator Pro</p>
        </footer>
      </div>
    </div>
  );
}

export default LoveCalculator;
