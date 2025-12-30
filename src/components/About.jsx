import React from "react";
import CoreValues from "../components/about/CoreValues";

const About = () => {
  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-6 pt-25 pb-15">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Food Corner
          </h1>
          <p className="text-white mt-4 text-lg max-w-xl">
            Your favorite destination for delicious food, delivered fast and fresh
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2020, Food Corner started with a simple mission:
              to bring the world's best restaurants straight to your doorstep.
              What began as a small operation has grown into a thriving
              community of food lovers and talented chefs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We believe that great food brings people together. That's why
              we partner only with restaurants that share our commitment to
              quality, freshness, and exceptional service.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/about.jpg"
              alt="Professional Kitchen"
              className="w-full max-w-lg rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <CoreValues />
    </section>
  );
};

export default About;
