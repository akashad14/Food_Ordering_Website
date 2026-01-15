import React from "react";
import { useCart } from "../components/context/CartContext";
import { FaPlus, FaMinus, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleIncrement = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;
  const deliveryFee = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + tax + deliveryFee;

  /* ================= EMPTY CART ================= */
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <FaShoppingCart className="text-4xl text-gray-400" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">
          Add items from your favorite restaurants to get started
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  /* ================= CART WITH ITEMS ================= */
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT – ORDER ITEMS */}
        <div className="lg:col-span-2 bg-[#f4fbff] rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Order Items</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-6"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.restaurant || "Restaurant"}
                  </p>
                  <p className="text-red-600 font-semibold mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Quantity */}
                <div className="flex items-center border rounded-lg px-3 py-1">
                  <button onClick={() => handleDecrement(item)}>
                    <FaMinus size={12} />
                  </button>
                  <span className="mx-4 font-semibold">
                    {item.quantity}
                  </span>
                  <button onClick={() => handleIncrement(item)}>
                    <FaPlus size={12} />
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="bg-[#f4fbff] rounded-2xl shadow p-6 h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-red-600">${total.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition">
            Proceed to Checkout
          </button>

          <button
            onClick={() => navigate("/menu")}
            className="w-full mt-4 py-3 border rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
