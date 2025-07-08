import React from 'react';

export default function About() {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/menu/item5.jpg" // replace with your image path
            alt="About Food Delivery"
            className="rounded-2xl shadow-lg w-full md:h-[400px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-4">About Our Service</h2>
          <p className="text-lg mb-4">
            We deliver delicious, freshly prepared meals straight to your doorstep. With a focus on quality ingredients and fast delivery, our platform connects you with top-rated restaurants in your area.
          </p>
          <p className="text-base text-gray-600">
            Whether you're craving spicy Indian, classic Italian, or healthy salads, we’ve got you covered. Order in seconds and enjoy hot meals in minutes — all with a single tap.
          </p>

          <button className="mt-6 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
