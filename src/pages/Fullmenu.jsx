import React, { useState } from 'react';
import { useCart } from './CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

const dishes = [
  {
    name: 'Breakfast Combo',
    image: '/fooditem/dish1.jpg',
    price: 24,
    oldPrice: 14,
    ingredients: 'Salmon / Veggies / Oil'
  },
  {
    name: 'Tomato Pie',
    image: '/fooditem/dish2.jpg',
    price: 22,
    oldPrice: 16,
    ingredients: 'Salmon / Veggies / Oil'
  },
  {
    name: 'Pasta',
    image: '/fooditem/dish3.jpg',
    price: 30,
    oldPrice: 20,
    ingredients: 'Salmon / Veggies / Oil'
  },
  {
    name: 'Sandwich',
    image: '/fooditem/dish4.jpg',
    price: 26,
    oldPrice: 18,
    ingredients: 'Salmon / Veggies / Oil'
  },
    {
    name: 'Breakfast Combo',
    image: '/fooditem/dish1.jpg',
    price: 24,
    oldPrice: 14,
    ingredients: 'Salmon / Veggies / Oil'
  },
  {
    name: 'Tomato Pie',
    image: '/fooditem/dish2.jpg',
    price: 22,
    oldPrice: 16,
    ingredients: 'Salmon / Veggies / Oil'
  },
  {
    name: 'Pasta',
    image: '/fooditem/dish3.jpg',
    price: 30,
    oldPrice: 20,
    ingredients: 'Salmon / Veggies / Oil'
  },
  {
    name: 'Sandwich',
    image: '/fooditem/dish4.jpg',
    price: 26,
    oldPrice: 18,
    ingredients: 'Salmon / Veggies / Oil'
  }
];

export default function FullMenu() {
  const { addToCart } = useCart();

  return (
    <div className="p-4 md:p-8 bg-white text-black">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
        Enjoy Restaurants <span className="text-yellow-500">Specialties</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
        {dishes.map((dish, index) => (
          <div key={index} className="flex items-center justify-between gap-4 border-b pb-4">
            <div className="flex gap-4 items-center">
              <img src={dish.image} alt={dish.name} className="w-20 h-20 rounded object-cover" />
              <div>
                <h3 className="text-lg font-semibold truncate w-36">{dish.name}</h3>
                <p className="text-sm text-gray-500">{dish.ingredients}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-yellow-500 font-bold text-lg">${dish.price.toFixed(2)}</p>
              <p className="text-gray-400 line-through text-sm">${dish.oldPrice.toFixed(2)}</p>
              <button
                onClick={() => addToCart(dish)}
                className="mt-2 px-4 py-1 text-sm bg-yellow-400 hover:bg-yellow-500 rounded font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}