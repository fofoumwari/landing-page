import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50 flex-wrap">
      <div className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
        <div className="text-1xl font-bold text-black">
          Business <span className="text-primaryColor-50">cafe</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#space" className="text-gray-700 hover:text-blue-600 font-medium">Space</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primaryColor-50"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white shadow px-5 py-4 flex flex-col space-y-3">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setOpen(false)}>Home</a>
          <a href="#space" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setOpen(false)}>Space</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;