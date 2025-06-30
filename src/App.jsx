import "./App.css";
import HeroSlider from "./Components/HomeSlider/HeroSlider";
import MobileItems from "./Components/Mobile Section/MobileItems";
import Navbar from "./Components/Navbar/Navbar";
import NavbarItems from "./Components/Navbar/NavbarItems";
import TopNavbar from "./Components/Navbar/TopNavbar";

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <NavbarItems />
      <HeroSlider />
      <Mobi />
    </>
  );
}

export default App;
