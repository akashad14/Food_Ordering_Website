// import MenuPage from "./MenuPage";

// export default function HeroSection() {
//   return (
//     <section className="w-full bg-[#F2F2F2]">
//       {/* HERO CONTAINER */}
//       <div className=" mx-auto px-4 md:px-8 pt-[80px]">
//         <div
//           className="relative overflow-hidden rounded-2xl
//                      min-h-[420px] md:min-h-[520px] lg:min-h-[620px]
//                      flex items-center bg-cover bg-center ml-5"
//           style={{
//             backgroundImage: "url('/food images/hero-img1.jpg')",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10" />

//           {/* CONTENT */}
//           <div className="relative z-20 px-6 md:px-12 max-w-xl text-white">
//             <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
//               Order your <br /> favourite food here
//             </h1>

//             <p className="text-sm md:text-lg text-white/90 mb-8">
//               Choose from a diverse menu featuring a delectable array of dishes
//               crafted with the finest ingredients and culinary expertise. Our
//               mission is to satisfy your cravings and elevate your dining
//               experience, one delicious meal at a time.
//             </p>

//             <button className="inline-flex items-center bg-white text-orange-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition">
//               View Menu
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MENU SECTION */}
//       <div className="mt-16">
//         <MenuPage />
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { ChevronRight, Zap, Clock, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Hide scroll hint once user scrolls past hero
      if (window.scrollY > window.innerHeight * 0.6) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-8 text-center lg:text-left animate-in fade-in duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            Fastest delivery in your area
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Delicious Food
            <span className="text-[#F23827]"> Delivered Fast</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Order from your favorite restaurants and enjoy hot, fresh meals
            delivered to your doorstep.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/menu")}
              className="px-8 py-3 bg-[#F23827] hover:bg-[#055902] text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              View Menu <ChevronRight size={18} />
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
              Download App
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Feature icon={<Zap />} title="Super Fast" sub="25 min delivery" />
            <Feature icon={<Clock />} title="Always Fresh" sub="Hot & ready" />
            <Feature icon={<Smile />} title="Best Quality" sub="4.8★ rated" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-md hidden lg:block animate-in fade-in duration-700 delay-200">
          <div
            className="relative aspect-square"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/30 backdrop-blur">
              <img
                src="/hero.jpg"
                alt="Delicious food delivery"
                className="w-full h-full object-cover animate-subtle-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 to-transparent" />
            </div>
            <div className="absolute -left-4 top-1/3 bg-white rounded-2xl shadow-xl p-4 max-w-xs transform -rotate-5 hover:rotate-0 transition-transform animate-float-left">
              <p className="text-sm font-semibold text-foreground">
                ⚡ Super Fast
              </p>
              <p className="text-xs text-muted-foreground">
                Get your order in 25 minutes
              </p>
            </div>

            {/* Floating badge - Right with animation */}
            <div className="absolute -right-4 bottom-1/3 bg-white rounded-2xl shadow-xl p-4 max-w-xs transform rotate-5 hover:rotate-0 transition-transform animate-float-right">
              <p className="text-sm font-semibold text-foreground">
                🎁 Free Delivery
              </p>
              <p className="text-xs text-muted-foreground">
                On orders over $25
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator – only at end of hero */}
      {showScrollHint && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex">
          <div className="flex flex-col items-center gap-1 text-gray-600">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronRight className="rotate-90" />
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- Feature Card ---------- */

function Feature({ icon, title, sub }) {
  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-xl border">
      <div className="text-orange-500 mb-2">{icon}</div>
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-gray-500">{sub}</p>
    </div>
  );
}
