import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CategoryCard from "./Components/Categories Section/CategoryCard";
import HeroSlider from "./Components/HomeSlider/HeroSlider";
import MobileCard from "./Components/Mobile Section/MobileCard";
import MobileItems from "./Components/Mobile Section/MobileItems";
import Navbar from "./Components/Navbar/Navbar";
import NavbarItems from "./Components/Navbar/NavbarItems";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Todolist from "./Components/TodoList Section/Todolist";
import Detailspage from "./Components/Mobile Section/Detailspage";

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <NavbarItems />
      <Todolist />
      <HeroSlider />

      {/* Wrap your routed components inside BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileItems />} />
          <Route path="/details" element={<Detailspage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
