import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-400">Products</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 transition-colors duration-200">Flutter</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">React</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">Android</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">iOS</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-400">Design to Code</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 transition-colors duration-200">Figma Plugin</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">Templates</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-400">Comparison</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 transition-colors duration-200">DhiWise vs Flutter</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">DhiWise vs Anima</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">DhiWise vs Bubble</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">DhiWise vs Retool</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">DhiWise vs Figma Dev Mode</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-400">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 transition-colors duration-200">About Us</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">Contact Us</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">Terms of Service</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">Services</li>
            <li className="hover:text-yellow-500 transition-colors duration-200">Privacy Policy</li>
          </ul>
        </div>
      </footer>

      <div className="bg-black text-center text-sm text-gray-400 py-4 shadow-inner">
        <p> All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
