import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-16 px-8 bg-white overflow-hidden flex justify-between items-center">
      <div className="max-w-xl">
        <h2 className="text-4xl font-extrabold mb-6">
          Are you ready to take your company revenue next level?
        </h2>
        <a
          href="#contact"
          className="inline-block px-8 py-3 text-white bg-black rounded-full text-xl font-semibold hover:bg-gray-900 transition-colors"
        >
          Contact Us
        </a>
      </div>
      
      <div className="ms-auto">
        <img
          src="/grawxcta.png"
          alt="Project Section"
          className="w-full max-w-xs" // You can adjust the size of the image here
        />
      </div>
    </section>
  );
};

export default CTA;