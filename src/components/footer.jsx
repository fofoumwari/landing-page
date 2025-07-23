// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Business Description */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Business Cafe</h3>
          <p className="text-sm leading-relaxed">
            Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces. Elevate your business with flexible solutions tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
            <li><a href="#space" className="hover:text-blue-400">Space</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <p className="text-sm mb-2">📍 Kigali, Rwanda</p>
          <p className="text-sm mb-2">✉️ businesscafe@info.com</p>
          <p className="text-sm">📞 +250783787817</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-10 border-t pt-6 border-gray-700">
        Copyright © 2023 Business Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
