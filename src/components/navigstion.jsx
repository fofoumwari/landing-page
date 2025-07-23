// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-1xl font-bold text-black">Business <span className="text-primaryColor-50">cafe</span></div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#space" className="text-gray-700 hover:text-blue-600 font-medium">Space</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
