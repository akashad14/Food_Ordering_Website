import React from "react";
import { useCart } from "../components/context/CartContext";
import { useNavigate } from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Noodles",
    category: "Pasta",
    image: "/fooditem/dish1.jpg",
    price: 12,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 2,
    name: "Veg Salad",
    category: "Salad",
    image: "/fooditem/dish2..jpg",
    price: 18,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 3,
    name: "Dessert",
    category: "Desserts",
    image: "/fooditem/dish3.jpg",
    price: 16,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 4,
    name: "Sandwich",
    category: "Sandwich",
    image: "/fooditem/dish4.1.png",
    price: 24,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 5,
    name: "Greek Salad",
    category: "Salad",
    image: "/fooditem/dish5.jpg",
    price: 12,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 6,
    name: "Pasta",
    category: "Pasta",
    image: "/fooditem/dish6.jpg",
    price: 18,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 7,
    name: "Cake",
    category: "Cake",
    image: "/fooditem/dish7.jpg",
    price: 16,
    rating: 4,
    description:
      "Food provides essential nutrients for overall health and well-being",
  },
  {
    id: 8,
    name: "Rolls",
    category: "Rolls",
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

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === selectedCategory
        );

  const getQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleAdd = (dish) => {
    if (!isLoggedIn) return navigate("/signup");

    addToCart({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
    });
  };

  const handleDecrease = (dish) => {
    const item = cartItems.find((i) => i.id === dish.id);
    if (!item) return;

    item.quantity > 1
      ? updateQuantity(dish.id, item.quantity - 1)
      : removeFromCart(dish.id);
  };

  return (
    <section className="bg-[#FFFBF4] px-4 md:px-10 py-14 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Top dishes near you
        </h2>
        <p className="text-gray-500 mt-2 mb-10">
          Curated selection of the finest culinary creations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDishes.map((dish) => {
            const qty = getQty(dish.id);

            return (
              <div
                key={dish.id}
                className="bg-white rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  {/* <span className="absolute top-3 right-3 bg-white text-xs px-3 py-1 rounded-full shadow text-gray-600">
                    {dish.category}
                  </span> */}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    {dish.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {dish.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#F23827]">
                      ${dish.price.toFixed(2)}
                    </span>

                    {qty === 0 ? (
                      <button
                        onClick={() => handleAdd(dish)}
                        className="bg-[#F23827] hover:bg-orange-600 text-white px-6 py-2 rounded-3xl text-sm font-semibold"
                      >
                        Add
                      </button>
                    ) : (
                      <div className="flex items-center bg-orange-500 text-white rounded-3xl px-3 py-1">
                        <button
                          onClick={() => handleDecrease(dish)}
                          className="px-2 text-lg"
                        >
                          −
                        </button>
                        <span className="px-2 font-semibold">
                          {qty}
                        </span>
                        <button
                          onClick={() => handleAdd(dish)}
                          className="px-2 text-lg"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDishes.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No items found in this category
          </p>
        )}
      </div>
    </section>
  );
}
