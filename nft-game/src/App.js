import ArticleFour from "./components/ArticleFour";
import ArticleOne from "./components/ArticleOne";
import ArticleThree from "./components/ArticleThree";
import ArticleTwo from "./components/ArticleTwo";
import Navbar from "./components/Navbar";
import './index.css'


function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <ArticleOne />
      <ArticleTwo />
      <ArticleThree />
      <ArticleFour />
    </div>
  );
}

export default App;
