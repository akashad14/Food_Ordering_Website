import { useState } from "react";

export default function Contactform() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* HEADER */}
      <div className="bg-[#F23827] p-8 text-white">
        <h2 className="text-3xl font-bold mb-1">Send us a Message</h2>
        <p className="text-sm opacity-90">
          We'll get back to you as soon as possible
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="p-10 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Your Name *"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Email Address *"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Subject</label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#ff6a00] outline-none"
          >
            <option value="">Select a topic...</option>
            <option>Order Issue</option>
            <option>Delivery</option>
            <option>Restaurant</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Message *</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Tell us how we can help..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#ff6a00] outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#F23827] text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>

        <p className="text-xs text-center text-gray-500">
          We typically respond within 24 hours
        </p>
      </form>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block font-semibold mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#ff6a00] outline-none"
      />
    </div>
  );
}
