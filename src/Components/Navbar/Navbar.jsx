import React from "react";
import IconText from "./Icontext";

const Navbar = () => {
  return (
    <>
      <div className="container flex flex-col sm:flex-row justify-between py-5">
        <div className="py-3 md:py-5">
          <h1 className="text-secondary font-bold sm:text-lg md:text-lg lg:text-lg xl:text-3xl">
            MegaMart
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 ">
          <div className="flex items-center">
            <input
              type="search"
              className=" border bg-tertiary w-34 sm:w-40 md:w-60 lg:w-96 rounded-xl text-dark px-3 py-1 sm:py-2"
              placeholder="Search essentials, groceries and more..."
            />
            <span className=" bg-tertiary py-3 rounded-xl px-3 cursor-pointer">
              <i className="fa fa-search text-secondary"></i>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 sm:text-sm md:text-lg lg:text-lg xl:text-xl">
            <IconText
              className="fa-user text-secondary"
              text="Sign Up/Sign In"
            />
            <span className="hidden sm:flex items-center opacity-20">|</span>
            <IconText className="fa-shopping-cart text-secondary" text="Cart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
