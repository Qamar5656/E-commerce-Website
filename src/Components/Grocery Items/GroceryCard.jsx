import React from "react";
// import useCartStore from "../store/cartStore";
import useCartStore from "../Store/cartStore";

const GroceryCard = ({ data, onClick }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border-blue-500 border rounded-lg p-4 shadow">
      <img
        src={data.image}
        alt={data.model_name}
        className="w-full h-40 object-cover rounded"
        onClick={onClick}
      />
      <h2 className="text-lg font-bold">{data.model_name}</h2>
      <p className="text-gray-600">{data.description}</p>
      <p className="font-semibold">{data.price}</p>

      <button
        onClick={() => addToCart(data)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GroceryCard;
