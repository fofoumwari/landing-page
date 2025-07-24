// src/components/Contact.jsx
import React, { useState } from 'react';
import { MapPin , Mail, PhoneCall} from 'lucide-react';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // Handle real submission logic here
      setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img
          src="https://cdn.vectorstock.com/i/500p/86/48/world-map-on-transparent-background-vector-44408648.jpg"
          alt="World map background"
          className="w-full h-full object-cover"
        /></div>
        <div className="z-10 space-y-10">
        <h2 className="text-primaryColor-50 font-semibold">Contact Us</h2>
        <h1 className="text-4xl font-bold">Say Hello</h1>

        <div className="flex items-center gap-4">
          <div className="text-primaryColor-50 py-1 px-1 border-2 border-dotted border-primaryColor-50 rounded-full inline-flex">
            <div className="bg-primaryColor-50 text-white p-2 rounded-full flex items-center justify-center">
              <MdLocationOn size={24} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>Location KG 9 Ave, Kigali</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className='text-primaryColor-50 py-1 px-1 border-2 border-dotted border-primaryColor-50 rounded-full inline-flex'>
            <div className="bg-primaryColor-50 text-white p-2 rounded-full flex items-center justify-center">
              <Mail size={30} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600 underline">businesscafe@info.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className='text-primaryColor-50 py-1 px-1 border-2 border-dotted border-primaryColor-50 rounded-full inline-flex'>
            <div className="bg-primaryColor-50 text-white p-2 rounded-full flex items-center justify-center">
              <PhoneCall size={30} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+250788183828</p>
          </div>
        </div>
      </div>
          {/* Contact Form */}
          <div className="z-10">
        <h2 className="text-primaryColor-50 font-semibold">Have Question ?</h2>
        <h1 className="text-4xl font-bold pb-6">Send a Message</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone (e.g., 0788123456)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="bg-primaryColor-50 text-white py-2 px-6 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
     
    </section>
  );
};

export default Contact;