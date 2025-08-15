import React, { useState } from "react";
import MobileCard from "./GroceryCard";
import { useNavigate } from "react-router-dom";

const MobileItems = ({ searchQuery }) => {
  const items = [
    {
      model_name: "Mobile 1",
      price: "$9.99",
      description: "This is the description for the mobile 1.",
      image: "/src/assets/imgs/dry_fruit.webp",
    },
    {
      model_name: "Mobile 2",
      price: "$8.49",
      description: "This is the description for the mobile 2.",
      image: "/src/assets/imgs/grocery.webp",
    },
    {
      model_name: "Mobile 3",
      price: "$8.49",
      description: "This is the description for the mobile 3",
      image: "/src/assets/imgs/grocery.webp",
    },
    {
      model_name: "Mobile 4",
      price: "$10.99",
      description: "This is the description for the mobile 4",
      image: "/src/assets/imgs/mobile.webp",
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
      <h1 className="text-2xl font-bold mb-4 py-4">Sample Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <MobileCard
              key={index}
              data={item}
              onClick={handleCardClick}
              className="py-3"
            />
          ))
        ) : (
          <p className="text-center text-tertiary col-span-full">
            No items found.
          </p>
        )}
      </div>
      {visibleItems < items.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-secondary text-light rounded hover:bg-secondary cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileItems;
