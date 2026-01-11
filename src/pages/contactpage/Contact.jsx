"use client";

import ContactInfo from "./Contactinfo";
import ContactForm from "./Contact-form";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fffaf7]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <div className="mb-20">
          <span className="inline-block bg-[#fff1e8] text-[#ff6a00] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hungry for Support?
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            We're here to help! Whether you have questions about your order,
            need restaurant recommendations, or want to become a delivery
            partner, we've got you covered.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
