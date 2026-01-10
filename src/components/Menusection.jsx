import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "All",
    tag: "All",
    tagColor: "bg-gray-700",
    subtitle: "All Items",
    image: "/menu/item9.jpg",
  },
  {
    name: "Salad",
    tag: "Fresh",
    tagColor: "bg-green-500",
    subtitle: "Fresh & Healthy",
    image: "/menu/item1.jpg",
  },
  {
    name: "Rolls",
    tag: "Crispy",
    tagColor: "bg-orange-400",
    subtitle: "Crispy & Tasty",
    image: "/menu/item2.jpg",
  },
  {
    name: "Desserts",
    tag: "Sweet",
    tagColor: "bg-pink-400",
    subtitle: "Sweet Treats",
    image: "/menu/item3.jpg",
  },
  {
    name: "Sandwich",
    tag: "Hearty",
    tagColor: "bg-orange-500",
    subtitle: "Hearty & Filling",
    image: "/menu/item4.jpg",
  },
  {
    name: "Cake",
    tag: "Delightful",
    tagColor: "bg-pink-500",
    subtitle: "Delightful Bites",
    image: "/menu/item5.jpg",
  },
  {
    name: "Pure Veg",
    tag: "Plant-Based",
    tagColor: "bg-green-600",
    subtitle: "Plant-Based",
    image: "/menu/item6.jpg",
  },
  {
    name: "Pasta",
    tag: "Classic",
    tagColor: "bg-yellow-500",
    subtitle: "Classic Italian",
    image: "/menu/item7.jpg",
  },
];

export default function MenuSection({ onSelectCategory }) {
  const scrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const handleSelect = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const handleBrowseMenu = () => {
    navigate("/menu");
  };

  return (
    <section className="bg-gradient-to-b from-[#FFF6EA] to-[#FFFDF9] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Explore our menu
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
          Choose from a diverse menu featuring a delectable array of dishes,
          crafted to satisfy every craving and delight your taste buds.
        </p>

        {/* Slider */}
        <div className="relative mt-14">
          <button
            onClick={() => scroll("left")}
            className="flex absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 
             w-10 h-10 md:w-12 md:h-12 
             bg-white rounded-full shadow 
             items-center justify-center 
             hover:bg-gray-100 z-10"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scroll-smooth px-2 hide-scrollbar"
          >
            {menuItems.map((item) => {
              const isActive = activeCategory === item.name;

              return (
                <div
                  key={item.name}
                  onClick={() => handleSelect(item.name)}
                  className={`min-w-[180px] cursor-pointer transition ${
                    isActive ? "scale-105" : "opacity-90"
                  }`}
                >
                  <div
                    className={`relative mx-auto w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-4 ${
                      isActive ? "border-[#F23827]" : "border-transparent"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-36 h-36 rounded-full object-cover"
                    />

                    <span
                      className={`absolute bottom-2 right-2 text-xs text-white px-3 py-1 rounded-full ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>

                  <span
                    className={`inline-flex items-center gap-1 mt-3 text-sm font-medium ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    }`}
                  >
                    Explore <ChevronRight size={14} />
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scroll("right")}
            className="flex absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 
             w-10 h-10 md:w-12 md:h-12 
             bg-white rounded-full shadow 
             items-center justify-center 
             hover:bg-gray-100 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button
            onClick={handleBrowseMenu}
            className="inline-flex items-center gap-2 bg-[#F23827] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Browse Full Menu
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
