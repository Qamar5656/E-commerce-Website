import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryCard from "./Components/Categories Section/CategoryCard";
import HeroSlider from "./Components/HomeSlider/HeroSlider";
import GroceryCard from "./Components/Grocery Items/GroceryCard";
import GroceryItems from "./Components/Grocery Items/GroceryItems";
import Navbar from "./Components/Navbar/Navbar";
import NavbarItems from "./Components/Navbar/NavbarItems";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Todolist from "./Components/TodoList Section/Todolist";
import Detailspage from "./Components/Mobile Section/Detailspage";
// import Todolist from "./Components/TodoList Section/Todolist";

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <NavbarItems />
      {/* <Todolist /> */}
      <HeroSlider />

      {/* Wrap your routed components inside BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileItems />} />
          <Route path="/details" element={<Detailspage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </BrowserRouter>
      <GroceryItems />
      {/* <CategoryCard /> */}
    </>
  );
}

export default App;
