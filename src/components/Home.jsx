import MenuPage from './MenuPage'


export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-8">
      <div
        className="relative rounded-xl overflow-hidden w-full max-w-7xl mx-auto h-[500px] md:h-[550px] bg-cover bg-center flex items-center mt-10"
        style={{
          backgroundImage:
            "url('/food images/hero-img1.jpg')" 
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 text-white px-6 md:px-12 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Order your <br /> favourite food here
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-6">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
            ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate
            your dining experience, one delicious meal at a time.
          </p>
          <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            View Menu
          </button>
        </div>
      </div>
      <MenuPage/>
     
    </section>
  );
}
