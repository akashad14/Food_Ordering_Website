import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Login({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>
          <label className="text-sm flex items-start gap-2 mt-2">
            <input type="checkbox" className="mt-1" />
            <span>
              By continuing, I agree to the <a href="#" className="text-blue-600 underline">terms of use</a> & <a href="#" className="text-blue-600 underline">privacy policy</a>.
            </span>
          </label>
        </form>
        <p className="text-center text-sm mt-4">
          Create a new account?{' '}
          <a href="#" className="text-red-500 font-semibold hover:underline">Click here</a>
        </p>
      </div>
    </div>
  );
}
