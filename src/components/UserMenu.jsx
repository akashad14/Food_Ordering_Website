import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* User Info */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <img
          src="/user.png"
          alt="user"
          className="w-9 h-9 rounded-full object-cover"
        />
        <span className="text-sm font-medium hidden md:block">
          {user.name}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-white rounded-lg shadow-lg border z-50">
          <button
            onClick={() => {
              navigate("/profile");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Profile
          </button>

          <button
            onClick={() => {
              navigate("/cart");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            My Cart
          </button>

          <hr />

          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
