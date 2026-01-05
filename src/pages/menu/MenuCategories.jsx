import React from "react";

const MenuCategories = ({ categories, active, setActive }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-6 py-2 rounded-full whitespace-nowrap border transition
            ${
              active === cat
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-red-600"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
