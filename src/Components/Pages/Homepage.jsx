import React, { useState } from "react";
import TopNavbar from "../Navbar/TopNavbar";
import Navbar from "../Navbar/Navbar";
import NavbarItems from "../Navbar/NavbarItems";
import HomeSlider from "../HomeSlider/HeroSlider";
import GroceryItemsMain from "../Grocery Items/GroceryItemsMain";
import Footer from "../Footer/Footer";
import SignUp from "../Forms/SignUp";
import SignIn from "../Forms/SignIn";
import Chatbot from "../models/Chatbot";

const Homepage = () => {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [signInVisible, setSignInVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <>
      <div>
        <TopNavbar />
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSignUpVisible={setSignUpVisible}
          setSignInVisible={setSignInVisible}
        />
        <NavbarItems />
        <HomeSlider />
        <GroceryItemsMain searchQuery={searchQuery} />

        {/* Chat toggle button */}
        <div
          onClick={handleChatToggle}
          role="button"
          aria-label="Toggle Chat"
          className="fixed bottom-4 right-4 bg-primary text-secondary p-3 rounded-full shadow-lg cursor-pointer z-50"
        >
          {showChat ? "✖" : "💬 Chat"}
        </div>

        {/* Render chatbot separately so it’s not confined to the toggle button's layout */}
        {showChat && <Chatbot />}

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
