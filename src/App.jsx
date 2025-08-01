import "./App.css";
import HeroSlider from "./Components/HomeSlider/HeroSlider";
import MobileCard from "./Components/Grocery Items/GroceryCard";
import MobileItems from "./Components/Grocery Items/GroceryItems";
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
      <MobileItems />
      <CategoryCard />
    </>
  );
}

export default App;
