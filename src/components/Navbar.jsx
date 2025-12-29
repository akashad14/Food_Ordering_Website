import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingBasket } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-orange-600">
          Food Corner
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm uppercase">
          <Link to="/">Home</Link>
          <Link to="/fullmenu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <FaSearch className="text-xl cursor-pointer" />

          <Link to="/cart" className="relative">
            <FaShoppingBasket className="text-2xl" />
            {user && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <UserMenu user={user} onLogout={logout} />
          ) : (
            <button
              onClick={() => navigate("/signup")}
              className="border px-4 py-1 rounded-full"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
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
