// src/components/Services.jsx
import React from 'react';

const services = [
  {
    title: "breakfast",
    description: "We serve you your best start to the day.",
    image: "https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg", // Replace with actual image
  },
  {
    title: "Lunch",
    description: "We serve you a satisfying and nourishing lunch. ",
    image: "https://govima.com/news/wp-content/uploads/2023/04/images-2023-04-13T160251.787.jpeg",
  },
  {
    title: "Private Event Space",
    description: "Host your special moments in our private space.",
    image: "https://www.opentable.com/restaurant-solutions/resources/wp-content/uploads/sites/468/2021/09/private-event-space2.jpeg",
  },
];

const Services = () => {
  return (

    <section id="space" className=" flex-row py-16 bg-white px-4">
      

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">We Offer Creative Working Environments</h2>
        <h3>Find your perfect working place. Choose from versatile options tailored to your needs.</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primaryColor-50 mb-2">{service.title}</h3>
              <div className="min-h-0.5 bg-primaryColor-50 mb-1 w-12 "></div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-primaryColor-50 font-bold hover:underline">Learn More</button>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default Services;
