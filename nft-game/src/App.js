import ArticleFive from "./components/ArticleFive";
import ArticleFour from "./components/ArticleFour";
import ArticleOne from "./components/ArticleOne";
import ArticleThree from "./components/ArticleThree";
import ArticleTwo from "./components/ArticleTwo";
import Navbar from "./components/Navbar";
import './index.css'


function App() {
  return (
    <div className="">
      <Navbar />
      <ArticleOne />
      <ArticleTwo />
      <ArticleThree />
      <ArticleFour />
      <ArticleFive />
    </div>
  );
}

export default App;
