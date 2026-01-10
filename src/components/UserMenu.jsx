import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

export default function UserMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* USER TRIGGER */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <img
          src="/user.png"
          alt="User"
          className="w-9 h-9 rounded-full object-cover"
        />
        <span className="hidden md:block text-sm font-medium text-slate-800">
          {user.name}
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border z-50 overflow-hidden">
          
          {/* USER INFO */}
          <div className="px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user.email}
            </p>
          </div>

          <div className="border-t" />

          {/* MENU ITEMS */}
          <button
            onClick={() => {
              navigate("/profile");
              setOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 text-slate-700"
          >
            <FaUser />
            Profile
          </button>

          <button
            onClick={() => {
              navigate("/cart");
              setOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 text-slate-700"
          >
            <FaShoppingCart />
            Cart
          </button>

          <div className="border-t" />

          {/* LOGOUT */}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
