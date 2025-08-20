import React, { useState } from "react";
import GroceryCard from "./GroceryCard";
import { useNavigate } from "react-router-dom";

const MobileItems = ({ searchQuery }) => {
  const items = [
    {
      model_name: "T-shirt",
      price: "$9.99",
      description: "This is the description of the T-shirt.",
      image: "/src/assets/imgs/shirt.webp",
    },
    {
      model_name: "T-shirt",
      price: "$8.49",
      description: "This is the description of the T-shirt.",
      image: "/src/assets/imgs/download.jpg",
    },
    {
      model_name: "T-shirt",
      price: "$8.49",
      description: "This is th description of the T-shirt.",
      image: "/src/assets/imgs/download.jpg",
    },
    {
      model_name: "T-shirt",
      price: "$10.99",
      description: "This is th description of the T-shirt.",
      image: "/src/assets/imgs/download.jpg",
    },
  ];

  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState(3);

  function handleClick() {
    setVisibleItems(items.length);
  }

  const handleCardClick = () => {
    navigate("/details");
  };

  const filteredItems = items.filter((item) =>
    item.model_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedItems = filteredItems.slice(0, visibleItems);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4 py-4">Garments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <GroceryCard
              key={index}
              data={item}
              onClick={handleCardClick}
              className="py-3 cursor-pointer"
            />
          ))
        ) : (
          <p className="text-center text-tertiary col-span-full">
            No items found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MobileItems;
