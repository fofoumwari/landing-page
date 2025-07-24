// src/components/Contact.jsx
import React, { useState } from 'react';
import { MapPin, Mail, PhoneCall } from 'lucide-react';

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
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold  text-primaryColor-50 mb-10">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <h3 className="text-xl font-bold text-black mb-6">Say Hello</h3>
          <div className="w-20 h-20 rounded-full border border-dashed border-primaryColor-50 flex items-center justify-center text-primaryColor-50 hover:bg-primary-100">
    <MapPin className="w-10 h-10" />
  </div>
            <div>
              <h3 className="font-bold text-black">Address</h3>
              <p className="text-gray-600">Location KG 12 Ave, Kigali</p>
            </div>
            <div className="w-20 h-20 rounded-full border border-dashed border-primaryColor-50 flex items-center justify-center text-primaryColor-50 hover:bg-primary-100">
    <Mail className="w-10 h-10" />
  </div>
            <div>
              <h3 className="font-bold text-black">Email</h3>
              <p className="text-gray-600">businesscafe@info.com</p>
            </div>
            <div className="w-20 h-20 rounded-full border border-dashed border-primaryColor-50 flex items-center justify-center text-primaryColor-50 hover:bg-primary-100">
    <PhoneCall className="w-10 h-10" />
  </div>
            <div>
              <h3 className="font-bold text-black">Phone</h3>
              <p className="text-gray-600">+250788183828</p>
            </div>
          </div>

          {/* Contact Form */}
         
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
             <h3 className="text-xl font-semibold text-primaryColor-50 mb-4">Have a Question?</h3>
             <h2 className='text-2xl font-bold text-gray-800 mb-4'>Send a message</h2>
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

            <button type="submit" className="bg-primaryColor-50 text-white py-2 px-6 rounded-lg hover:bg-primaryColor-50">
              Send Message
            </button>
          </form>
        </div>

    </section>
  );
};

export default Contact;