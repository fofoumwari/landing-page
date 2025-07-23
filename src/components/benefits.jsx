// src/components/Benefits.jsx
import React from 'react';

const leftColumn = [
  {
    title: "Creative Space",
    description: "we offer a welcoming and reliable space for all with friendly staff",
    logo: "https://img.icons8.com/ios-filled/50/000000/idea.png"
  },
  {
    title: "High Speed Wifi",
    description: "free high-speed Wi-Fi and plenty of charging outlets. ",
    logo: "https://img.icons8.com/ios-filled/50/000000/wifi.png"
  },
  {
    title: "Parking Area",
    description: "we offer a secure on-site parking area.",
    logo: "https://img.icons8.com/ios-filled/50/000000/parking.png"
  },
];

const rightColumn = [
  {
    title: "24/7 Access",
    description: "Open 24/7 to Serve You Better.",
    logo: "https://img.icons8.com/ios-filled/50/000000/clock.png"
  },
  {
    title: "Great Location",
    description: "Come for the coffee. Stay for the vibe. Return for the convenience.",
    logo: "https://img.icons8.com/ios-filled/50/000000/marker.png"
  },
  {
    title: "Outdoor Space",
    description: "Come in. Stay connected. Stay as long as you like we’re always open.",
    logo: "https://img.icons8.com/ios-filled/50/000000/garden.png"
  },
];

const Benefits = () => {
  return (
    <section className="id='space'py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center ">
        <h4><span className="text-primaryColor-50">your Benefits</span></h4>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us</h3>
        <p className="text-gray-600 text-lg mb-12">
          Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning team today.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col gap-6 justify-between ">
            {leftColumn.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md h-full bg-primaryColor-50/10">
                <div className="flex justify-center mb-4">
                  <img src={item.logo} alt={`${item.title} icon`} className="w-10 h-10 bg-primaryColor-50" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center Column - Full Image filling height */}
          <div className="flex items-stretch">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.NZ_CJzHc1yggxbQuTXoJIgHaEC?pid=Api&P=0&h=220"
              alt="Workspace"
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 justify-between">
            {rightColumn.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md h-full bg-primaryColor-50/10">
                <div className="flex justify-center mb-4">
                  <img src={item.logo} alt={`${item.title} icon`} className="w-10 h-10 bg-primaryColor-50" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
