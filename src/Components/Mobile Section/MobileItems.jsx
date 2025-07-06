import React, { useState } from "react";
import MobileCard from "./MobileCard";

const GroceryItems = () => {
  const items = [
    {
      model_name: "Pepperoni Pizza",
      price: "$9.99",
      description: "A delicious pepperoni pizza with cheese and herbs.",
      image: "/src/assets/imgs/dry_fruit.webp",
    },
    {
      model_name: "Veggie Pizza",
      price: "$8.49",
      description: "Loaded with fresh vegetables and cheese.",
      image: "/src/assets/imgs/grocery.webp",
    },
    {
      model_name: "Veggie Pizza",
      price: "$8.49",
      description: "Loaded with fresh vegetables and cheese.",
      image: "/src/assets/imgs/grocery.webp",
    },
    {
      model_name: "BBQ Chicken Pizza",
      price: "$10.99",
      description: "Topped with BBQ chicken and mozzarella.",
      image: "/src/assets/imgs/mobile.webp",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(3);

  function handleClick() {
    setVisibleItems(items.length);
  }
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Grocery Items - Pizzas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.slice(0, visibleItems).map((item, index) => (
          <MobileCard key={index} data={item} />
        ))}
      </div>
      {visibleItems < items.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default GroceryItems;
