import React from "react";
import Cart from "./Cart";
// import useCartStore from "../store/cartStore"; // <-- import Zustand store

const CartPage = () => {
  return (
    <div className="container mx-auto py-6">
      <Cart />
    </div>
  );
};

export default CartPage;
