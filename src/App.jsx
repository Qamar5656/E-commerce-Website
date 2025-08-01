import "./App.css";
import HeroSlider from "./Components/HomeSlider/HeroSlider";
import MobileCard from "./Components/Grocery Items/GroceryCard";
import MobileItems from "./Components/Grocery Items/GroceryItems";
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
