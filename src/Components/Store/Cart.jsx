// import useCartStore from "./Store/cartStore";
import useCartStore from "./cartStore";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="bg-black-50 fixed w-full inset-0 p-4 border rounded-lg bg-gray-100 shadow">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-2">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.model_name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>
                  {item.model_name} (x{item.quantity})
                </span>
              </div>
              <button
                onClick={() => removeFromCart(item.model_name)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
      <button
        onClick={clearCart}
        className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
