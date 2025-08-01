import "./App.css";
import HeroSlider from "./Components/HomeSlider/HeroSlider";
import GroceryCard from "./Components/Grocery Items/GroceryCard";
import GroceryItems from "./Components/Grocery Items/GroceryItems";
import Navbar from "./Components/Navbar/Navbar";
import NavbarItems from "./Components/Navbar/NavbarItems";
import TopNavbar from "./Components/Navbar/TopNavbar";
// import Todolist from "./Components/TodoList Section/Todolist";

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <NavbarItems />
      {/* <Todolist /> */}
      <HeroSlider />
      <GroceryItems />
      {/* <CategoryCard /> */}
    </>
  );
}

export default App;
