import React from "react";
import { useCart } from "../../components/context/CartContext";

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover rounded-t-xl"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg text-red-600">
            ${item.price}
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
