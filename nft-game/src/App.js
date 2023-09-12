import React, { useState, useEffect } from 'react';
import ArticleFive from "./components/ArticleFive";
import ArticleFour from "./components/ArticleFour";
import ArticleOne from "./components/ArticleOne";
import ArticleThree from "./components/ArticleThree";
import ArticleTwo from "./components/ArticleTwo";
import Footer from "./components/Footer";

import MySVGComponent from "./components/MySVGComponent ";
import Navbar from "./components/Navbar";
import './index.css'


function App() {
  // State to control the visibility of the first and second divs
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  useEffect(() => {
    // Set a timer to hide the first div and show the second div after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setShowFirstDiv(false);
      setShowSecondDiv(true);
    }, 5000);

    // Clear the timer when the component unmounts (cleanup)
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {showFirstDiv ? (
        <div>
          <MySVGComponent />
        </div>
      ) : null}

      {showSecondDiv ? (
        <div className="">
          <Navbar />
          <ArticleOne />
          <ArticleTwo />
          <ArticleThree />
          <ArticleFour />
          <ArticleFive />
          <Footer />
        </div>
      ) : null}
    </>
  );
}

export default App;
