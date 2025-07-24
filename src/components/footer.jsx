// src/components/Footer.jsx
import {Facebook, LayoutDashboard, Twitter,Linkedin,Instagram} from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 maax-w-6xl mx-auto">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
            <LayoutDashboard size={45} className="text-primaryColor-50 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Business Cafe</h3>
          <p className="text-sm leading-relaxed">
            Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces. Elevate your business with flexible solutions tailored to your needs.
          </p>
        <div className='p-4'></div>
          <div className='flex gap-4'>
          <div className="w-10 h-10 rounded-full border border-primary-500 flex items-center justify-center text-primaryColor-50 hover:bg-primary-100 transition">
            <Twitter  className='w-20 h-5'/>
             </div>
             <div className="w-10 h-10 rounded-full border border-primary-500 flex items-center justify-center text-primaryColor-50 hover:bg-primary-100 transition">
             <Facebook className='w-20h-5'/>
             </div>
             <div className="w-10 h-10 rounded-full border border-primary-500 flex items-center justify-center text-primaryColor-50 hover:bg-primary-100 transition">
            <Linkedin className='w-5 h-5'/>
            </div>
            <div className="w-10 h-10 rounded-full border border-primary-500 flex items-center justify-center text-primaryColor-50 hover:bg-primary-100 transition">
            <Instagram className='w-5 h-5'/>
            </div>
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;
