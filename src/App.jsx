import "./App.css";
import CategoryCard from "./Components/Categories Section/CategoryCard";
import HeroSlider from "./Components/HomeSlider/HeroSlider";
import MobileCard from "./Components/Mobile Section/MobileCard";
import MobileItems from "./Components/Mobile Section/MobileItems";
import Navbar from "./Components/Navbar/Navbar";
import NavbarItems from "./Components/Navbar/NavbarItems";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Todolist from "./Components/TodoList Section/Todolist";

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <NavbarItems />
      <Todolist />
      <HeroSlider />
      <MobileItems />
      {/* <CategoryCard /> */}
    </>
  );
}

export default App;
