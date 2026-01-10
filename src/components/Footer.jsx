import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white relative overflow-hidden">

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/food-pattern.png')] bg-repeat" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold italic">
              Mac<span className="text-red-500">k</span>a!
            </h2>

            <p className="text-gray-400 text-sm mt-3 max-w-sm">
              Download our app and enjoy delicious food anytime, anywhere.
            </p>

            {/* APP BUTTONS */}
            {/* <div className="flex gap-4 mt-6 flex-wrap">
              <button className="flex items-center gap-2 bg-black border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <FaApple size={20} />
                <span className="text-xs">
                  Download on the <br />
                  <strong>App Store</strong>
                </span>
              </button>

              <button className="flex items-center gap-2 bg-black border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <FaGooglePlay size={18} />
                <span className="text-xs">
                  Get it on <br />
                  <strong>Google Play</strong>
                </span>
              </button>
            </div> */}

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-sm text-gray-400">Follow us:</span>
              <FaFacebookF className="hover:text-red-500 cursor-pointer" />
              <FaXTwitter className="hover:text-red-500 cursor-pointer" />
              <FaInstagram className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* HELP */}
          <div>
            <h4 className="font-semibold mb-4">Help & Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Contact Us</li>
              <li>Macka</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* NUTRITION */}
          <div>
            <h4 className="font-semibold mb-4">Nutrition</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Menu</li>
              <li>Allergens</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h4 className="font-semibold mb-4">Our Policies</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookies & Ads Policy</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 Macka Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
