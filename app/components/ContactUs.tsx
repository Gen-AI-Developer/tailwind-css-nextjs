import React from "react";

const ContactUs = () => {
  return (
    <div>
      {/* Contact Card */}
      <div className="bg-stone-700 text-stone-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-serif mb-4">Contact me</h2>
        <button className="w-full py-2 px-4 border border-stone-100 rounded hover:bg-stone-600 transition-colors duration-300">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
