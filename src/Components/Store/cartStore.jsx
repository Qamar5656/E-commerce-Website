import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.model_name === item.model_name
      );

      if (existingItem) {
        // If item exists, increase quantity
        return {
          cart: state.cart.map((i) =>
            i.model_name === item.model_name
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      // Otherwise, add new item with quantity 1
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (model_name) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.model_name !== model_name),
    })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
