import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO IMAGE */}
        <Link to="/" className="flex items-center">
          <img
            src="/web-logo.png"        // place logo inside /public
            alt="Macka Logo"
            className="h-45 w-auto object-contain"
          />
        </Link>

        {/* CENTER MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-black transition"
            >
              {item}
            </Link>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <FaSearch className="text-gray-600 cursor-pointer hover:text-black transition" />

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg text-gray-700" />
            {user && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F23827] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Divider */}
          <span className="h-6 w-px bg-gray-300" />

          {/* User */}
          {user ? (
            <UserMenu user={user} onLogout={logout} />
          ) : (
            <button
              onClick={() => navigate("/signup")}
              className="text-sm font-medium text-gray-700 hover:text-black transition"
            >
              Sign In
            </button>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
        user={user}
        cartCount={cartCount}
        onLogout={logout}
      />
    </nav>
  );
}
