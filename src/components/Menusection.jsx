const menuItems = [
  { name: 'Salad', image: '/menu/item1..jpg' },
  { name: 'Rolls', image: '/menu/item2.jpg' },
  { name: 'Deserts', image: '/menu/item3.jpg' },
  { name: 'Sandwich', image: '/menu/item4.jpg' },
  { name: 'Cake', image: '/menu/item5.jpg' },
  { name: 'Pure Veg', image: '/menu/item6..jpg' },
  { name: 'Pasta', image: '/menu/item7.jpg' },
  { name: 'Noodles', image: '/menu/item8.jpg' },
  { name: 'Sandwich', image: '/menu/item4.jpg' },
  { name: 'Cake', image: '/menu/item5.jpg' },
  { name: 'All', image: '/menu/item9..jpg' },
  
];


export default function MenuSection({ onSelectCategory }) {
  return (
    <section className="w-full px-4 md:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Explore our menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a diverse menu featuring a delectable array of dishes.
          </p>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-6 px-2 md:px-4 w-max">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => onSelectCategory(item.name)}
                className="flex flex-col items-center w-34 min-w-[100px] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-full object-cover border-2 border-gray-200 hover:scale-105 transition-transform"
                />
                <p className="mt-2 text-gray-700 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
