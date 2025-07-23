import React from 'react';

const mission = () => {
  return (
    <section
      className="relative bg-[url('https://tse2.mm.bing.net/th/id/OIP.NUlwNjPkWPWiDx6B-3ZjyQHaEu?pid=Api&P=0&h=220')] bg-cover bg-center text-black py-32 px-4"
      id="missions"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-primaryColor-50/100">Our </span>Mission.
        </h1>
        <p className="text-xl mb-4 from-neutral-950">
          To serve high-quality coffee and delicious meals in a cozy and inspiring environment where people can relax.
          connect, and create meaningful experiences.
        </p>

        <div className='min-h-0.5 bg-primaryColor-50 mb-1 w-12 mx-auto'> </div>

      </div>
    </section>
  );
};

export default mission;
