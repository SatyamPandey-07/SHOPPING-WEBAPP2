import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center p-5 justify-between bg-[#1a1a2e] shadow-lg shadow-[#0ff] mt-2 mb-2 rounded-xl transition-transform transform hover:scale-105">
      <div className="flex p-3">
        <img
          src={cartItem?.image}
          className="h-28 w-28 object-cover rounded-lg border-2 border-[#0ff] shadow-md"
          alt={cartItem?.title}
        />
        <div className="ml-10 self-start space-y-3">
          <h1 className="text-xl text-[#0ff] font-bold">{cartItem?.title}</h1>
          <p className="text-lg text-white font-extrabold">${cartItem?.price}</p>
        </div>
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="bg-red-700 hover:bg-red-900 text-white border-2 border-red-500 rounded-lg font-bold px-5 py-2 transition-all duration-300"
      >
        Remove From Cart
      </button>
    </div>
  );
}
