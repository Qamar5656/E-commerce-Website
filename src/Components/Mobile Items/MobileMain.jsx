import GroceryCard from "../Garments Items/GroceryCard";

const MobileMain = () => {
  const items = [
    {
      model_name: "Mobile",
      price: "$16.99",
      description: "This is the description of the T-shirt.",
      image: "/src/assets/imgs/samsung_a16.jpg",
    },
    {
      model_name: "Mobile 2",
      price: "$16.49",
      description: "This is the description of the T-shirt.",
      image: "/src/assets/imgs/samsung_a16.jpg",
    },
    {
      model_name: "Mobile 3",
      price: "$16.49",
      description: "This is th description of the T-shirt.",
      image: "/src/assets/imgs/samsung_a16.jpg",
    },
    {
      model_name: "Mobile 4",
      price: "$116.99",
      description: "This is th description of the T-shirt.",
      image: "/src/assets/imgs/samsung_a16.jpg",
    },
  ];
  const handleClick = () => {
    console.log("Card clicked");
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 py-3">Mobile Main Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((value, index) => {
            return (
              <GroceryCard
                key={index}
                data={value}
                onClick={handleClick}
                className="cursor-pointer py-3"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileMain;
