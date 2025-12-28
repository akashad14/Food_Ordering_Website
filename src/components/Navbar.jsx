import { useState } from "react";
import { FaSearch, FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Signup from "./Signup";
import { useCart } from "../pages/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  // const [showSignIn, setShowSignIn] = useState(false);

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="w-full px-4 py-4 bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold font-mono text-orange-600">
          Food Corner
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-700 uppercase p-2 ">
          <li className="p-2 rounded-xl hover:bg-amber-100">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 rounded-xl hover:bg-amber-100">
            <Link to="/fullmenu">Menu</Link>
          </li>
          <li className="p-2 rounded-xl hover:bg-amber-100">
            <Link to="/About">About</Link>
          </li>
          <li className="p-2 rounded-xl hover:bg-amber-100">
            <Link to="/contact">contact us</Link>
          </li>
        </ul>

        {/* Icons & Sign In */}
        <div className="hidden md:flex items-center gap-4">
          <FaSearch className="text-xl text-gray-600 cursor-pointer" />
          <Link to="/Cart" className="relative">
            <FaShoppingBasket className="text-2xl text-gray-700 cursor-pointer" />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
          <button
            className="border border-gray-400 px-4 py-1 rounded-full text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => navigate("/signup")}
          >
            Sign In
          </button>

          {/* Signup Modal */}
          {/* {showSignIn && (
            <div className="fixed inset-0  flex items-center justify-center z-50">
              <button
                className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-black"
                onClick={() => setShowSignIn(false)}
                x
              >
                &times;
              </button>

              <Signup />
            </div>
          )} */}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm text-gray-700 px-4 uppercase">
          <a href="/" className=" w-fit">
            Home
          </a>
          <a href="/fullmenu">Menu</a>
          <a href="/About">About</a>
          <a href="/contact">Contact us</a>
          <div className="flex gap-4 items-center mt-2">
            <FaSearch className="text-xl text-gray-600 cursor-pointer" />
            <FaShoppingBasket className="text-xl text-gray-600 cursor-pointer" />

            <button
              onClick={() => {
                navigate("/signup");
                setMenuOpen(false);
              }}
              className="border border-gray-400 px-4 py-1 rounded-full text-sm text-gray-800 hover:bg-gray-100"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
