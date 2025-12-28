import React, { useState } from "react";
import { useCart } from "../pages/CartContext";
import { useNavigate } from "react-router-dom";  // ✅ Import navigation

const dishes = [
  {
    name: "Noodles",
    image: "/fooditem/dish1.jpg",
    price: 12,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    name: "Veg salad",
    image: "/fooditem/dish2..jpg",
    price: 18,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    name: "desert",
    image: "/fooditem/dish3.jpg",
    price: 16,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    name: "Sandwich",
    image: "/fooditem/dish4.jpg",
    price: 24,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    name: "Greek salad",
    image: "/fooditem/dish5.jpg",
    price: 12,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    name: "Pasta",
    image: "/fooditem/dish6.jpg",
    price: 18,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    name: "Cake",
    image: "/fooditem/dish7.jpg",
    price: 16,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    name: "Rolls",
    image: "/fooditem/dish8.jpg",
    price: 24,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
];

export default function TopDishes({ selectedCategory }) {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅ Hook for navigation

  const getQuantityFromCart = (name) => {
    const item = cartItems.find((item) => item.name === name);
    return item ? item.quantity : 0;
  };

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) =>
          dish.name.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const redirect = (dish) => {
    // const existing = cartItems.find((item) => item.name === dish.name);
    // if (existing) {
    //   updateQuantity(dish.name, existing.quantity + 1);
    // } else {
    //   addToCart(dish);
    // }

    // ✅ After adding to cart → navigate to sign in
    navigate("/Signup");
  };

  const decrease = (dish) => {
    const existing = cartItems.find((item) => item.name === dish.name);
    if (existing) {
      if (existing.quantity > 1) {
        updateQuantity(dish.name, existing.quantity - 1);
      } else {
        removeFromCart(dish.name);
      }
    }
  };

  return (
    <section className="px-4 md:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Top dishes near you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish, index) => {
            const cartQty = getQuantityFromCart(dish.name);
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      type="button"
                      onClick={() => decrease(dish)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 text-red-500 hover:bg-red-200"
                    >
                      –
                    </button>
                    <span>{cartQty}</span>
                    <button
                      type="button"
                      onClick={() => redirect(dish)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                    >
                      +
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold">{dish.name}</h3>
                  <div className="flex items-center text-orange-400 text-sm mb-1">
                    {"★".repeat(dish.rating)}{"☆".repeat(5 - dish.rating)}
                  </div>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                  <p className="text-orange-600 font-semibold mt-2">
                    ${dish.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
