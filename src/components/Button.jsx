import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4">
      
        <h2 className="text-3xl font-bold text-primaryColor-50">About Us</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 items-center text-center">
        {/* Column 1: Heading */}
        <h3 className="text-1xl font-bold text-gray-800">
          We offer creative working environments that suit your business.
        </h3>

        {/* Column 2: Vertical Line */}
        <div className="flex justify-center">
          <div className="h-90 w-px bg-blue-400"></div>
        </div>

        {/* Column 3: Paragraph */}
        <p className="text-gray-700 text-1xl leading-relaxed justify-normal">
        our cafe is more than just a place to grab a coffee.
        it's a community space designed to bring people together
        over fresh food, rich aromas, and meaningful connections.
        </p>
      </div>
    </section>
  );
};

export default About;
