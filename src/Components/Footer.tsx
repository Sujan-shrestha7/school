import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          GET CONNECTED WITH US
        </h2>
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="#" className="hover:text-white transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 my-8" />

      {/* Links and Newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About MAXHUB</a></li>
            <li><a href="#" className="hover:text-white">Awards</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* News & Events */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">News & Events</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Blogs</a></li>
          </ul>
        </div>

        {/* Customer Stories */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Customer Stories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your E-mail Address"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-white text-black px-4 rounded-r-md font-semibold hover:bg-gray-200">
              SUBMIT
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Sign up to receive MAXHUB marketing emails. You can modify your subscription or unsubscribe at any time.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            21076 Bake Parkway, Suite 106, Lake Forest, CA 92630
          </p>
        </div>
      </div>

      {/* Bottom Policy Links */}
      <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p className="mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Web Policy</a> |{" "}
          <a href="#" className="hover:text-white">Cookies Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
