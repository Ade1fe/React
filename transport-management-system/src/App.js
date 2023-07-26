import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Navbar from "./components/Navbar";
import Transport from "./components/Transport";

import Phone from "./components/Phone";
// import Icons from "./components/Icons";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";
// import HeroTwo from "./components/HeroTwo";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <HeroTwo /> */}
      <Phone />
      <Transport />
      
      {/* <Icons />  */}
      <Newsletter />
      <Boxes />
      <Footer />
    </div>
  );
}

export default App;
