import React from "react";
import { useCart } from "../../components/context/CartContext";

const MenuCard = ({ item }) => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();

  const cartItem = cartItems.find((c) => c.id === item.id);

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      image: item.image,
      quantity: 1,
    });
  };

  const handleIncrease = () => {
    updateQuantity(item.id, cartItem.quantity + 1);
  };

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      removeFromCart(item.id); // ✅ remove item when quantity is 1
    } else {
      updateQuantity(item.id, cartItem.quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{item.name}</h3>

        <p className="text-gray-500 text-sm mb-4">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          {/* PRICE */}
          <span className="text-xl font-bold text-[#F23827]">
            ${item.price}
          </span>

          {/* CART ACTION */}
          {!cartItem ? (
            <button
              onClick={handleAdd}
              className="bg-[#F23827] text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-red-600 transition"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex items-center bg-[#ff6a00] text-white rounded-full px-4 py-1 gap-4">
              <button
                onClick={handleDecrease}
                className="text-xl font-bold"
              >
                −
              </button>

              <span className="font-semibold">
                {cartItem.quantity}
              </span>

              <button
                onClick={handleIncrease}
                className="text-xl font-bold"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
