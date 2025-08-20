import React, { useState, useEffect } from "react";
import IconText from "./Icontext";
import { Link } from "react-router-dom";
// import useCartStore from "../store/cartStore"; // <-- import Zustand store
import useCartStore from "../Store/cartStore"; // <-- import Zustand store

const Navbar = ({
  setSignUpVisible,
  setSignInVisible,
  searchQuery,
  setSearchQuery,
}) => {
  const cart = useCartStore((state) => state.cart); // get cart from Zustand

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0); // total quantity

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="container flex flex-col sm:flex-row justify-between py-5">
      <div className="py-3 md:py-5">
        <h1 className="text-secondary font-bold sm:text-lg md:text-lg lg:text-lg xl:text-3xl">
          MegaMart
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-6 ">
        {/* Search */}
        <div className="flex items-center">
          <input
            type="search"
            className=" border w-34 sm:w-40 md:w-60 lg:w-96 text-dark px-3 py-1 sm:py-2.5 rounded-l-lg"
            placeholder="Search essentials, groceries and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="border bg-primary py-2.5 px-3 cursor-pointer">
            <i className="fa fa-search text-secondary"></i>
          </span>
        </div>

        {/* Auth + Cart */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 sm:text-sm md:text-lg lg:text-lg xl:text-xl">
          <button
            onClick={() => {
              setSignUpVisible(true);
              setSignInVisible(false);
            }}
            className="font-bold cursor-pointer text-secondary hover:text-tertiary"
          >
            Sign Up
          </button>

          <button
            onClick={() => {
              setSignInVisible(true);
              setSignUpVisible(false);
            }}
            className="font-bold cursor-pointer text-secondary hover:text-tertiary"
          >
            Sign In
          </button>

          <span className="hidden sm:flex items-center opacity-20">|</span>

          {/* Cart with count */}
          <Link to="/cart" className="relative flex items-center">
            <IconText className="fa-shopping-cart text-secondary" text="Cart" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
