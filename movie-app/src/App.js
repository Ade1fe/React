
import CarouselOne from "./components/CarouselOne";
import Footerr from "./components/Footerr";
import MarqueeContent from "./components/MarqueeContent";
import ShowDataMovies from "./components/ShowDataMovies";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <MarqueeContent />
    <CarouselOne />
    <ShowDataMovies />
    <Footerr />
    {/* <LoginPage /> */}
    {/* <SignUpPage /> */}
    </div>
  );
}

export default App;
