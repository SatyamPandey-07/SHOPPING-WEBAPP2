import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-5 bg-[#0d0d0d] shadow-md shadow-[#0ff] rounded-b-xl">
      <Link to="/">
        <h1 className="text-[#0ff] font-extrabold text-2xl md:text-3xl tracking-wide cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#ff00ff]">
          REACT REDUX SHOP
        </h1>
      </Link>
      <ul className="flex items-center space-x-8 text-lg font-semibold">
        <Link to="/">
          <li
            className={`cursor-pointer transition-all duration-300 ${
              location.pathname === "/" ? "text-[#0ff] font-bold" : "text-white"
            } hover:text-[#ff00ff]`}
          >
            Home
          </li>
        </Link>
        <Link to="/cart">
          <li
            className={`cursor-pointer transition-all duration-300 ${
              location.pathname === "/cart"
                ? "text-[#0ff] font-bold"
                : "text-white"
            } hover:text-[#ff00ff]`}
          >
            Cart
          </li>
        </Link>
        <Link to="/signup">
          <li
            className={`cursor-pointer transition-all duration-300 ${
              location.pathname === "/signup"
                ? "text-[#0ff] font-bold"
                : "text-white"
            } hover:text-[#ff00ff]`}
          >
            Signup
          </li>
        </Link>
      </ul>
    </nav>
  );
}
