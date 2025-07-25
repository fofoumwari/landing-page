import React from 'react';
import { Layers } from 'lucide-react';

const leftColumn = [
  { title: "Creative Space", description: "we offer a welcoming and reliable space for all with friendly staff" },
  { title: "High Speed Wifi", description: "free high-speed Wi-Fi and plenty of charging outlets." },
  { title: "Parking Area", description: "we offer a secure on-site parking area." },
];

const rightColumn = [
  { title: "24/7 Access", description: "Open 24/7 to Serve You Better." },
  { title: "Great Location", description: "Come for the coffee. Stay for the vibe. Return for the convenience." },
  { title: "Outdoor Space", description: "Come in. Stay connected. Stay as long as you like we’re always open." },
];

const Benefits = () => {
  return (
    <section id="space" className="py-16 bg-white px-4 rounded-2xl overflow-hidden shadow-lg">
      <div className="text-center px-4">
        <h1 className="text-primaryColor-50 text-md">Your Benefits</h1>
        <h2 className="font-bold text-3xl py-3">Why Choose Us</h2>
        <p className="pb-8 max-w-2xl mx-auto">
          Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning team today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col gap-6 justify-between">
          {leftColumn.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md h-full bg-primaryColor-50/10">
              <div className="flex justify-center mb-4">
                <div className="bg-primaryColor-50 rounded-full p-3 flex items-center justify-center">
                  <Layers size={45} color="#fff" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        {/* Center Column */}
        <div className="flex items-stretch">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.MAAtdg6Rm6Bdxo4TYhoPhgHaEo?pid=Api&P=0&h=220"
            alt="Workspace"
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-6 justify-between">
          {rightColumn.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md h-full bg-primaryColor-50/10">
              <div className="flex justify-center mb-4">
                <div className="bg-primaryColor-50 rounded-full p-3 flex items-center justify-center">
                  <Layers size={45} color="#fff" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;