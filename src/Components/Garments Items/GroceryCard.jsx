import React from "react";
import useCartStore from "../Store/cartStore";

const GroceryCard = ({ data, onClick }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white transition-transform duration-200 hover:scale-[1.02]">
      {/* Image */}
      <div
        className="w-full h-48 overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={data.image}
          alt={data.model_name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {data.model_name}
        </h2>
        <p className="text-sm text-gray-600 mb-2">{data.description}</p>
        <p className="text-base font-bold text-blue-600 mb-4">{data.price}</p>

        {/* Button */}
        <button
          onClick={() => addToCart(data)}
          className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GroceryCard;
