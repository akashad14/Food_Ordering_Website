import React, { useState } from 'react';
import MenuSection from './Menusection.jsx';
import TopDishes from './TopDishes';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <MenuSection onSelectCategory={setSelectedCategory} />
      <TopDishes selectedCategory={selectedCategory} />
    </div>
  );
}
