import React from "react";
import { useCart } from "../components/context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleIncrement = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-yellow-600">
                     ${Number(item.price).toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => handleDecrement(item)}>
                  <FaMinus />
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => handleIncrement(item)}>
                  <FaPlus />
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-bold text-xl mt-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
