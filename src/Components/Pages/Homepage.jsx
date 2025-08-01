import React from "react";
import TopNavbar from "../Navbar/TopNavbar";
import Navbar from "../Navbar/Navbar";
import NavbarItems from "../Navbar/NavbarItems";
import HomeSlider from "../HomeSlider/HeroSlider";
import GroceryItemsMain from "../Grocery Items/GroceryItemsMain";

const Homepage = () => {
  return (
    <>
      <div>
        <TopNavbar />
        <Navbar />
        <NavbarItems />
        <HomeSlider />
        <GroceryItemsMain />
      </div>
    </>
  );
};

export default Homepage;
