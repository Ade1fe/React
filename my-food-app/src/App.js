import Navbar from './components/Navbar';
import React from 'react';
import './index.css';
import ArticleOne from './components/ArticleOne';
import ArticleTwo from './components/ArticleTwo';
import ArticleThree from './components/ArticleThree';
import ArticleFour from './components/ArticleFour';
import ArticleFive from './components/ArticleFive';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ArticleOne />
     <ArticleThree />
     <ArticleTwo />
     <ArticleFour />
     <ArticleFive />
    </div>
  );
}

export default App;
