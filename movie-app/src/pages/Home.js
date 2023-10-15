
import CarouselOne from "./components/CarouselOne";
import Footerr from "./components/Footerr";
import ShowDataMovies from "./components/ShowDataMovies";
// eslint-disable-next-line
import LoginPage from "./pages/LoginPage";

function Home() {
  return (
    <div className="App">
    <CarouselOne />
    <ShowDataMovies />
    <Footerr />
    {/* <LoginPage /> */}
    </div>
  );
}


export default Home
