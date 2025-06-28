import { useState } from "react";
import NavModal from "./NavModal";

const NavbarItems = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const navItems = [
    { title: "Groceries", dropdown: ["Fruits", "Vegetables", "Snacks"] },
    { title: "Premium Fruits", dropdown: ["Mango", "Berries", "Apples"] },
    { title: "Home & Kitchen", dropdown: ["Furniture", "Decor", "Appliances"] },
    { title: "Fashion", dropdown: ["trending", "popular"] },
    { title: "Electronics", dropdown: ["Fridge", "Cooler"] },
    { title: "Home Improvement", dropdown: ["trending", "popular"] },
    { title: "Sports, Toys & Luggage", dropdown: ["Cricket", "Football"] },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="flex justify-between gap-2 flex-wrap py-6">
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            <NavModal title={item.title} onClick={() => handleToggle(index)} />
            {openIndex === index && item.dropdown && (
              <ul className="absolute top-full left-0 mt-2 bg-tertiary border rounded-xl shadow-md w-34 z-10">
                {item.dropdown.map((dropItem, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-secondary hover:text-light cursor-pointer"
                  >
                    {dropItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarItems;
