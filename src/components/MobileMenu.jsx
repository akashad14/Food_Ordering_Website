import { Link, useNavigate } from "react-router-dom";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

export default function MobileMenu({
  isOpen,
  closeMenu,
  user,
  cartCount,
  onLogout,
}) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
      <div className="flex flex-col px-6 py-4 space-y-4 text-sm uppercase">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/fullmenu" onClick={closeMenu}>Menu</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <Link
          to="/cart"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <FaShoppingBasket />
          Cart
          {user && cartCount > 0 && (
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {user ? (
          <>
            <button
              onClick={() => {
                navigate("/profile");
                closeMenu();
              }}
              className="flex items-center gap-2"
            >
              <FaUser />
              Profile
            </button>

            <button
              onClick={() => {
                onLogout();
                closeMenu();
              }}
              className="text-left text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              navigate("/signup");
              closeMenu();
            }}
            className="border px-4 py-2 rounded text-center"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
