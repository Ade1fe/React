import React from 'react';
import Navbar from './components/Navbar';
import ArticleOne from './components/ArticleOne';
import ArticleTwo from './components/ArticleTwo';
import ArticleThree from './components/ArticleThree';
import ArticleFour from './components/ArticleFour';
import AdvertContainer from './components/AdvertContainer';
import ArticleFive from './components/ArticleFive';
import ArticleSix from './components/ArticleSix';
import ShopFor from './components/ShopFor';
import Blog from './components/Blog';
import SecondSwiper from './components/SecondSwiper';
import Footer from './components/Footer';
import Notification from './components/Notification';


function App() {
  return (
    <div className="App">
    <Navbar />

    <ArticleOne />
    <ArticleTwo />
    <ArticleThree />
    <ArticleFour />
    <AdvertContainer />
    <ArticleFive />
    <ArticleSix />
    <ShopFor />
    <Blog />
    <SecondSwiper classnamee="px-4 mt-[100px]" />
  <Footer />
  <Notification />
    </div>
  );
}

export default App;
