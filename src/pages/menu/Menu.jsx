import React, { useState } from "react";
import MenuCard from "./MenuCard";

const categories = ["All Items", "Burgers", "Pizza", "Salads", "Drinks", "Desserts"];

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: "12.99",
    category: "Burgers",
    image: "/menupage/burger2.1.png",
  },
  {
    id: 2,
    name: "Bacon Cheeseburger",
    description: "Double patty with crispy bacon and melted cheddar",
    price: "14.99",
    category: "Burgers",
    image: "/menupage/burger.png",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, basil, and tomato sauce",
    price: "13.99",
    category: "Pizza",
    image: "/menupage/pizza.png",
  },
   {
    id: 4,
    name: "Pepperoni Pizza",
    description: "Classic pizza loaded with pepperoni and cheese",
    price: "14.99",
    category: "Pizza",
    image: "/menupage/pizza2.jpg",
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Crisp romaine with parmesan and creamy dressing",
    price: "10.99",
    category: "Salads",
    image: "/menupage/salad.png",
  },
  {
    id: 6,
    name: "Greek Salad",
    description: "Fresh vegetables with feta cheese and olives",
    price: "11.99",
    category: "Salads",
    image: "/menupage/salad1.1.png",
  },
    {
    id: 7,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: "4.99",
    category: "Drinks",
    image: "/menupage/juice.png",
  },
  {
    id: 8,
    name: "Iced Coffee",
    description: "Smooth cold brew with ice",
    price: "5.99",
    category: "Drinks",
    image: "/menupage/coffe.png",
  },
  {
    id: 9,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate layer cake",
    price: "7.99",
    category: "Desserts",
    image: "/menupage/cake.png",
  },
  {
    id: 10,
    name: "Cheesecake",
    description: "Creamy NY style cheesecake",
    price: "8.99",
    category: "Desserts",
    image: "/menupage/cheesecake.png",
  }
];


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");

  const filteredItems =
    activeCategory === "All Items"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full">
      {/* MENU HEADER */}
      <div className="bg-[#F23827]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Delicious Menu
          </h1>
          <p className="text-white mt-4 text-lg max-w-xl">
            Explore our carefully crafted dishes made with fresh ingredients
          </p>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 flex gap-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg border whitespace-nowrap transition
                ${
                  activeCategory === cat
                    ? "bg-[#F23827] text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-red-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MENU ITEMS */}
      <div className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {filteredItems.map((item) => (
      <MenuCard key={item.id} item={item} />
    ))}
  </div>
</div>

    </section>
  );
};

export default Menu;
