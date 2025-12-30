import React from "react";
import { useCart } from "../../pages/CartContext";

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden border">
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"
      />

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {item.name}
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          {item.description}
        </p>

        {/* PRICE & BUTTON */}
        <div className="flex items-center justify-between">
          <span className="text-red-600 text-2xl font-bold">
            ${item.price}
          </span>

          <button
            onClick={() => addToCart(item)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
