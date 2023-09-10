// Header.js

import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
     
        <div className="text-purple-600 text-2xl font-extrabold">
          Ade-Ife
        </div>
     
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-purple-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-purple-600 hover:underline">
                Sign
              </a>
            </li>
            <li>
              <a href="/" className="text-purple-600 hover:underline">
                History
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
