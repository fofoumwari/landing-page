import React from 'react';
//import { LayoutDashboard } from 'lucide-react';
const Hero = () => {
  return (
    <section
  className="relative bg-[url('https://images.freeimages.com/images/large-previews/9c2/cafe-early-morning-1253969.jpg')] bg-cover bg-center bg-no-repeat text-white h-[400px] md:h-[500px] lg:h-[600px]"
  id="home"
>
  <div className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-40 lg:py-52 h-full">
    <h3 className="text-lg md:text-xl lg:text-2xl mb-2">The best working space in Kigali.</h3>
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
      <span className="text-primaryColor-50">Professional</span>, Creative, Flexible, <span className="text-primaryColor-50">Workspace</span>
    </h2>
    <p className="text-base md:text-lg lg:text-xl mb-4 max-w-xl">
      Choose from versatile options tailored to your needs.<br />
      We Offer creative working environments
    </p>
    <button className="bg-primaryColor-50 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-base md:text-lg">
      Explore
    </button>
  </div>
</section>
  );
};

export default Hero;
