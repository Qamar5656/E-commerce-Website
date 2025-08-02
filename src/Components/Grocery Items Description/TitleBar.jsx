import React, { useState } from "react";
import DescriptionComp from "./DescriptionComp";
import ReviewsComp from "./ReviewsComp";
import ShippingComp from "./ShippingComp";
import AboutSellerComp from "./AboutSellerComp";

const TitleBar = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-2/3 mt-7">
      {/* List items  */}
      <ul className="font-semibold text-gray-500 flex gap-12  py-3 border-2 rounded-lg border-gray-300 px-4">
        <li
          onClick={() => handleClick("description")}
          className={`cursor-pointer ${
            activeTab === "description"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-400"
          } `}
        >
          Description
        </li>
        <li
          onClick={() => handleClick("reviews")}
          className={`cursor-pointer ${
            activeTab === "reviews"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-400"
          } `}
        >
          Reviews
        </li>
        <li
          onClick={() => handleClick("shipping")}
          className={`cursor-pointer ${
            activeTab === "shipping"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-400"
          } `}
        >
          Shipping
        </li>
        <li
          onClick={() => handleClick("about-seller")}
          className={`cursor-pointer ${
            activeTab === "about-seller"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-400"
          } `}
        >
          About Seller
        </li>
      </ul>
      {/* Active Tabs */}
      <div>
        {activeTab === "description" && <DescriptionComp />}
        {activeTab === "reviews" && <ReviewsComp />}
        {activeTab === "shipping" && <ShippingComp />}
        {activeTab === "about-seller" && <AboutSellerComp />}
      </div>
    </div>
  );

  return (
    <>
      <div>
        <ul className="font-semibold text-gray-500 flex gap-12 py-6">
          <li className="cursor-pointer">Description</li>
          <li className="cursor-pointer">Reviews</li>
        </ul>
      </div>
    </>
  );
};

export default TitleBar;
