import React from "react";
import { Heart, Zap, Users, CheckCircle } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-10 h-10 text-red-600" />,
    title: "Quality First",
    description:
      "We never compromise on the quality of our ingredients and service",
  },
  {
    icon: <Zap className="w-10 h-10 text-red-600" />,
    title: "Fast Delivery",
    description:
      "Your food arrives hot and fresh, guaranteed within 30 minutes",
  },
  {
    icon: <Users className="w-10 h-10 text-red-600" />,
    title: "Community",
    description:
      "We're building a community of food enthusiasts and local businesses",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-red-600" />,
    title: "Reliability",
    description:
      "Count on us for consistent, dependable service every time",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-[#FFE6D6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-red-200 p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
