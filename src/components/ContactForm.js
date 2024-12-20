import React from "react";

function ContactForm() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
      <form className="max-w-lg mx-auto bg-white shadow p-6 rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
