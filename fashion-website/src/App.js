import React from 'react';
import Navbar from './components/Navbar';
import ArticleOne from './components/ArticleOne';
import ArticleTwo from './components/ArticleTwo';
import ArticleThree from './components/ArticleThree';
import ArticleFour from './components/ArticleFour';


function App() {
  return (
    <div className="App">
    <Navbar />

    <ArticleOne />
    <ArticleTwo />
    <ArticleThree />
    <ArticleFour />
    </div>
  );
}

export default App;
