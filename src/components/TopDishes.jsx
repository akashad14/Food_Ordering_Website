import React from "react";
import { useCart } from "../components/context/CartContext";
import { useNavigate } from "react-router-dom";

const dishes = [
  {
    id: 101,
    name: "Noodles",
    image: "/fooditem/dish1.jpg",
    price: 12,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 102,
    name: "Veg Salad",
    image: "/fooditem/dish2..jpg",
    price: 18,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 103,
    name: "Dessert",
    image: "/fooditem/dish3.jpg",
    price: 16,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 104,
    name: "Sandwich",
    image: "/fooditem/dish4.jpg",
    price: 24,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 105,
    name: "Greek Salad",
    image: "/fooditem/dish5.jpg",
    price: 12,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 106,
    name: "Pasta",
    image: "/fooditem/dish6.jpg",
    price: 18,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 107,
    name: "Cake",
    image: "/fooditem/dish7.jpg",
    price: 16,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 108,
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
  const navigate = useNavigate();

  const isLoggedIn =
    !!localStorage.getItem("token") &&
    !!localStorage.getItem("user");

  const getQuantityFromCart = (id) => {
    if (!isLoggedIn) return 0;
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) =>
          dish.name.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const handleAdd = (dish) => {
    if (!isLoggedIn) {
      navigate("/signup");
      return;
    }

    addToCart({
      id: dish.id,
      name: dish.name,
      price: Number(dish.price),
      image: dish.image,
    });
  };

  const handleDecrease = (dish) => {
    if (!isLoggedIn) {
      navigate("/signup");
      return;
    }

    const existing = cartItems.find((i) => i.id === dish.id);
    if (!existing) return;

    if (existing.quantity > 1) {
      updateQuantity(dish.id, existing.quantity - 1);
    } else {
      removeFromCart(dish.id);
    }
  };

  return (
    <section className="px-4 md:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Top dishes near you
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => {
            const cartQty = getQuantityFromCart(dish.id);

            return (
              <div
                key={dish.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      type="button"
                      disabled={!isLoggedIn || cartQty === 0}
                      onClick={() => handleDecrease(dish)}
                      className={`w-7 h-7 flex items-center justify-center rounded-full
                        ${
                          cartQty === 0 || !isLoggedIn
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-red-100 text-red-500 hover:bg-red-200"
                        }`}
                    >
                      –
                    </button>

                    <span>{cartQty}</span>

                    <button
                      type="button"
                      onClick={() => handleAdd(dish)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                    >
                      +
                    </button>
                  </div>

                  <h3 className="text-lg font-semibold">{dish.name}</h3>

                  <div className="flex items-center text-orange-400 text-sm mb-1">
                    {"★".repeat(dish.rating)}
                    {"☆".repeat(5 - dish.rating)}
                  </div>

                  <p className="text-gray-600 text-sm">
                    {dish.description}
                  </p>

                  <p className="text-orange-600 font-semibold mt-2">
                    ${dish.price.toFixed(2)}
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
