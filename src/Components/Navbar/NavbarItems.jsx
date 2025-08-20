import NavModal from "./NavModal";

const NavbarItems = () => {
  const navItems = [
    { title: "Groceries", dropdown: ["Fruits", "Vegetables", "Snacks"] },
    { title: "Premium Fruits", dropdown: ["Mango", "Berries", "Apples"] },
    { title: "Home & Kitchen", dropdown: ["Furniture", "Decor", "Appliances"] },
    { title: "Fashion", dropdown: ["Trending", "Popular"] },
    { title: "Electronics", dropdown: ["Fridge", "Cooler"] },
    { title: "Home Improvement", dropdown: ["Trending", "Popular"] },
    { title: "Sports, Toys & Luggage", dropdown: ["Cricket", "Football"] },
  ];

  return (
    <div className="container">
      <div className="flex justify-between gap-2 flex-wrap py-6">
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            {/* Hoverable nav title */}
            <NavModal title={item.title} />

            {/* Dropdown menu appears on hover */}
            {item.dropdown && (
              <ul className="absolute top-full left-0 mt-2 bg-tertiary border rounded-xl shadow-md w-34 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {item.dropdown.map((dropItem, i) => (
                  <li key={i} className="px-4 py-2 cursor-pointer">
                    <span className="px-4 py-2 hover:bg-secondary hover:text-light cursor-pointer transition-colors duration-200">
                      {dropItem}
                    </span>
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
