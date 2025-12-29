import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Profile = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      {/* User Info */}
      <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
        <img
          src={user.avatar || "https://i.pravatar.cc/100"}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Cart Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm font-medium">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
