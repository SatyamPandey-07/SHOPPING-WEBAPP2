import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  function handleShopNow() {
    window.location.href = product.url; // Redirect to the product's purchase link
  }

  return (
    <div className="group flex flex-col items-center border-2 border-[#ff00ff] bg-[#0d0d0d] gap-3 p-4 h-[450px] mt-10 ml-5 rounded-xl shadow-lg shadow-[#0ff] transition-all duration-300 hover:scale-105">
      {/* Product Image with Zoom Effect */}
      <div className="h-[180px] w-full overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover h-full w-full rounded-md transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Title - Now Visible & Wrapped */}
      <div className="text-center">
        <h1 className="w-44 text-white font-bold text-lg leading-snug break-words">
          {product?.title}
        </h1>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col items-center w-full space-y-3">
        <button
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-[#ff00ff] text-white border-2 border-[#ff00ff] rounded-lg font-bold p-3 w-full transition-all duration-300 hover:bg-[#0ff] hover:text-black"
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
        <button
          onClick={handleShopNow}
          className="bg-[#00ff00] text-black border-2 border-[#00ff00] rounded-lg font-bold p-3 w-full transition-all duration-300 hover:bg-[#ff00ff] hover:text-white"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
