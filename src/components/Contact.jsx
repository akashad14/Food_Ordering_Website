import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center p-4 md:p-12">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input type="text" placeholder="Name :" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input type="email" placeholder="Email :" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input type="text" placeholder="Subject :" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Comments <span className="text-red-500">*</span>
            </label>
            <textarea placeholder="Message :" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-lg font-medium">
            Send Message
          </button>
        </form>
      </div>

     
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10">
        <h2 className="text-2xl font-semibold mb-2">Have questions?</h2>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in touch!</h3>
        <p className="text-gray-500 mb-6">
          We offer flexible delivery options tailored to your needs—whether it's urgent same-day supplies, or specialty products.
        </p>
        <div className="mb-4">
          <p className="font-medium">Email</p>
          <p className="text-orange-500">contact@example.com</p>
        </div>
        <div className="mb-4">
          <p className="font-medium">Phone</p>
          <p className="text-orange-500">+152 534-468-854</p>
        </div>
        <div className="mb-4">
          <p className="font-medium">Location</p>
          <p className="text-orange-500 cursor-pointer hover:underline">india</p>
        </div>
       <div className="flex space-x-4 mt-6 text-orange-600 text-xl">
          <a href="#" className="p-2 rounded-md bg-orange-100 hover:bg-orange-200">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 rounded-md bg-orange-100 hover:bg-orange-200">
            <FaInstagram />
          </a>
          <a href="#" className="p-2 rounded-md bg-orange-100 hover:bg-orange-200">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;