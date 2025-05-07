import React from 'react';
import GradientHeading from './components/GradientHeading';

const Contact = () => {
  return (
    <div id='contact' className="bg-black text-white py-16 px-4 md:px-12 font-calsans">
      <GradientHeading
        text="Contact Us"
        className='mb-4'
        size="text-4xl md:text-3xl lg:text-4xl"
      />  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <form
          className="space-y-6 bg-black p-8 border border-blue-400 rounded-lg shadow-md"
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree or backend handler
          method="POST"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-green-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className=" py-2 px-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Google Maps Embed */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-green-400">
          <iframe
            title="Progressive Mind Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.186728289177!2d77.65221257481774!3d12.83120721794127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d5f729f8ddd%3A0x66dc31156c0b54d7!2sMasjid-e-Abu%20Baker%2C%20Ahle%20hadees!5e0!3m2!1sen!2sin!4v1746636695242!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
