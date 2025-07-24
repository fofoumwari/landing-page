// src/components/Boutons.jsx
import React from 'react';

const Boutons = () => {
  return (
    <section id="about" className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Heading */}
          <div className="flex flex-col justify-center border-r border-gray-300 pr-6 ">
           <h1 className="text-4xl font-bold text-primaryColor-50 mb-4">About Us</h1>
            <h3 className="text-3xl font-semibold text-gray-800">
              We offer creative working environments that suit your business.
            </h3>
          </div>

          {/* Right: Paragraph */}
          <div className="pl-6">
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
              conubia leo rutrum praesent dui turpis lobortis, vulputate pellentesque
              tristique primis cum tincidunt placerat maecenas, velit metus fermentum eget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boutons;
