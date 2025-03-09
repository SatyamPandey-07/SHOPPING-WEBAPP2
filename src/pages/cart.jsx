import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center min-h-[80vh] bg-[#111] p-5">
      {cart && cart.length ? (
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* Cart Items */}
          <div className="flex flex-col justify-center items-center p-3 w-full">
            {cart.map((cartItem) => (
              <CartTile key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 bg-[#1a1a2e] text-white rounded-lg shadow-lg shadow-[#0ff] p-6 w-[300px]">
            <h1 className="font-extrabold text-2xl text-[#0ff]">Cart Summary</h1>
            <p className="text-lg">
              <span className="text-[#0ff] font-bold">Total Items:</span>
              <span> {cart.length}</span>
            </p>
            <p className="text-lg">
              <span className="text-[#0ff] font-bold">Total Amount:</span>
              <span> ${totalCart.toFixed(2)}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-[#0ff] font-bold text-2xl mb-5">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-[#0ff] text-black font-bold px-6 py-3 rounded-lg border-2 border-[#0ff] transition-all duration-300 hover:bg-[#ff00ff] hover:border-[#ff00ff] hover:text-white shadow-lg shadow-[#0ff]">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
