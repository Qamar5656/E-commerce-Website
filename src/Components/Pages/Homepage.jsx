import React, { useState } from "react";
import TopNavbar from "../Navbar/TopNavbar";
import Navbar from "../Navbar/Navbar";
import NavbarItems from "../Navbar/NavbarItems";
import HomeSlider from "../HomeSlider/HeroSlider";
import GroceryItemsMain from "../Grocery Items/GroceryItemsMain";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div>
        <TopNavbar />
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <NavbarItems />
        <HomeSlider />
        <GroceryItemsMain searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default Homepage;
