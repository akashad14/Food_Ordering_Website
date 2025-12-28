import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup"); // not logged in
      return;
    }

    // Fetch user profile + cart
    axios
      .get("http://localhost:2025/api/auth/profile", {
        headers: { Authorization: token },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/signup");
      });
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* User Info */}
      <div className="flex flex-col items-center border-b pb-6">
        <img
          src={user.image}
          alt="Profile"
          className="w-24 h-24 rounded-full border mb-3"
        />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500">User ID: {user._id}</p>
      </div>

      {/* Cart Info */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">My Cart</h3>
        {user.cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {user.cart.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between border p-3 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} × ₹{item.price}
                    </p>
                  </div>
                </div>
                <p className="font-bold">₹{item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logout */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/signup");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
