import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-1 p-1 text-xl font-bold">Cart</h1>
      <button
        className="w-22 m-1 p-1 mb-3 bg-black rounded-lg text-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="flex flex-col border rounded h-auto p-2 m-auto w-5/12  bg-gray-100">
        {cartItems.length === 0 && (
          <h2 className="text-center font-semibold">Your Cart is empty, please add items to continue...</h2>
        )}
        <CategoryItems itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
