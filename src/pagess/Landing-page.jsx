import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-[url('https://images.freeimages.com/images/large-previews/9c2/cafe-early-morning-1253969.jpg')] bg-cover bg-center text-white py-32 px-4"
      id="home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center px-4">
        <h3>The best working space in Kigali.</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
     <span className='text-primaryColor-50'>Professional</span>,Creative,Flexible,Scalable<span className='text-primaryColor-50'>Workspace</span>
        </h2>
        <p className="text-xl mb-4">
          Choose from versatile options tailored to your needs.
          We Offer creative working environments
        </p>
        <button className="bg-primaryColor-50 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
